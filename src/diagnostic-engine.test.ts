import test from 'node:test';
import assert from 'node:assert/strict';
import { diagnoseOffline, parseGeminiDiagnostic } from './diagnostic-engine.ts';

test('diagnoseOffline accurately diagnoses Apple Scab for Apple plant', () => {
  const result = diagnoseOffline({
    plantName: 'Apple Plant',
    symptoms: ['Brown/black spots', 'Yellowing leaves (Chlorosis)'],
    watering: 'Normal 2-3x per week',
    sunlight: 'Full direct sun (>6 hours)',
    duration: '1-2 weeks'
  });

  assert.equal(result.diseaseName, 'Apple Scab');
  assert.equal(result.pathogenType, 'Fungal');
  assert.equal(result.severity, 'High');
  assert.ok(result.confidence >= 90);
  assert.ok(result.organicRemedies.length > 0);
  assert.ok(result.chemicalRemedies.length > 0);
  assert.ok(result.preventionTips.length > 0);
  assert.equal(result.isOfflineFallback, true);
});

test('diagnoseOffline diagnoses Tomato Early Blight', () => {
  const result = diagnoseOffline({
    plantName: 'Tomato',
    symptoms: ['Brown/black spots'],
    watering: 'Normal 2-3x per week',
    sunlight: 'Full direct sun (>6 hours)',
    duration: '3-7 days'
  });

  assert.equal(result.diseaseName, 'Early Blight (Target Spot)');
  assert.equal(result.pathogenType, 'Fungal');
  assert.ok(result.scientificName.includes('Alternaria solani'));
});

test('diagnoseOffline handles powdery mildew on Rose', () => {
  const result = diagnoseOffline({
    plantName: 'Rose bush',
    symptoms: ['White powder/fungus'],
    watering: 'Normal 2-3x per week',
    sunlight: 'Partial sun (3-6 hours)',
    duration: 'Few days'
  });

  assert.equal(result.diseaseName, 'Powdery Mildew');
  assert.equal(result.pathogenType, 'Fungal');
  assert.ok(result.organicRemedies.some(r => r.toLowerCase().includes('bicarbonate') || r.toLowerCase().includes('milk')));
});

test('diagnoseOffline handles healthy checkup for Basil', () => {
  const result = diagnoseOffline({
    plantName: 'Sweet Basil',
    symptoms: ['None (Healthy Checkup)'],
    watering: 'Normal 2-3x per week',
    sunlight: 'Full direct sun (>6 hours)',
    duration: 'N/A'
  });

  assert.equal(result.pathogenType, 'Healthy');
  assert.equal(result.severity, 'Healthy');
  assert.ok(result.confidence >= 95);
});

test('parseGeminiDiagnostic parses valid json and strips markdown fences', () => {
  const rawJson = '```json\n{\n  "plantName": "Wheat",\n  "scientificName": "Triticum aestivum",\n  "diseaseName": "Wheat Stem Rust",\n  "pathogenType": "Fungal",\n  "severity": "High",\n  "confidence": 93,\n  "summary": "Puccinia graminis reddish-brown pustules",\n  "symptomsMatrix": [],\n  "organicRemedies": ["Remove barberry alternate hosts"],\n  "chemicalRemedies": ["Triazole fungicide"],\n  "preventionTips": ["Plant resistant cultivars"]\n}\n```';

  const parsed = parseGeminiDiagnostic(rawJson);
  assert.ok(parsed !== null);
  assert.equal(parsed?.plantName, 'Wheat');
  assert.equal(parsed?.diseaseName, 'Wheat Stem Rust');
  assert.equal(parsed?.confidence, 93);
  assert.equal(parsed?.isOfflineFallback, false);
});
