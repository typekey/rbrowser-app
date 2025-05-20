self.onmessage = function(e) {
    const { data, type, plot, region } = e.data;
    let result

    switch (type.toLowerCase()) {
      case 'fasta':
        result = self.formatFasta(data, region, plot)
        break
      case 'rna':
        result = self.formatRNA(data, region, plot)
        break
      case 'ccre':
        result = self.formatCCRE(data, region, plot)
        break
      case 'model':
        result = self.formatTransModel(data, region, plot)
        break
      case 'rbp':
        result = self.formatRBP(data, region, plot)
        break
      case 'sqtl':
        result = self.formatSQTL(data, region, plot)
        break
      case 'eqtl':
        result = self.formatEQTL(data, region, plot)
        break
      case 'junction':
        result = self.formatJunction(data, region, plot)
        break
      case 'junction_expression':
          result = self.formatJunctionExpression(data, region, plot)
          break
      case 'exon_expression':
        result = self.formatExonExpression(data, region, plot)
        break
      case 'modification':
        result = self.formatModification(data, region, plot)
        break
      case 'bed':
        result = self.formatBed(data, region, plot)
        break
      case 'med':
        result = self.formatMed(data, region, plot)
        break
      case 'vcf':
        result = self.formatVCF(data, region, plot)
        break
      case 'bigwig':
          result = self.formatBigWig(data, region, plot)
          break
      case 'bigbed':
        result = self.formatBigBed(data, region, plot)
        break
      case 'gff':
          result = self.formatGFF(data, region, plot)
          break
      default:
          result = self.formatConnect(data, region, plot)

    }

    self.postMessage({ success: true, data: result });

  };

  self.formatFasta = (data, region, plot) => {
    const { start, end } = region
    const { sequence: { sequence } } = data

    const seqArr = Array.from(sequence)


    const names = []
    const colors = []
    const seqChildren = []
    const startSeq = region['start']
    const maxEnd = region['end']
    // const colorMap = {
    //   A: 'green',
    //   T: 'red',
    //   G: 'blue',
    //   C: 'yellow'
    // }

    // for (let i = 0; i < seqArr.length; i++) {
    //   const base = seqArr[i]
    //   if (base in colorMap) {
    //     colors.push(colorMap[base])
    //   } else {
    //     colors.push('white')
    //   }

    //   names.push({'name': base, 'position': i + startSeq})
    // }

    if (seqArr.length > 0) {
      return {
        name: 'Fasta',
        sort: 0,
        size: seqArr.length,
        plot: plot,
        start: 0,
        end: seqArr.length,
        names: seqArr,
        colors: colors
      }
    } else {
      return undefined
    }
  }

  self.formatCCRE = (data, region, plot) => {
    const ccre = data['ccre']
    const startSeq = region['start']
    const maxEnd = region['end']
    const ccreChildren = []
    const ccreObj = {}
    const startArr = []
    const endArr = []
    const namesArr = []
    const colorArr = []
    const names = []
    const colorsMap = {
      CTCF: 'red',
      Enhancer: 'yellow',
      Promoter: 'green',
      OChrom: 'red'
    }

    for (const ccreName in ccre) {
      const val = ccre[ccreName]
      const positions = val['position']
      const names = val['name']
      const ids = val['id']
      const start = positions.filter((item, index) => index % 2 === 0 && item > startSeq).map((ele) => ele - startSeq)
      const end = positions.filter((item, index) => index % 2 !== 0 && item < maxEnd).map((ele) => ele - startSeq)
      startArr.push(...start)
      endArr.push(...end)
      namesArr.push(...names)

      ccreObj[ccreName] = {
        name: ccreName,
        start: start,
        end: end,
        size: startArr.length,
        plot: plot,
        props: val
      }
    }

    for (const ccreName in ccreObj) {
      const childNames = []
      ccreObj[ccreName].start.forEach((ele, index) => {
        colorArr.push(colorsMap[ccreName])
        childNames.push({'name': namesArr[index], 'start': ele + startSeq,'end':ccreObj[ccreName].end[index] + startSeq})
      })
      ccreChildren.push({
        name: ccreName,
        size: ccreObj[ccreName].start.length,
        plot: plot,
        color: colorsMap[ccreName],
        start: ccreObj[ccreName].start,
        end: ccreObj[ccreName].end,
        names: childNames,
        props: ccreObj[ccreName].props
      })
    }

    startArr.forEach((ele, index) => {
      names.push({'name': namesArr[index], 'start': ele + startSeq,'end': endArr[index] + startSeq})
    })

    if (startArr.length > 0) {
      return {
        sort: 4,
        name: 'CCRE',
        plot: plot,
        size: startArr.length,
        start: startArr,
        end: endArr,
        color: colorArr,
        names: names,
        children: ccreChildren
      }
    } else {
      return undefined
    }
  }

  self.formatRNA = (data, region, plot) => {
    const featuresJson = data.base
    const { start, end, offset } = region
    const startSeq = region['start']
    const codonObj = {}
    const baseChildren = []
    const startTotal = []
    const endTotal = []
    const colorTotal = []
    const baseNameTotal = []
    const names = []
    const colorsMap = {
      exon: 'gray',
      CDS: 'gray',
      UTR: 'ocean',
      start_codon: 'red',
      stop_codon: 'red'
    }

    for (const baseName in featuresJson) {
      const element = featuresJson[baseName]
      const positions = element['position']
      const start = positions.filter((_, index) => index % 2 === 0).map((ele) => ele - startSeq)
      const end = positions.filter((_, index) => index % 2 !== 0).map((ele) => ele - startSeq)
      const colors = start.map((_, i) => colorsMap[baseName])
      const baseNames = start.map((_, i) => baseName)




      startTotal.push(...start)
      endTotal.push(...end)
      colorTotal.push(...colors)
      baseNameTotal.push(...baseNames)

      // start and stop codon
      // if ('start_codon' === baseName || 'stop_codon' === baseName) {
      //   if ('Codon' in codonObj) {
      //     codonObj['Codon'].start.push(...start)
      //     codonObj['Codon'].end.push(...end)
      //     codonObj['Codon'].props.push(element)
      //   } else {
      //     codonObj['Codon'] = {
      //       start: start,
      //       end: end,
      //       color: colorsMap[baseName],
      //       props: [element]
      //     }
      //   }
      // } else {
        const childNames = []

        start.forEach((ele, index) => {
          childNames.push({'name': baseName, 'start': ele + startSeq,'end': end[index] + startSeq})
        })

        // const color = colorsMap[baseName]
        baseChildren.push({
          name: baseName.replace(/( |^)[a-z]/g, (L) => L.toUpperCase()),
          color: colorsMap[baseName],
          start: start,
          end: end,
          size: start.length,
          plot: plot,
          names: childNames,
          props: element
        })
      // }

      if (baseName === 'exon') {
        let total = 0
        start.forEach((ele, index) => {
          total += end[index] - ele + 1
        })
      }
    }

    startTotal.forEach((ele, index) => {
      names.push({'name': baseNameTotal[index], 'start': ele + startSeq,'end': endTotal[index] + startSeq})
    })

    // if ('Codon' in codonObj)
    //   baseChildren.push({
    //     name: 'Codon',
    //     start: codonObj['Codon'].start,
    //     end: codonObj['Codon'].end,
    //     size: codonObj['Codon'].start.length,
    //     color: 'red',
    //     plot: plot,
    //     props: codonObj['Codon'].props
    //   })

    //   startTotal.forEach((ele, index) => {
    //     names.push({'name': baseNameTotal[index], 'start': ele + startSeq,'end': endTotal[index] + startSeq})
    //   })



    if (startTotal.length > 0) {
      return {
        name: 'RNA',
        sort: 3,
        plot: plot,
        size: startTotal.length,
        inner: [Math.min(...startTotal), Math.max(...endTotal)],
        color: colorTotal,
        start: startTotal,
        end: endTotal,
        names: names,
        children: baseChildren
      }
    } else {
      return undefined
    }
  }

  self.formatTransModel = (data, region, plot) => {
    const featureData = data['trans_model']


    if (featureData === undefined || featureData === null) {
      return undefined
    }

    const names = []
    const { start, end } = region

    const startSeq = start < end ? start : end
    const maxEnd = start < end ? end : start
    const exonChildren = []
    let exonStartArr = []
    let exonEndArr = []


    featureData.forEach((ele) => {
      const str_feature = ele['features'].replace(new RegExp("'", 'gmi'), '"')
      const exons = JSON.parse(str_feature)['exon']
      exonStartArr = exons
        // .filter((item, index) => index % 2 === 0 && item < maxEnd && item > startSeq)
        .filter((item, index) => index % 2 === 0)
        .map((ele) => ele - startSeq)
      exonEndArr = exons
        // .filter((item, index) => index % 2 !== 0 && item < maxEnd)
        .filter((item, index) => index % 2 !== 0)
        .map((ele) => ele - startSeq)

      const childNames = []
      exonStartArr.forEach((ele, index) => {
        names.push({'name': 'Exon '+ (index+1), 'start': ele + startSeq,'end': exonEndArr[index] + startSeq})
      })





      exonChildren.push({
        name: 'Exon',
        plot: plot,
        start: exonStartArr,
        end: exonEndArr,
        names: childNames
      })
    })

    exonStartArr.forEach((ele, index) => {
      names.push({'name': 'Exon '+ (index+1), 'start': ele + startSeq,'end': exonEndArr[index] + startSeq})
    })

    if (exonStartArr.length > 0) {
      return {
        sort: 1,
        name: 'Splicing',
        size: exonStartArr.length,
        plot: plot,
        start: exonStartArr,
        end: exonEndArr,
        names: names,
        children: exonChildren
      }
    } else {
      return undefined
    }
  }

  self.formatRBP = (data, region, plot) => {


    const rbp = data['rbp']
    const startSeq = region['start']
    const maxEnd = region['end']
    const rbpObj = {}
    const rbpChildren = []
    const startTotal = []
    const endTotal = []
    const names = []


    for (const rbpName in rbp) {
      // if (rbpName === 'UPF1') continue
      const val = rbp[rbpName]
      const positions = val['position']
      const startArr = positions
        .filter((item, index) => index % 2 === 0 && item > startSeq)
        .map((ele) => ele - startSeq)
      const endArr = positions.filter((item, index) => index % 2 !== 0 && item < maxEnd).map((ele) => ele - startSeq)
      startTotal.push(...startArr)
      endTotal.push(...endArr)

      rbpObj[rbpName] = {
        start: startArr,
        end: endArr,
        props: val
      }
    }

    for (const rbpName in rbpObj) {
      const childNames = []

      rbpObj[rbpName].start.forEach((ele, index) => {
        childNames.push({'name': rbpName, 'start': ele + startSeq,'end': rbpObj[rbpName].end[index] + startSeq})
      })

      rbpChildren.push({
        name: rbpName,
        size: rbpObj[rbpName].start.length,
        plot: plot,
        start: rbpObj[rbpName].start,
        end: rbpObj[rbpName].end,
        names: childNames,
        props: rbpObj[rbpName].props
      })
    }

    if (startTotal.length > 0) {
      return {
        name: 'RBP',
        sort: 5,
        plot: plot,
        start: startTotal,
        end: endTotal,
        names: rbp,
        children: rbpChildren
      }
    } else {
      return undefined
    }
  }

  self.formatSQTL = (data, region, plot) => {
    const sqtls = data['sqtl']
    const { start, end } = region
    const positions = []
    const scores = []
    const tissues = []
    const tissuesObj = {}
    const positionObj = {}
    const names = []

    if (sqtls === undefined || sqtls.length === 0) {
      return undefined
    }

    sqtls.forEach((ele) => {

      if (ele.position >= start && ele.position <= end) {
        const tissueName = ele.tissue
        if (tissueName in tissuesObj) {
          tissuesObj[tissueName].positions.push(ele.position - start)
          tissuesObj[tissueName].scores.push(ele.slope)
          tissuesObj[tissueName].props.push(ele)
        } else {
          tissuesObj[tissueName] = {
            positions: [ele.position - start],
            scores: [ele.slope],
            props: [ele]
          }
        }

        const positionX = ele.position - start
        if (positionX in positionObj) {
          positionObj[positionX] += 1
        } else {
          positionObj[positionX] = 1
        }
      }
    })

    for (const tissueName in tissuesObj) {
      const childNames = []
      const starts = tissuesObj[tissueName].positions
      const scores = tissuesObj[tissueName].scores

      tissuesObj[tissueName].positions.forEach((ele, index) => {
        childNames.push({'name': tissueName, 'position': starts[index] + start, 'score': scores[index]})
      })

      tissues.push({
        name: tissueName,
        size: starts.length,
        plot: plot,
        start: starts,
        scores: scores,
        names: childNames,
        props: tissuesObj[tissueName].props
      })
    }

    for (const positionX in positionObj) {
      positions.push(parseInt(positionX))
      scores.push(positionObj[positionX])
      names.push({'position': parseInt(positionX) + start,'total': positionObj[positionX]})
    }

    let maxScore = 0
    let minScore = 0
    tissues.forEach((ele) => {
      const { scores } = ele
      scores.forEach((count) => {
        if (count > maxScore) maxScore = count
        if (count < minScore) minScore = count
      })
    })

    if (positions.length > 0) {
      return {
        name: 'sQTLs',
        sort: 8,
        size: positions.length,
        plot: plot,
        start: positions,
        range: [minScore, maxScore],
        scores: scores,
        names: names,
        children: tissues
      }
    } else {
      return undefined
    }
  }

  self.formatEQTL = (data, region, plot) => {

    const eqtls = data['eqtl']
    const { start, end } = region
    const positions = []
    const scores = []
    const tissues = []
    const tissuesObj = {}
    const positionObj = {}
    const names = []

    if (eqtls === undefined || eqtls.length === 0) {
      return undefined
    }

    eqtls.forEach((ele) => {
      if (ele.position >= start && ele.position <= end) {
        const tissueName = ele.tissue
        if (tissueName in tissuesObj) {
          tissuesObj[tissueName].positions.push(ele.position - start)
          tissuesObj[tissueName].scores.push(ele.nes)
          tissuesObj[tissueName].props.push(ele)
        } else {
          tissuesObj[tissueName] = {
            positions: [ele.position - start],
            scores: [ele.nes],
            props: [ele]
          }
        }

        const positionX = ele.position - start
        if (positionX in positionObj) {
          positionObj[positionX] += 1
        } else {
          positionObj[positionX] = 1
        }
      }
    })

    for (const tissueName in tissuesObj) {
      const childNames = []
      const starts = tissuesObj[tissueName].positions
      const scores = tissuesObj[tissueName].scores

      tissuesObj[tissueName].positions.forEach((ele, index) => {
        childNames.push({'name': tissueName, 'position': starts[index] + start, 'score': scores[index]})
      })

      tissues.push({
        name: tissueName,
        size: starts.length,
        plot: plot,
        start: starts,
        scores: scores,
        names: childNames,
        props: tissuesObj[tissueName].props
      })
    }

    for (const positionX in positionObj) {
      positions.push(parseInt(positionX))
      scores.push(positionObj[positionX])
      names.push({'position': parseInt(positionX) + start,'total': positionObj[positionX]})
    }

    let maxScore = 0
    let minScore = 0
    tissues.forEach((ele) => {
      const { scores } = ele
      scores.forEach((count) => {
        if (count > maxScore) maxScore = count
        if (count < minScore) minScore = count
      })
    })

    if (positions.length > 0) {
      return {
        name: 'eQTLs',
        sort: 7,
        size: positions.length,
        plot: plot,
        start: positions,
        range: [minScore, maxScore],
        scores: scores,
        names: names,
        children: tissues
      }
    } else {
      return undefined
    }
  }

  self.formatJunction = (data, region, plot) => {

    const juncExp = data['junc_expression']
    const junctionChildren = []
    let juncStarts = []
    let juncEnds = []
    const startSeq = region['start']
    const maxEnd = region['end']
    // const { start: regionStart, end: regionEnd } = region

    const regionStart = 11058
    const regionEnd = 14452

    const test_res = {"start": [12058, 12228, 12698, 12722, 13053, 13375], "end": [12178, 12612, 12974, 13220, 13220, 13452], "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "children": [{"name": "Adipose Subcutaneous", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Adipose Visceral Omentum", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Adrenal Gland", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Artery Aorta", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Artery Coronary", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Artery Tibial", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Bladder", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Brain Amygdala", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Brain Anterior cingulate cortex BA24", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Brain Caudate basal ganglia", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Brain Cerebellar Hemisphere", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Brain Cerebellum", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Brain Cortex", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Brain Frontal Cortex BA9", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Brain Hippocampus", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Brain Hypothalamus", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Brain Nucleus accumbens basal ganglia", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Brain Putamen basal ganglia", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Brain Spinal cord cervical c-1", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Brain Substantia nigra", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Breast Mammary Tissue", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Cells EBV-transformed lymphocytes", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Cells Cultured fibroblasts", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Cervix Ectocervix", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Cervix Endocervix", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Colon Sigmoid", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Colon Transverse", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Esophagus Gastroesophageal Junction", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Esophagus Mucosa", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Esophagus Muscularis", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Fallopian Tube", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Heart Atrial Appendage", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Heart Left Ventricle", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Kidney Cortex", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Kidney Medulla", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Liver", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Lung", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Minor Salivary Gland", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Muscle Skeletal", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Nerve Tibial", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Ovary", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Pancreas", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Pituitary", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Prostate", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Skin Not Sun Exposed Suprapubic", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Skin Sun Exposed Lower leg", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Small Intestine Terminal Ileum", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Spleen", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Stomach", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Testis", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Thyroid", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Uterus", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Vagina", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, {"name": "Whole Blood", "count": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}]}


    // 检测是否在 view region 内
    juncStarts = test_res['start'].map((start)=>{
      if (start <= regionStart) return 0
      else return start - regionStart
    })



    juncEnds = test_res['end'].map((end)=>{
      if (end >= regionEnd) return regionEnd-regionStart
      else return end - regionStart
    })





    // juncEnds = test_res['start'].filter((item, index) => item < maxEnd).map((ele) => ele - regionStart)

    // for (const tissue in juncExp) {
    //   const info = juncExp[tissue]
    //   const ids = info['id']
    //   const juncs = info['position']
    //   const expression = info['expression']
    //   juncStarts = juncs
    //     .filter((item, index) => index % 2 === 0 && item < maxEnd && item > startSeq)
    //     .map((ele) => ele - startSeq)
    //   juncEnds = juncs.filter((item, index) => index % 2 !== 0 && item < maxEnd).map((ele) => ele - startSeq)
    //   const descriptions = expression.map((val, i) => `Id: <b>Junction${i + 1}</b><br/>Expression: <b>${val}</b>`)
    //   junctionChildren.push({
    //     name: 'Junction',
    //     plot: plot,
    //     start: juncStarts,
    //     end: juncEnds,
    //     feat_s: 'Junction'
    //   })
    // }



    if (juncStarts.length > 0) {
      return {
        sort: 2,
        name: 'Junction',
        plot: plot,
        count: test_res['count'],
        size: juncStarts.length,
        start: juncStarts,
        end: juncEnds,
        feat_s: 'Junction',
        children: test_res['children']
      }
    } else {
      return undefined
    }
  }

  self.formatJunctionExpression = (data, region, plot) => {
    const juncExp = data['junc_expression']
    if(!juncExp || !juncExp.data) return

    const juncObj = juncExp['data']
    const names = []


    const junctionChildren = []
    let juncStarts = []
    let juncEnds = []
    const { start: regionStart, end: regionEnd } = region

    if (juncObj === undefined || Object.keys(juncObj).length === 0) {
      return undefined
    }

    // 检测是否在 view region 内
    juncStarts = juncObj['start'].map((start)=>{
      if (start <= regionStart) return 0
      else return start - regionStart
    })



    juncEnds = juncObj['end'].map((end)=>{
      if (end >= regionEnd) return regionEnd-regionStart
      else return end - regionStart
    })



    let maxCount = 0
    let minCount = 0
    juncObj['children'].forEach((ele, i) => {
      const { count: counts } = ele
      const childNames = []

      counts.forEach((count, j) => {

        if (count > maxCount) maxCount = count
        if (count < minCount) minCount = count
        childNames.push({'name': 'Junction '+ (j+1), 'start': juncStarts[j] + regionStart,'end': juncEnds[j] + regionStart, 'total': count})
      })

      juncObj['children'][i]['names'] = childNames
    })

    juncStarts.forEach((ele, index) => {
      names.push({'name': 'Junction '+ (index+1), 'start': ele + regionStart,'end': juncEnds[index] + regionStart, 'total': juncObj['count'][index]})
    })


    if (juncStarts.length > 0) {
      return {
        sort: 2,
        name: 'Junction',
        plot: plot,
        count: juncObj['count'],
        size: juncStarts.length,
        start: juncStarts,
        end: juncEnds,
        feat_s: 'Junction',
        names: names,
        // range: [minCount, Math.max(...juncObj['count'])],
        range: [minCount, maxCount],
        children: juncObj['children']
      }
    } else {
      return undefined
    }
  }

  self.formatExonExpression = (data, region, plot) => {
    const exonExp = data['exon_expression']

    if (exonExp === undefined || Object.keys(exonExp).length === 0) {
      return undefined
    }
    const exonObj = exonExp['data']
    const names = []


    const junctionChildren = []
    let exonStarts = []
    let exonEnds = []
    const { start: regionStart, end: regionEnd } = region

    // 检测是否在 view region 内
    exonStarts = exonObj['start'].map((start)=>{
      if (start <= regionStart) return 0
      else return start - regionStart
    })



    exonEnds = exonObj['end'].map((end)=>{
      if (end >= regionEnd) return regionEnd-regionStart
      else return end - regionStart
    })



    exonStarts.forEach((ele, index) => {
      names.push({'name': 'Exon '+ (index+1), 'start': ele + regionStart,'end': exonEnds[index] + regionStart, 'total': exonObj['count'][index]})
    })

    let maxCount = 0
    let minCount = 0
    exonObj['children'].forEach((ele, i) => {

      const { count: counts } = ele
      const childName = []
      counts.forEach((count, j) => {

        if (count > maxCount) maxCount = count
        if (count < minCount) minCount = count
      })

      exonStarts.forEach((start, index) => {
        childName.push({'name': 'Exon '+ (index+1), 'start': start + regionStart,'end': exonEnds[index] + regionStart, 'total': counts[index]})
      })

      exonObj['children'][i]['names'] = childName
    })


    if (exonStarts.length > 0) {
      return {
        sort: 2,
        name: 'Exon',
        plot: plot,
        count: exonObj['count'],
        size: exonStarts.length,
        start: exonStarts,
        end: exonEnds,
        names: names,
        // range: [minCount, Math.max(...exonObj['count'])],
        range: [minCount, maxCount],
        children: exonObj['children']
      }
    } else {
      return undefined
    }
  }

  self.formatModification = (data, region, plot) => {


    if (data[0] === undefined) return undefined
    const { start, end } = region
    const positions = []
    const tissuesObj = {}
    const positionObj = {}
    const childrenArr = []
    const scores = []
    const names = []
    let minRange = 1
    let maxRange = 1

    const detection = data[0].detection

    data.forEach((ele) => {
      const position = ele.pos
      const tissue = ele.cell_line
      const frac = ele.frac
      const positionX = position - start

      // if (position > start) positions.push(position - start)

      if (frac > maxRange) maxRange = frac
      if (frac < minRange) minRange = frac

      if (tissue in tissuesObj) {
        tissuesObj[tissue].position.push(positionX)
        tissuesObj[tissue].scores.push(frac)
        tissuesObj[tissue].props.push(ele)
      }else {
        tissuesObj[tissue]={
          position: [position - start],
          scores: [frac],
          props: [ele]
        }
      }

        if (positionX in positionObj) {
          positionObj[positionX] += 1
        } else {
          positionObj[positionX] = 1
        }
    })

    for (const tissueName in tissuesObj) {

      const positions = tissuesObj[tissueName].position
      const scores = tissuesObj[tissueName].scores
      const props = tissuesObj[tissueName].props
      const childNames = []

      positions.forEach((ele, index) => {
        childNames.push({'name': tissueName, 'position': ele + start, 'score': scores[index]})
      })
      childrenArr.push({
        name: tissueName,
        size: positions.length,
        plot: plot,
        start: positions,
        scores: scores,
        names: childNames,
        props: props
      })
    }



    for (const positionX in positionObj) {
      positions.push(parseInt(positionX))
      scores.push(positionObj[positionX])
      names.push({'position': parseInt(positionX) + start,'total': positionObj[positionX]})
    }





    return {
      sort:1,
      name: 'RNA modification ' + detection,
      plot: plot,
      scores: scores,
      size: positions.length,
      start: positions,
      names: names,
      range: [minRange, maxRange],
      children: childrenArr
    }
  }

  self.formatBed = (data, region, plot) => {
    const starts = []
    const ends = []
    const name = []
    const strand = []
    let currentRegion = region
    let max = 0
    let min = 0

    if (this.region instanceof Array) {
      this.region.forEach((region) => {
        const { status } = region
        if (status === 'Pending') {
          currentRegion = region
        }
      })
    }

    data.forEach((ele) => {
      const scale_start = ele.chromStart - currentRegion.start + currentRegion.offset
      const scale_end = ele.chromEnd - currentRegion.start + currentRegion.offset
      const region_len = currentRegion.end - currentRegion.start
      starts.push(scale_start < 0 ? 0 : scale_start)
      ends.push(scale_end > region_len ? region_len : scale_end)
      // starts.push(ele.chromStart - currentRegion.start + currentRegion.offset)
      // ends.push(ele.chromEnd - currentRegion.start + currentRegion.offset)
    })

    return {
      name: 'bed',
      size: starts.length,
      plot: plot,
      start: starts,
      end: ends,
      range: [min, max],
      props: data,
      children: []
    }
  }

  self.formatMed = (data, region, plot) => {
    const starts = []
    const ends = []
    const name = []
    const strand = []
    let currentRegion = region
    let max = 0
    let min = 0

    if (this.region instanceof Array) {
      this.region.forEach((region) => {
        const { status } = region
        if (status === 'Pending') {
          currentRegion = region
        }
      })
    }

    data.forEach((ele) => {
      // starts.push(ele.chromStart - currentRegion.start + currentRegion.offset)
      // ends.push(ele.chromEnd - currentRegion.start + currentRegion.offset)
      starts.push(ele.chromStart)
      ends.push(ele.chromEnd)
    })
    return {
      name: 'med',
      size: starts.length,
      plot: plot,
      start: starts,
      end: ends,
      range: [min, max],
      props: data,
      children: []
    }
  }

  self.formatBigBed = (data, region, plot) => {
    const startTotal = []
    const endTotal = []
    const score = []
    let max = 0
    let min = 999



    data.forEach((ele) => {
      const scale_start = ele.start - region.start
      const scale_end = ele.end - region.start
      const region_len = region.end - region.start
      startTotal.push(scale_start < 0 ? 0 : scale_start)
      endTotal.push(scale_end > region_len ? region_len : scale_end)
      score.push(ele.score)


      if (ele.score > max) max = ele.score
      if (ele.score < min) min = ele.score
    })


    return {
      name: 'bigbed',
      size: startTotal.length,
      plot: plot,
      start: startTotal,
      end: endTotal,
      score: score,
      range: [min, max],
      props: data,
      children: []
    }
  }

  // self.formatBigBed = (data, region, plot) => {
  //   const start = []
  //   const end = []
  //   const score = []
  //   let max = 0
  //   let min = 999
  //   const { start: regionStart, end: regionEnd, offset: regionOffset } = region

  //   // test
  //   // const testStart = 7746645

  //   data.forEach((ele) => {
  //     // let startX = start
  //     // let endX = end
  //     // if (start <= regionStart - regionOffset) startX = regionStart - regionOffset - 1
  //     // if (end >= regionEnd + regionOffset) endX = regionEnd + regionOffset
  //     // positions.push(ele.chromStart - region.start + region.offset)
  //     start.push(ele.chromStart - regionStart + region.offset)
  //     end.push(ele.chromEnd - regionStart + region.offset)
  //     score.push(ele.score)
  //     if (ele.score > max) max = ele.score
  //     if (ele.score < min) min = ele.score
  //   })
  //   return {
  //     name: 'bed',
  //     size: start.length,
  //     plot: plot,
  //     start: start,
  //     end: end,
  //     score: score,
  //     props: data,
  //     range: [min, max],
  //     children: []
  //   }
  // }

  self.formatVCF = (data, region, plot) => {
    console.time('formatVCF ==>')
    const starts = []
    const ends = []

    data.forEach((ele) => {
      starts.push(ele.POS - region.start + region.offset)
      ends.push(ele.POS - region.start + region.offset + 1)
    })

    console.timeEnd('formatVCF ==>')
    return {
      name: 'vcf',
      size: starts.length,
      plot: plot,
      start: starts,
      end: ends,
      range: [0, 0],
      props: data,
      children: []
    }
  }

  self.formatBigWig = (data, region, plot) => {
    const startTotal = []
    const endTotal = []
    const score = []
    let max = 0
    let min = 999



    data.forEach((ele) => {
      const scale_start = ele.start - region.start
      const scale_end = ele.end - region.start
      const region_len = region.end - region.start

      // startTotal.push(ele.start - region.start )
      // endTotal.push(ele.end - region.start)

      startTotal.push(scale_start < 0 ? 0 : scale_start)
      endTotal.push(scale_end > region_len ? region_len : scale_end)
      score.push(ele.score)


      score.push(ele.score)
      if (ele.score > max) max = ele.score
      if (ele.score < min) min = ele.score
    })


    return {
      name: 'bigwig',
      size: startTotal.length,
      plot: plot,
      start: startTotal,
      end: endTotal,
      score: score,
      range: [min, max],
      props: data,
      children: []
    }
  }

  self.formatGFF = (data, region, plot) => {
    const startTotal = []
    const endTotal = []
    const childArr = []

    data.forEach((element) => {
      const {
        attributes: { ID, gene_id, gene_name, gene_type, havana_gene, hgnc_id, level, tag },
        child_features,
        start,
        end,
        strand
      } = element[0]
      startTotal.push(start - region.start + region.offset)
      endTotal.push(end - region.start + region.offset)

      child_features.forEach((child) => {
        const {
          attributes: { transcript_id, transcript_name, transcript_type, strand },
          child_features: rna_features,
          start,
          end
        } = child[0]


        rna_features.forEach((features) => {
          const featureStart = []
          const featureEnd = []
          const plots = []

          features.forEach((feature) => {
            const { start, end, type } = feature
            featureStart.push(start - region.start + region.offset)
            featureEnd.push(end - region.start + region.offset)
            plots.push(plot)
          })

          childArr.push({
            name: 'RNA',
            plot: plots,
            size: features.length,
            start: featureStart,
            end: featureEnd,
          })
        })
      })
    })

    return {
      name: 'gff',
      size: 0,
      plot: plot,
      props: data,
      children: []
    }
  }

  self.formatConnect = (data, region, plot) => {
    const { start, end } = region

    const props = [{
      start: start,
      end: end
    }]

    return {
      name: 'connect',
      size: 0,
      start: [start],
      end: [end],
      plot: 'connect',
      props: props,
      children: []
    }
  }
