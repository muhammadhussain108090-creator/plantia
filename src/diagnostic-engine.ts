export interface DiagnosticResult {
  plantName: string;
  scientificName: string;
  diseaseName: string;
  pathogenType: 'Fungal' | 'Bacterial' | 'Viral' | 'Pest Infestation' | 'Physiological/Abiotic' | 'Healthy';
  severity: 'Healthy' | 'Low' | 'Medium' | 'High' | 'Critical';
  confidence: number;
  summary: string;
  symptomsMatrix: {
    affectedPart: string;
    observedSign: string;
    pathologicalCause: string;
  }[];
  organicRemedies: string[];
  chemicalRemedies: string[];
  preventionTips: string[];
  wateringAdvice: string;
  sunlightAdvice: string;
  isOfflineFallback?: boolean;
}

export interface QuestionnaireInput {
  plantName: string;
  symptoms: string[];
  watering: string;
  sunlight: string;
  duration: string;
  environment?: string;
}

export const PRESET_DISEASES: Record<string, Partial<DiagnosticResult>> = {
  'apple-scab': {
    plantName: 'Apple (Malus domestica)',
    scientificName: 'Venturia inaequalis',
    diseaseName: 'Apple Scab',
    pathogenType: 'Fungal',
    severity: 'High',
    confidence: 94,
    summary: 'Fungal infection causing olive-green to dark brown velvety spots on leaves and fruit deformities.',
    organicRemedies: [
      'Apply organic sulfur spray or Bordeaux mixture during early bud break',
      'Spray neem oil extract (0.5%) to suppress conidial germination',
      'Rake and incinerate or deeply compost fallen autumn leaves to eliminate perithecia'
    ],
    chemicalRemedies: [
      'Captan 50WP or Myclobutanil fungicide applied at 10-14 day intervals',
      'Difenoconazole systemic treatment during active vegetative flush'
    ],
    preventionTips: [
      'Prune inner orchard canopy for 360-degree cross-ventilation',
      'Plant scab-resistant cultivars such as Liberty, Prima, or Enterprise',
      'Utilize drip irrigation rather than overhead sprinklers to prevent leaf moisture'
    ]
  },
  'tomato-early-blight': {
    plantName: 'Tomato (Solanum lycopersicum)',
    scientificName: 'Alternaria solani',
    diseaseName: 'Early Blight (Target Spot)',
    pathogenType: 'Fungal',
    severity: 'High',
    confidence: 96,
    summary: 'Concentric ring "bullseye" brown necrotic lesions on lower foliage spreading upward.',
    organicRemedies: [
      'Copper octanoate (copper soap) fungicide every 7 days',
      'Biofungicide containing Bacillus subtilis (Serenade ASO)',
      'Remove bottom 12 inches of foliage to stop splash-back spore transfer'
    ],
    chemicalRemedies: [
      'Chlorothalonil or Mancozeb protective barrier spray',
      'Azoxystrobin systemic fungicide for advanced infections'
    ],
    preventionTips: [
      'Mulch soil with 2 inches of clean straw to prevent rain splash transmission',
      'Implement 3-year crop rotation outside Solanaceae family',
      'Space plants 24-36 inches apart to optimize air circulation'
    ]
  },
  'rose-powdery-mildew': {
    plantName: 'Garden Rose (Rosa hybrida)',
    scientificName: 'Podosphaera pannosa',
    diseaseName: 'Powdery Mildew',
    pathogenType: 'Fungal',
    severity: 'Medium',
    confidence: 92,
    summary: 'Talcum-powder-like white mycelial coating on young tender shoots, leaves, and flower buds causing leaf curling.',
    organicRemedies: [
      'Potassium bicarbonate spray (3 tbsp per gallon with horticultural oil surfactant)',
      'Diluted milk spray (40% whole milk, 60% water exposed to sunlight)',
      'Cold-pressed neem oil applied at dusk to avoid phytotoxic leaf scorch'
    ],
    chemicalRemedies: [
      'Triforine or Tebuconazole systemic ornamental fungicide',
      'Propiconazole foliar application'
    ],
    preventionTips: [
      'Relocate roses to locations with morning sun to evaporate dew rapidly',
      'Never water overhead; apply water directly to root collar',
      'Prune overcrowded crossing canes in early spring'
    ]
  },
  'mango-anthracnose': {
    plantName: 'Mango (Mangifera indica)',
    scientificName: 'Colletotrichum gloeosporioides',
    diseaseName: 'Anthracnose Leaf Spot & Blight',
    pathogenType: 'Fungal',
    severity: 'High',
    confidence: 91,
    summary: 'Irregular dark brown to black sunken lesions that coalesce into shot-hole perforations on leaves and panicles.',
    organicRemedies: [
      'Liquid copper hydroxide spray during panicle emergence',
      'Trichoderma viride antagonistic biological soil & foliar drench',
      'Prune diseased twigs 10cm below lesion and apply tree wound paste'
    ],
    chemicalRemedies: [
      'Carbendazim 50% WP or Azoxystrobin + Difenoconazole',
      'Prochloraz post-harvest and pre-bloom protectant'
    ],
    preventionTips: [
      'Sanitize all pruning shears with 70% isopropyl alcohol between cuts',
      'Maintain canopy opening to allow ultraviolet light penetration',
      'Avoid high-nitrogen fertilizers that produce overly succulent susceptible foliage'
    ]
  },
  'basil-healthy': {
    plantName: 'Sweet Basil (Ocimum basilicum)',
    scientificName: 'Ocimum basilicum L.',
    diseaseName: 'Healthy Botanical Specimen (Optimal State)',
    pathogenType: 'Healthy',
    severity: 'Healthy',
    confidence: 98,
    summary: 'Vibrant chlorophyll density, intact cellular margins, turgid leaf tissue, and no visible pathogen colonization.',
    organicRemedies: [
      'Maintain balanced organic fish emulsion fertilizer (5-1-1) every 2-3 weeks',
      'Pinch top terminal flower buds to stimulate vigorous lateral foliage branching'
    ],
    chemicalRemedies: [
      'None required — preserve natural ecological beneficial microbiome'
    ],
    preventionTips: [
      'Provide 6-8 hours of direct sunlight daily for essential oil synthesis',
      'Water thoroughly when top 1 inch of soil feels dry to the touch',
      'Maintain ambient temperature between 18°C and 28°C'
    ]
  },
  'citrus-chlorosis': {
    plantName: 'Citrus / Lemon (Citrus limon)',
    scientificName: 'Physiological Interveinal Chlorosis',
    diseaseName: 'Iron & Micronutrient Deficiency Chlorosis',
    pathogenType: 'Physiological/Abiotic',
    severity: 'Medium',
    confidence: 89,
    summary: 'Distinct yellowing of leaf tissue between dark green leaf veins, caused by high soil pH or root hypoxia.',
    organicRemedies: [
      'Chelated iron (Fe-EDDHA for alkaline soils) foliar and root drench',
      'Soil acidification with elemental sulfur and composted pine needle mulch',
      'Seaweed kelp meal extract for chelated zinc, manganese, and magnesium'
    ],
    chemicalRemedies: [
      'Foliar micronutrient spray with iron sulfate (0.5% solution) + wetting agent'
    ],
    preventionTips: [
      'Test soil pH and adjust to optimal 6.0 - 6.5 range',
      'Ensure well-draining soil mix with perlite or pumice to prevent root rot',
      'Avoid over-irrigation during winter dormancy period'
    ]
  }
};

