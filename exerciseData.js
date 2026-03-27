// exerciseData.js
// All 9 exercise sets — 10 questions each

export const exerciseSets = {

  // ── DECIMALS ─────────────────────────────────────────────────────────────

  decimals_foundation: {
    id: 'decimals_foundation',
    topic: 'decimals',
    title: 'Rounding to Decimal Places',
    difficulty: 'foundation',
    difficultyLabel: 'Foundation',
    icon: 'fa-solid fa-percentage',
    accent: '#2563eb',
    xpPerQ: 2,
    questions: [
      { id:1,  text: 'Round 3.746 to 1 decimal place.',              answer: '3.7',   options: ['3.7','3.8','4.0'],      hint: 'Look at the 2nd decimal digit (4). It is in 0–4, so round down.' },
      { id:2,  text: 'Round 8.352 to 1 decimal place.',              answer: '8.4',   options: ['8.3','8.4','8.5'],      hint: 'The 2nd decimal digit is 5. It is in 5–9, so round up.' },
      { id:3,  text: 'Round 5.618 to 2 decimal places.',             answer: '5.62',  options: ['5.61','5.62','5.63'],   hint: 'Look at the 3rd decimal digit (8). Round up.' },
      { id:4,  text: 'Round 12.045 to 2 decimal places.',            answer: '12.05', options: ['12.04','12.05','12.06'],hint: 'The 3rd decimal digit is 5. Round up the 4.' },
      { id:5,  text: 'Round 0.8932 to 3 decimal places.',            answer: '0.893', options: ['0.892','0.893','0.894'],hint: 'The 4th decimal digit is 2. Round down.' },
      { id:6,  text: 'Round 7.4996 to 3 decimal places.',            answer: '7.500', options: ['7.499','7.500','7.501'],hint: 'The 4th digit is 6. Round up the 9, which causes a chain.' },
      { id:7,  text: 'Round 0.055 to 1 decimal place.',              answer: '0.1',   options: ['0.0','0.1','0.2'],      hint: 'The 2nd decimal digit is 5. Round up.' },
      { id:8,  text: 'Round 99.995 to 2 decimal places.',            answer: '100.00',options: ['99.99','99.995','100.00'],hint: 'The 3rd digit is 5. Round up — chain rounding causes 99.99 → 100.00.' },
      { id:9,  text: 'A length is measured as 4.673 m. Round to 2 d.p.', answer: '4.67', options: ['4.67','4.68','4.70'],  hint: 'The 3rd decimal digit is 3. Round down.' },
      { id:10, text: 'Round 2.449 to 1 decimal place.',              answer: '2.4',   options: ['2.4','2.5','3.0'],      hint: 'Only look at the 2nd decimal digit (4). It is 0–4, so round down.' },
    ]
  },

  decimals_higher: {
    id: 'decimals_higher',
    topic: 'decimals',
    title: 'Significant Figures',
    difficulty: 'higher',
    difficultyLabel: 'Higher',
    icon: 'fa-solid fa-percentage',
    accent: '#2563eb',
    xpPerQ: 3,
    questions: [
      { id:1,  text: 'Round 4,820 to 1 significant figure.',          answer: '5,000', options: ['4,000','5,000','4,800'], hint: 'The first sig fig is 4. The next digit is 8 (≥5), so round up.' },
      { id:2,  text: 'Round 0.00736 to 2 significant figures.',       answer: '0.0074',options: ['0.0073','0.0074','0.0075'],hint: 'Leading zeros are not sig figs. First sig fig is 7, second is 3. Next digit is 6 — round up.' },
      { id:3,  text: 'Round 56,480 to 3 significant figures.',        answer: '56,500',options: ['56,400','56,500','56,600'],hint: 'First 3 sig figs are 5,6,4. Next digit is 8 — round up.' },
      { id:4,  text: 'Round 0.05062 to 2 significant figures.',       answer: '0.051', options: ['0.050','0.051','0.052'],  hint: 'First sig fig is 5, second is 0. Next digit is 6 — round up.' },
      { id:5,  text: 'Round 3,995 to 3 significant figures.',         answer: '4,000', options: ['3,990','3,995','4,000'],  hint: 'First 3 sig figs: 3,9,9. Next digit is 5 → rounds 9 up to 10, chain rounds up.' },
      { id:6,  text: 'Round 0.19851 to 3 significant figures.',       answer: '0.199', options: ['0.198','0.199','0.200'],  hint: 'First 3 sig figs: 1,9,8. Next digit is 5 — round up.' },
      { id:7,  text: 'Round 70,450 to 2 significant figures.',        answer: '70,000',options: ['70,000','70,500','71,000'],hint: 'First 2 sig figs are 7,0. Next digit is 4 — round down.' },
      { id:8,  text: 'A population of 238,600 — give to 2 sig figs.', answer: '240,000',options: ['230,000','238,000','240,000'],hint: 'First 2 sig figs: 2,3. Next digit is 8 — round up.' },
      { id:9,  text: 'Round 0.003049 to 2 significant figures.',      answer: '0.0030',options: ['0.0030','0.0031','0.0029'],hint: 'First sig fig is 3, second is 0. Next digit is 4 — round down.' },
      { id:10, text: 'Round 9.995 to 2 significant figures.',         answer: '10',    options: ['9.9','10','10.0'],        hint: 'First 2 sig figs: 9,9. Next digit is 5 — round up. Chain gives 10.' },
    ]
  },

  decimals_challenge: {
    id: 'decimals_challenge',
    topic: 'decimals',
    title: 'Chain Rounding',
    difficulty: 'challenge',
    difficultyLabel: 'Challenge',
    icon: 'fa-solid fa-percentage',
    accent: '#2563eb',
    xpPerQ: 4,
    questions: [
      { id:1,  text: 'Round 4.45 to the nearest whole number.',       answer: '4',     options: ['4','5','6'],            hint: '4.45 → look at 5 → round 4 up → 4.5 → look at 5 → round 4 up → 5. Wait — 4.45 rounds to 4 if you only round once from the 1st decimal place.' },
      { id:2,  text: 'Round 2.449 to the nearest whole number.',      answer: '2',     options: ['2','3','4'],            hint: 'Look ONLY at the 1st decimal place (4). It is 0–4, so round down to 2.' },
      { id:3,  text: 'Round 6.4499 to 1 decimal place.',              answer: '6.4',   options: ['6.4','6.5','7.0'],      hint: 'Look at 2nd decimal (4). Round down — no chain affects the 1 d.p. answer.' },
      { id:4,  text: 'Round 3.9950 to 2 decimal places.',             answer: '4.00',  options: ['3.99','4.00','4.01'],   hint: '3rd decimal is 5 → rounds 9 up → 4.00 via chain.' },
      { id:5,  text: 'Round 7.4950 to 1 decimal place.',              answer: '7.5',   options: ['7.4','7.5','8.0'],      hint: 'Look at 2nd decimal (9). Round up to 7.5.' },
      { id:6,  text: 'Round 0.9995 to 3 decimal places.',             answer: '1.000', options: ['0.999','1.000','1.001'],hint: '4th decimal is 5 → chain rounds all the 9s up.' },
      { id:7,  text: 'A runner clocks 12.449 seconds. Round to 1 d.p.',answer: '12.4', options: ['12.4','12.5','13.0'],   hint: 'Look only at the 2nd decimal (4). Round down.' },
      { id:8,  text: 'Round 5.4545 to 1 decimal place.',              answer: '5.5',   options: ['5.4','5.5','6.0'],      hint: 'Look at 2nd decimal (5). Round up.' },
      { id:9,  text: 'Round 1.0050 to 2 decimal places.',             answer: '1.01',  options: ['1.00','1.01','1.10'],   hint: '3rd decimal is 5 → round the 0 up to 1.' },
      { id:10, text: 'Round 99.949 to 1 decimal place.',              answer: '99.9',  options: ['99.9','100.0','99.8'],  hint: 'Look at 2nd decimal (4). Round down.' },
    ]
  },

  // ── FACTORS ──────────────────────────────────────────────────────────────

  factors_foundation: {
    id: 'factors_foundation',
    topic: 'factors',
    title: 'Finding All Factors',
    difficulty: 'foundation',
    difficultyLabel: 'Foundation',
    icon: 'fa-solid fa-cubes',
    accent: '#7c3aed',
    xpPerQ: 2,
    questions: [
      { id:1,  text: 'How many factors does 12 have?',                answer: '6',  options: ['4','6','8'],    hint: 'Factors of 12: 1, 2, 3, 4, 6, 12 — that is 6 factors.' },
      { id:2,  text: 'Which of these is NOT a factor of 18?',         answer: '8',  options: ['6','8','9'],    hint: '18 ÷ 8 = 2.25 — not a whole number, so 8 is not a factor.' },
      { id:3,  text: 'How many factors does 16 have?',                answer: '5',  options: ['4','5','6'],    hint: 'Factors: 1, 2, 4, 8, 16 — that is 5 factors.' },
      { id:4,  text: 'What is the largest factor of 30 that is less than 30?', answer: '15', options: ['10','15','20'], hint: '30 ÷ 2 = 15. So 15 is the second-largest factor.' },
      { id:5,  text: 'Which number has exactly 3 factors?',           answer: '9',  options: ['6','9','12'],   hint: 'Factors of 9: 1, 3, 9 — exactly 3. (Only perfect squares of primes have exactly 3 factors.)' },
      { id:6,  text: 'How many factors does 24 have?',                answer: '8',  options: ['6','8','10'],   hint: 'Factors: 1, 2, 3, 4, 6, 8, 12, 24 — 8 factors.' },
      { id:7,  text: 'Is 7 a factor of 56?',                          answer: 'Yes',options: ['Yes','No'],     hint: '56 ÷ 7 = 8 exactly, so yes.' },
      { id:8,  text: 'What is the sum of all factors of 10?',         answer: '18', options: ['14','18','20'], hint: 'Factors: 1 + 2 + 5 + 10 = 18.' },
      { id:9,  text: 'Which of these numbers has the most factors: 6, 8, or 12?', answer: '12', options: ['6','8','12'], hint: 'Factors of 6:4, of 8:4, of 12:6 — 12 wins.' },
      { id:10, text: 'How many factor pairs does 36 have?',           answer: '5',  options: ['4','5','6'],    hint: 'Pairs: (1,36)(2,18)(3,12)(4,9)(6,6) — 5 pairs.' },
    ]
  },

  factors_higher: {
    id: 'factors_higher',
    topic: 'factors',
    title: 'Highest Common Factor',
    difficulty: 'foundation',
    difficultyLabel: 'Foundation',
    icon: 'fa-solid fa-cubes',
    accent: '#7c3aed',
    xpPerQ: 2,
    questions: [
      { id:1,  text: 'Find the HCF of 12 and 18.',                    answer: '6',  options: ['3','6','9'],    hint: 'Factors of 12: 1,2,3,4,6,12. Factors of 18: 1,2,3,6,9,18. Highest common = 6.' },
      { id:2,  text: 'Find the HCF of 8 and 20.',                     answer: '4',  options: ['2','4','8'],    hint: 'Factors of 8: 1,2,4,8. Factors of 20: 1,2,4,5,10,20. HCF = 4.' },
      { id:3,  text: 'Find the HCF of 15 and 25.',                    answer: '5',  options: ['3','5','15'],   hint: 'Factors of 15: 1,3,5,15. Factors of 25: 1,5,25. HCF = 5.' },
      { id:4,  text: 'Find the HCF of 9 and 21.',                     answer: '3',  options: ['3','7','9'],    hint: 'Factors of 9: 1,3,9. Factors of 21: 1,3,7,21. HCF = 3.' },
      { id:5,  text: 'Find the HCF of 6 and 14.',                     answer: '2',  options: ['2','3','6'],    hint: 'Factors of 6: 1,2,3,6. Factors of 14: 1,2,7,14. HCF = 2.' },
      { id:6,  text: 'Find the HCF of 16 and 24.',                    answer: '8',  options: ['4','8','16'],   hint: 'Factors of 16: 1,2,4,8,16. Factors of 24: 1,2,3,4,6,8,12,24. HCF = 8.' },
      { id:7,  text: 'Find the HCF of 7 and 21.',                     answer: '7',  options: ['1','3','7'],    hint: '7 is prime. Its only factors are 1 and 7. 7 divides 21, so HCF = 7.' },
      { id:8,  text: 'Find the HCF of 30 and 45.',                    answer: '15', options: ['5','10','15'],  hint: 'Factors of 30 include 15. 45 ÷ 15 = 3. So 15 is a common factor — and the highest.' },
      { id:9,  text: 'Tiles measuring 18 cm and 24 cm — largest square tile that fits both?', answer: '6 cm', options: ['3 cm','6 cm','9 cm'], hint: 'HCF(18, 24) = 6.' },
      { id:10, text: 'Find the HCF of 28 and 42.',                    answer: '14', options: ['7','14','21'],  hint: 'Factors of 28: 1,2,4,7,14,28. Factors of 42: 1,2,3,6,7,14,21,42. HCF = 14.' },
    ]
  },

  factors_challenge: {
    id: 'factors_challenge',
    topic: 'factors',
    title: 'HCF with Larger Numbers',
    difficulty: 'higher',
    difficultyLabel: 'Higher',
    icon: 'fa-solid fa-cubes',
    accent: '#7c3aed',
    xpPerQ: 3,
    questions: [
      { id:1,  text: 'Find the HCF of 48 and 72.',                    answer: '24', options: ['12','24','36'],   hint: 'List factors of 48 and 72. Highest common is 24.' },
      { id:2,  text: 'Find the HCF of 60 and 90.',                    answer: '30', options: ['15','20','30'],   hint: '60 = 2×30, 90 = 3×30. HCF = 30.' },
      { id:3,  text: 'Find the HCF of 84 and 56.',                    answer: '28', options: ['14','28','42'],   hint: '84 = 3×28, 56 = 2×28. HCF = 28.' },
      { id:4,  text: 'Find the HCF of 100 and 75.',                   answer: '25', options: ['5','25','50'],    hint: 'Factors of 75: 1,3,5,15,25,75. 100 ÷ 25 = 4. HCF = 25.' },
      { id:5,  text: 'Find the HCF of 126 and 84.',                   answer: '42', options: ['14','21','42'],   hint: '126 = 3×42, 84 = 2×42. HCF = 42.' },
      { id:6,  text: 'Find the HCF of 120 and 180.',                  answer: '60', options: ['30','60','90'],   hint: '120 = 2×60, 180 = 3×60. HCF = 60.' },
      { id:7,  text: 'A rope 96 m and another 144 m — longest equal pieces with no waste?', answer: '48 m', options: ['24 m','48 m','96 m'], hint: 'HCF(96, 144) = 48.' },
      { id:8,  text: 'Find the HCF of 210 and 315.',                  answer: '105',options: ['35','70','105'],  hint: '210 = 2×105, 315 = 3×105. HCF = 105.' },
      { id:9,  text: 'Find the HCF of 144 and 108.',                  answer: '36', options: ['12','36','72'],   hint: '144 = 4×36, 108 = 3×36. HCF = 36.' },
      { id:10, text: 'Find the HCF of 90, 60 and 45.',                answer: '15', options: ['5','10','15'],    hint: 'HCF(90,60)=30, then HCF(30,45)=15.' },
    ]
  },

  // ── STANDARD FORM ────────────────────────────────────────────────────────

  standard_foundation: {
    id: 'standard_foundation',
    topic: 'standard',
    title: 'Standard Form: Basics',
    difficulty: 'foundation',
    difficultyLabel: 'Foundation',
    icon: 'fa-solid fa-superscript',
    accent: '#0d9488',
    xpPerQ: 2,
    questions: [
      { id:1,  text: 'What is 3 × 10² as an ordinary number?',        answer: '300',      options: ['30','300','3,000'],      hint: '10² = 100. 3 × 100 = 300.' },
      { id:2,  text: 'What is 7 × 10³ as an ordinary number?',        answer: '7,000',    options: ['700','7,000','70,000'],  hint: '10³ = 1,000. 7 × 1,000 = 7,000.' },
      { id:3,  text: 'What is 4 × 10¹ as an ordinary number?',        answer: '40',       options: ['4','40','400'],          hint: '10¹ = 10. 4 × 10 = 40.' },
      { id:4,  text: 'What is 9 × 10⁴ as an ordinary number?',        answer: '90,000',   options: ['9,000','90,000','900,000'],hint: '10⁴ = 10,000. 9 × 10,000 = 90,000.' },
      { id:5,  text: 'Write 6,000 in standard form.',                  answer: '6 × 10³',  options: ['6 × 10²','6 × 10³','6 × 10⁴'], hint: '6,000 = 6 × 1,000 = 6 × 10³.' },
      { id:6,  text: 'Write 500 in standard form.',                    answer: '5 × 10²',  options: ['5 × 10¹','5 × 10²','5 × 10³'], hint: '500 = 5 × 100 = 5 × 10².' },
      { id:7,  text: 'What is 2 × 10⁵ as an ordinary number?',        answer: '200,000',  options: ['20,000','200,000','2,000,000'],hint: '10⁵ = 100,000. 2 × 100,000 = 200,000.' },
      { id:8,  text: 'Which is largest: 3×10³, 4×10², or 9×10¹?',    answer: '3 × 10³',  options: ['3 × 10³','4 × 10²','9 × 10¹'], hint: '3,000 vs 400 vs 90. Largest is 3 × 10³.' },
      { id:9,  text: 'Write 80 in standard form.',                     answer: '8 × 10¹',  options: ['8 × 10⁰','8 × 10¹','8 × 10²'], hint: '80 = 8 × 10.' },
      { id:10, text: 'The distance to the moon is 384,000 km. Write in standard form (to 1 s.f.).', answer: '4 × 10⁵', options: ['3 × 10⁵','4 × 10⁵','3.84 × 10⁵'], hint: 'To 1 s.f., 384,000 ≈ 400,000 = 4 × 10⁵.' },
    ]
  },

  standard_higher: {
    id: 'standard_higher',
    topic: 'standard',
    title: 'Standard Form Calculations',
    difficulty: 'higher',
    difficultyLabel: 'Higher',
    icon: 'fa-solid fa-superscript',
    accent: '#0d9488',
    xpPerQ: 3,
    questions: [
      { id:1,  text: '(3 × 10²) × (2 × 10³) = ?',                    answer: '6 × 10⁵',  options: ['5 × 10⁵','6 × 10⁵','6 × 10⁶'], hint: '3×2=6, 10²×10³=10⁵. Answer: 6×10⁵.' },
      { id:2,  text: '(4 × 10⁴) ÷ (2 × 10²) = ?',                    answer: '2 × 10²',  options: ['2 × 10¹','2 × 10²','2 × 10³'], hint: '4÷2=2, 10⁴÷10²=10². Answer: 2×10².' },
      { id:3,  text: '(5 × 10³) × (3 × 10²) = ?',                    answer: '1.5 × 10⁶',options: ['1.5 × 10⁵','1.5 × 10⁶','15 × 10⁵'],hint: '5×3=15=1.5×10¹, 10³×10²=10⁵. Total: 1.5×10⁶.' },
      { id:4,  text: '(8 × 10⁵) ÷ (4 × 10³) = ?',                    answer: '2 × 10²',  options: ['2 × 10¹','2 × 10²','2 × 10³'], hint: '8÷4=2, 10⁵÷10³=10². Answer: 2×10².' },
      { id:5,  text: '(2 × 10³)² = ?',                                answer: '4 × 10⁶',  options: ['4 × 10⁶','4 × 10⁵','2 × 10⁶'], hint: '2²=4, (10³)²=10⁶. Answer: 4×10⁶.' },
      { id:6,  text: '(6 × 10⁴) + (4 × 10⁴) = ?',                    answer: '1 × 10⁵',  options: ['10 × 10⁴','1 × 10⁵','1.0 × 10⁴'],hint: '6+4=10, so 10×10⁴=1×10⁵.' },
      { id:7,  text: '(9 × 10³) − (3 × 10³) = ?',                    answer: '6 × 10³',  options: ['6 × 10²','6 × 10³','6 × 10⁴'], hint: '9−3=6, same power: 6×10³.' },
      { id:8,  text: 'Light travels 3×10⁸ m/s. How far in 5 seconds?',answer: '1.5 × 10⁹',options: ['1.5 × 10⁸','1.5 × 10⁹','3 × 10⁹'],hint: '3×10⁸ × 5 = 15×10⁸ = 1.5×10⁹.' },
      { id:9,  text: '(7 × 10⁶) ÷ (1 × 10²) = ?',                    answer: '7 × 10⁴',  options: ['7 × 10³','7 × 10⁴','7 × 10⁵'], hint: '7÷1=7, 10⁶÷10²=10⁴.' },
      { id:10, text: '(4 × 10³) × (4 × 10³) = ?',                    answer: '1.6 × 10⁷',options: ['1.6 × 10⁶','1.6 × 10⁷','16 × 10⁶'],hint: '4×4=16=1.6×10¹, 10³×10³=10⁶. Total: 1.6×10⁷.' },
    ]
  },

  standard_challenge: {
    id: 'standard_challenge',
    topic: 'standard',
    title: 'Mixed Standard Form',
    difficulty: 'challenge',
    difficultyLabel: 'Challenge',
    icon: 'fa-solid fa-superscript',
    accent: '#0d9488',
    xpPerQ: 5,
    questions: [
      { id:1,  text: 'Put in order (smallest first): 4×10³, 2×10⁴, 8×10²',  answer: '8×10², 4×10³, 2×10⁴', options: ['8×10², 4×10³, 2×10⁴','4×10³, 8×10², 2×10⁴','2×10⁴, 8×10², 4×10³'], hint: '800, 4000, 20000 — smallest to largest.' },
      { id:2,  text: '(3×10⁵) × (2×10⁻²) = ? (express in standard form)', answer: '6 × 10³',  options: ['6 × 10²','6 × 10³','6 × 10⁴'],   hint: '3×2=6, 10⁵×10⁻²=10³.' },
      { id:3,  text: 'A bacteria is 2×10⁻⁵ m wide. How many fit in 1×10⁻¹ m?', answer: '5,000', options: ['500','5,000','50,000'], hint: '(1×10⁻¹) ÷ (2×10⁻⁵) = 0.5×10⁴ = 5,000.' },
      { id:4,  text: '(1.5 × 10⁴) × (4 × 10³) = ?',                   answer: '6 × 10⁷',  options: ['6 × 10⁶','6 × 10⁷','6 × 10⁸'],   hint: '1.5×4=6, 10⁴×10³=10⁷.' },
      { id:5,  text: 'Which is larger: 9.9×10⁴ or 1.1×10⁵?',          answer: '1.1 × 10⁵', options: ['9.9 × 10⁴','1.1 × 10⁵','They are equal'], hint: '99,000 vs 110,000. 1.1×10⁵ is larger.' },
      { id:6,  text: '(5×10⁶) ÷ (2×10⁻¹) = ?',                        answer: '2.5 × 10⁷', options: ['2.5 × 10⁶','2.5 × 10⁷','2.5 × 10⁸'], hint: '5÷2=2.5, 10⁶÷10⁻¹=10⁷.' },
      { id:7,  text: 'The mass of the Earth is 5.97×10²⁴ kg. Round to 1 s.f.', answer: '6 × 10²⁴', options: ['5 × 10²⁴','6 × 10²⁴','6 × 10²⁵'], hint: 'The first sig fig is 5. Next digit is 9 → round up to 6.' },
      { id:8,  text: '(8 × 10⁴) + (2 × 10³) = ? (in standard form)',   answer: '8.2 × 10⁴', options: ['8.2 × 10³','8.2 × 10⁴','10 × 10⁴'], hint: '80,000 + 2,000 = 82,000 = 8.2×10⁴.' },
      { id:9,  text: '√(4 × 10⁶) = ?',                                 answer: '2 × 10³',  options: ['2 × 10²','2 × 10³','4 × 10³'],   hint: '√4=2, √(10⁶)=10³.' },
      { id:10, text: 'If 1 light-year ≈ 9.46×10¹⁵ m, how far is 3 light-years?', answer: '2.838 × 10¹⁶', options: ['2.838 × 10¹⁵','2.838 × 10¹⁶','28.38 × 10¹⁵'], hint: '3 × 9.46×10¹⁵ = 28.38×10¹⁵ = 2.838×10¹⁶.' },
    ]
  },
};