/**
 * Calculates a probabilistic score based on plant type and symptoms
 */
export function diagnoseOffline(input: QuestionnaireInput): DiagnosticResult {
  const pName = (input.plantName || 'Unknown Plant').trim();
  const lowerName = pName.toLowerCase();
  const symptoms = input.symptoms || [];

  // Match known specific plants
  if (lowerName.includes('apple') || symptoms.includes('Brown/black spots') && lowerName.includes('malus')) {
    const base = PRESET_DISEASES['apple-scab']!;
    return buildResultFromBase(base, pName, input);
  }

  if (lowerName.includes('tomato') || lowerName.includes('solanum')) {
    if (symptoms.includes('White powder/fungus')) {
      const base = PRESET_DISEASES['rose-powdery-mildew']!;
      return {
        ...buildResultFromBase(base, `${pName} (Tomato)`, input),
        diseaseName: 'Tomato Powdery Mildew (Leveillula taurica)',
        scientificName: 'Leveillula taurica',
        summary: 'White powdery patches on foliage causing premature senescence and defoliation.'
      };
    }
    const base = PRESET_DISEASES['tomato-early-blight']!;
    return buildResultFromBase(base, pName, input);
  }

  if (lowerName.includes('rose')) {
    const base = PRESET_DISEASES['rose-powdery-mildew']!;
    return buildResultFromBase(base, pName, input);
  }

  if (lowerName.includes('mango')) {
    const base = PRESET_DISEASES['mango-anthracnose']!;
    return buildResultFromBase(base, pName, input);
  }

  if (lowerName.includes('citrus') || lowerName.includes('lemon') || lowerName.includes('orange')) {
    const base = PRESET_DISEASES['citrus-chlorosis']!;
    return buildResultFromBase(base, pName, input);
  }

  if (symptoms.length === 0 || (symptoms.length === 1 && symptoms[0] === 'None (Healthy Checkup)')) {
    const base = PRESET_DISEASES['basil-healthy']!;
    return buildResultFromBase(base, pName, input);
  }

  // Generic heuristic based on primary symptoms
  let diseaseName = 'Foliar Leaf Spot Syndrome';
  let pathogenType: DiagnosticResult['pathogenType'] = 'Fungal';
  let severity: DiagnosticResult['severity'] = 'Medium';
  let confidence = 87;
  let scientificName = 'Cercospora / Alternaria sp.';
  let summary = `Clinical pathology on ${pName} showing physiological stress and foliar damage.`;

  if (symptoms.includes('White powder/fungus')) {
    diseaseName = `${pName} Powdery Mildew`;
    pathogenType = 'Fungal';
    scientificName = 'Erysiphales sp.';
    severity = 'Medium';
    confidence = 93;
    summary = `Superficial white fungal mycelium and conidiophores coating the leaf surface of ${pName}.`;
  } else if (symptoms.includes('Wilting/drooping leaves') && input.watering.includes('Under')) {
    diseaseName = 'Acute Moisture Deficit & Vascular Dehydration';
    pathogenType = 'Physiological/Abiotic';
    severity = 'High';
    confidence = 95;
    summary = `Loss of turgor pressure in cellular vacuoles due to soil moisture depletion.`;
  } else if (symptoms.includes('Wilting/drooping leaves') && input.watering.includes('Over')) {
    diseaseName = 'Root Hypoxia & Pythium Root Rot';
    pathogenType = 'Fungal';
    scientificName = 'Pythium ultimum / Phytophthora sp.';
    severity = 'Critical';
    confidence = 91;
    summary = `Anaerobic soil saturation causing root tip necrosis and impaired water uptake.`;
  } else if (symptoms.includes('Yellowing leaves (Chlorosis)')) {
    diseaseName = `${pName} Chlorosis & Nitrogen/Iron Deficiency`;
    pathogenType = 'Physiological/Abiotic';
    severity = 'Medium';
    confidence = 88;
    scientificName = 'Physiological Chlorosis';
    summary = `Breakdown of chlorophyll pigment molecules leading to reduced photosynthetic efficiency.`;
  } else if (symptoms.includes('Chewed or pest damaged leaves')) {
    diseaseName = `${pName} Foliar Herbivory & Insect Infestation`;
    pathogenType = 'Pest Infestation';
    severity = 'Medium';
    confidence = 90;
    scientificName = 'Lepidoptera / Aphidoidea complex';
    summary = `Mechanical cellular destruction and sap consumption from foliar pest feeding.`;
  }

  return {
    plantName: pName,
    scientificName,
    diseaseName,
    pathogenType,
    severity,
    confidence,
    summary,
    symptomsMatrix: [
      {
        affectedPart: 'Leaf Blade (Lamina)',
        observedSign: symptoms.join(', ') || 'Discoloration',
        pathologicalCause: 'Cellular degradation and pathogen colonization'
      },
      {
        affectedPart: 'Vascular Bundles',
        observedSign: input.watering,
        pathologicalCause: 'Transpiration disruption'
      },
      {
        affectedPart: 'Stomata / Chloroplasts',
        observedSign: input.sunlight,
        pathologicalCause: 'Light photon saturation/deficiency stress'
      }
    ],
    organicRemedies: [
      'Spray organic neem oil extract (5ml per liter with gentle surfactant)',
      'Prune and safely discard all infected leaves in trash (do not compost)',
      'Top-dress soil with well-cured compost and beneficial mycorrhizae'
    ],
    chemicalRemedies: [
      'Broad-spectrum horticultural copper fungicide applied early morning',
      'Targeted bio-insecticide or systemic fungicide if infection spreads'
    ],
    preventionTips: [
      'Maintain consistent watering at root base rather than overhead wetting',
      'Sterilize garden tools with 70% alcohol between handling different plants',
      'Ensure adequate spacing for constant airflow around the plant canopy'
    ],
    wateringAdvice: getWateringAdvice(input.watering),
    sunlightAdvice: getSunlightAdvice(input.sunlight),
    isOfflineFallback: true
  };
}

function buildResultFromBase(
  base: Partial<DiagnosticResult>,
  plantName: string,
  input: QuestionnaireInput
): DiagnosticResult {
  return {
    plantName: base.plantName || plantName,
    scientificName: base.scientificName || 'Botanical Specimen',
    diseaseName: base.diseaseName || 'Health Assessment',
    pathogenType: base.pathogenType || 'Fungal',
    severity: base.severity || 'Medium',
    confidence: base.confidence || 90,
    summary: base.summary || 'Pathological evaluation complete.',
    symptomsMatrix: [
      {
        affectedPart: 'Upper Leaf Epidermis',
        observedSign: input.symptoms.length ? input.symptoms.join(', ') : 'Lesions/Spots',
        pathologicalCause: 'Invasion of pathogen hyphae or pigment breakdown'
      },
      {
        affectedPart: 'Photosynthetic Mesophyll',
        observedSign: `Duration: ${input.duration || 'Several days'}`,
        pathologicalCause: 'Progressive chlorosis & necrosis'
      },
      {
        affectedPart: 'Hydration System',
        observedSign: input.watering || 'Standard',
        pathologicalCause: 'Transpirational stress equilibrium'
      }
    ],
    organicRemedies: base.organicRemedies || ['Apply neem oil solution', 'Prune damaged leaves'],
    chemicalRemedies: base.chemicalRemedies || ['Apply registered preventative fungicide'],
    preventionTips: base.preventionTips || ['Water at base', 'Provide good airflow', 'Disinfect pruners'],
    wateringAdvice: getWateringAdvice(input.watering),
    sunlightAdvice: getSunlightAdvice(input.sunlight),
    isOfflineFallback: true
  };
}

function getWateringAdvice(w: string): string {
  if (w.includes('Over')) {
    return 'Reduce watering immediately. Allow top 2 inches of soil to completely dry out before watering again.';
  }
  if (w.includes('Under')) {
    return 'Deep soak the root zone immediately until water drains freely, then maintain regular moisture.';
  }
  return 'Water consistently in the morning directly at soil level, avoiding leaf splashes.';
}

function getSunlightAdvice(s: string): string {
  if (s.includes('Low')) {
    return 'Gradually introduce plant to brighter indirect sunlight or provide a full-spectrum LED grow light.';
  }
  if (s.includes('Full direct sun')) {
    return 'Protect tender damaged foliage with 30% shade cloth during peak midday heat (12pm - 3pm).';
  }
  return 'Maintain 6 hours of bright filtered light for optimal photosynthetic recovery.';
}

/**
 * Parses Gemini API JSON response cleanly
 */
export function parseGeminiDiagnostic(rawText: string): DiagnosticResult | null {
  try {
    let clean = rawText.trim();
    if (clean.startsWith('```json')) {
      clean = clean.replace(/^```json\s*/i, '').replace(/```\s*$/i, '');
    } else if (clean.startsWith('```')) {
      clean = clean.replace(/^```\s*/i, '').replace(/```\s*$/i, '');
    }
    const parsed = JSON.parse(clean);
    if (!parsed.diseaseName || !parsed.plantName) {
      return null;
    }
    return {
      plantName: parsed.plantName,
      scientificName: parsed.scientificName || 'Botanical Specimen',
      diseaseName: parsed.diseaseName,
      pathogenType: parsed.pathogenType || 'Fungal',
      severity: parsed.severity || 'Medium',
      confidence: Math.min(99, Math.max(50, Number(parsed.confidence) || 88)),
      summary: parsed.summary || 'Clinical diagnosis generated by Gemini 2.5 Flash Vision.',
      symptomsMatrix: Array.isArray(parsed.symptomsMatrix) ? parsed.symptomsMatrix : [],
      organicRemedies: Array.isArray(parsed.organicRemedies) ? parsed.organicRemedies : [],
      chemicalRemedies: Array.isArray(parsed.chemicalRemedies) ? parsed.chemicalRemedies : [],
      preventionTips: Array.isArray(parsed.preventionTips) ? parsed.preventionTips : [],
      wateringAdvice: parsed.wateringAdvice || 'Water soil base in morning.',
      sunlightAdvice: parsed.sunlightAdvice || 'Ensure appropriate sunlight.',
      isOfflineFallback: false
    };
  } catch {
    return null;
  }
}
