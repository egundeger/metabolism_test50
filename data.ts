
import { Question } from './types';

export const quizData: Question[] = [
    {
      "questionNumber": 1,
      "question": "Metabolizma ile ilgili aşağıdaki ifadelerden hangisi 'anabolizma'yı en iyi tanımlar?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Besin moleküllerinin (karbonhidrat, yağ) $CO_2$ ve $H_2O$'ya yıkılarak ATP üretilmesi.",
          "rationale": "Bu süreç, büyük moleküllerin enerji üretmek için daha küçük moleküllere parçalandığı katabolizmayı tanımlar.",
          "isCorrect": false
        },
        {
          "text": "Küçük öncül moleküllerin (amino asitler, yağ asitleri) enerji harcanarak makromoleküllere (proteinler, lipidler) dönüştürülmesi.",
          "rationale": "Anabolizma, enerji (ATP) tüketen ve basit yapı taşlarından karmaşık biyomoleküller inşa eden 'yapım' reaksiyonlarıdır.",
          "isCorrect": true
        },
        {
          "text": "Hem anabolik hem de katabolik yolları kapsayan reaksiyon döngülerinin tümü.",
          "rationale": "Bu tanım, 'amfibolik' yolları ifade eder; anabolizmanın kendisini değil.",
          "isCorrect": false
        },
        {
          "text": "Hücrenin ihtiyaç fazlası biyomolekülleri parçalayarak sistemden uzaklaştırması.",
          "rationale": "Bu süreç, spesifik bir yıkım veya detoksifikasyon yolunu ifade eder, anabolizmanın genel tanımı değildir.",
          "isCorrect": false
        },
        {
          "text": "Enerji üretim verimliliğini artıran allosterik düzenleme mekanizmalarının bütünü.",
          "rationale": "Bu, metabolizmanın 'regülasyonunu' tanımlar, 'yapım' reaksiyonlarını (anabolizma) değil.",
          "isCorrect": false
        }
      ],
      "hint": "Anabolizma ve katabolizma arasındaki temel farkı düşünün: biri 'yapar', diğeri 'yıkar'."
    },
    {
      "questionNumber": 2,
      "question": "Aşağıdakilerden hangisi öncelikli olarak katabolik (yıkım) bir metabolik yoldur?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Glikojenez (Glikojen sentezi)",
          "rationale": "Glikojenez, glukoz moleküllerini birleştirerek glikojen polimerini oluşturur; bu bir anabolik (yapım) süreçtir.",
          "isCorrect": false
        },
        {
          "text": "Yağ asidi sentezi",
          "rationale": "Bu yol, küçük asetil-CoA birimlerinden uzun zincirli yağ asitleri inşa eder ve enerji (NADPH) tüketir; anaboliktir.",
          "isCorrect": false
        },
        {
          "text": "Glukoneogenez",
          "rationale": "Bu yol, piruvat gibi küçük moleküllerden glukoz sentezler; enerji tüketen anabolik bir yoldur.",
          "isCorrect": false
        },
        {
          "text": "Glikoliz",
          "rationale": "Glikoliz, 6 karbonlu glukozu 3 karbonlu iki piruvata parçalar ve net ATP ile NADH (enerji) üretir; bu bir katabolik (yıkım) süreçtir.",
          "isCorrect": true
        },
        {
          "text": "Protein sentezi (Translasyon)",
          "rationale": "Protein sentezi, amino asitleri birleştirerek polipeptit zincirleri oluşturur; yüksek miktarda enerji tüketen bir anabolik süreçtir.",
          "isCorrect": false
        }
      ],
      "hint": "Hangi yolun büyük bir molekülü parçalayarak net enerji (ATP veya NADH) ürettiğini düşünün."
    },
    {
      "questionNumber": 3,
      "question": "Hücresel metabolizmada ATP'nin (Adenozin Trifosfat) 'evrensel enerji para birimi' olarak kabul edilmesinin temel nedeni nedir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Yapısında riboz şekeri içermesi.",
          "rationale": "Riboz, ATP'nin yapısal bir bileşenidir ancak enerji transferindeki rolünün temel nedeni değildir. RNA'da da riboz bulunur.",
          "isCorrect": false
        },
        {
          "text": "Sadece mitokondride üretilebilmesi.",
          "rationale": "Bu ifade yanlıştır; ATP, substrat düzeyinde fosforilasyon ile sitozolde (glikoliz) de üretilir.",
          "isCorrect": false
        },
        {
          "text": "Fosfoanhidrit bağlarının hidrolizinin yüksek miktarda serbest enerji açığa çıkarması ($ΔG < 0$).",
          "rationale": "İkinci ve üçüncü (beta ve gamma) fosfat grupları arasındaki yüksek enerjili bağların kopması, endergonik reaksiyonları sürdürebilecek enerjiyi sağlar.",
          "isCorrect": true
        },
        {
          "text": "Katabolik reaksiyonlarda tüketilmesi ve anabolik reaksiyonlarda üretilmesi.",
          "rationale": "Bu ifade tam tersidir. ATP, katabolik reaksiyonlarda üretilir (veya korunur) ve anabolik reaksiyonlarda tüketilir.",
          "isCorrect": false
        },
        {
          "text": "Yapısında adenin bazı içermesi.",
          "rationale": "Adenin, ATP'nin yapısal bir parçasıdır ancak enerji taşıyıcı rolünün birincil nedeni değildir. NAD+, FAD ve DNA'da da adenin bulunur.",
          "isCorrect": false
        }
      ],
      "hint": "ATP'nin hangi bağlarının 'yüksek enerjili' olarak kabul edildiğini ve bu enerjinin nasıl kullanıldığını düşünün."
    },
    {
      "questionNumber": 4,
      "question": "Termodinamik olarak elverişsiz (endergonik, $ΔG > 0$) bir anabolik reaksiyonun hücre içinde gerçekleşebilmesi için temel biyokimyasal mekanizma nedir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Reaksiyon hızını artırmak için enzim konsantrasyonunu düşürmek.",
          "rationale": "Enzim konsantrasyonunu düşürmek reaksiyon hızını yavaşlatır ve termodinamik elverişliliği ( $ΔG$) değiştirmez.",
          "isCorrect": false
        },
        {
          "text": "Reaksiyonu, ATP hidrolizi gibi yüksek düzeyde ekzergonik ($ΔG < 0$) bir reaksiyon ile eşleştirmek (coupling).",
          "rationale": "Serbest enerji değişiklikleri toplanabilirdir. Yüksek negatif $ΔG$'ye sahip bir reaksiyon (ATP hidrolizi), pozitif $ΔG$'ye sahip bir reaksiyonu sürükleyerek net $ΔG$'yi negatif yapabilir.",
          "isCorrect": true
        },
        {
          "text": "Reaksiyonun tersinir (reversible) olmasını sağlamak.",
          "rationale": "Reaksiyonun tersinir olması, termodinamik engeli aşmasını sağlamaz; sadece yönünü belirleyen şeyin konsantrasyonlar olduğunu belirtir.",
          "isCorrect": false
        },
        {
          "text": "Reaksiyonun aktivasyon enerjisini bir enzim kullanarak düşürmek.",
          "rationale": "Enzimler aktivasyon enerjisini düşürerek reaksiyon hızını artırır ancak reaksiyonun genel serbest enerji değişimini ($ΔG$) veya yönünü değiştirmez.",
          "isCorrect": false
        },
        {
          "text": "Reaksiyonu mitokondri yerine sitozolde gerçekleştirmek.",
          "rationale": "Kompartmanlaşma metabolik yolları ayırır ancak bir reaksiyonun termodinamik elverişsizliğini tek başına çözmez.",
          "isCorrect": false
        }
      ],
      "hint": "Serbest enerji değişikliklerinin ($ΔG$) toplanabilirliği ilkesini ve ATP'nin rolünü düşünün."
    },
    {
      "questionNumber": 5,
      "question": "Karaciğerde, kan glukozu düşükken, laktat ve alanin gibi karbonhidrat olmayan öncüllerden glukoz sentezlenmesi süreci (Glukoneogenez) metabolik olarak nasıl sınıflandırılır?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Katabolik",
          "rationale": "Katabolizma, yıkım süreçleridir. Glukoneogenez ise küçük moleküllerden glukoz 'inşa ettiği' için bu sınıfa girmez.",
          "isCorrect": false
        },
        {
          "text": "Amfibolik",
          "rationale": "Amfibolik yollar hem katabolik hem de anabolik yollara hizmet eder (örn. TCA döngüsü). Glukoneogenez ise net olarak bir yapım yoludur.",
          "isCorrect": false
        },
        {
          "text": "Anabolik",
          "rationale": "Glukoneogenez, 3 karbonlu öncüllerden 6 karbonlu glukoz 'inşa eder' ve bu süreçte ATP ve GTP (enerji) tüketir. Bu, anabolizmanın tanımıdır.",
          "isCorrect": true
        },
        {
          "text": "Sekonder Metabolizma",
          "rationale": "Sekonder metabolizma, büyüme için zorunlu olmayan (örn. bitki pigmentleri) moleküllerin sentezidir. Glukoz sentezi ise primer (temel) metabolizmadır.",
          "isCorrect": false
        },
        {
          "text": "Oksidatif Fosforilasyon",
          "rationale": "Oksidatif fosforilasyon, NADH ve $FADH_2$'den ATP üreten elektron transport zinciri sürecidir, glukoz sentezi değildir.",
          "isCorrect": false
        }
      ],
      "hint": "Bu süreçte basit moleküllerden karmaşık bir molekül mü yapılıyor, yoksa karmaşık bir molekül parçalanıyor mu?"
    },
    {
      "questionNumber": 6,
      "question": "Diyetle alınan nişastanın (amilopektin) sindirimi için ağızda (tükürük) ve ince bağırsakta (pankreatik) görev alan ve $α-1,4$ glikozidik bağlarını kıran anahtar enzim aşağıdakilerden hangisidir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Laktaz",
          "rationale": "Laktaz, süt şekeri olan laktozu (glukoz + galaktoz) parçalayan bir disakkaridazdır.",
          "isCorrect": false
        },
        {
          "text": "Sukraz",
          "rationale": "Sukraz, çay şekeri olan sukrozu (glukoz + fruktoz) parçalayan bir disakkaridazdır.",
          "isCorrect": false
        },
        {
          "text": "$α-Amilaz$",
          "rationale": "Amilaz (hem tükürük hem de pankreatik formda), nişasta ve glikojendeki $α-1,4$ bağlarını parçalayan ana endoglikozidazdır.",
          "isCorrect": true
        },
        {
          "text": "İzomaltaz ($α-dekstrinaz$)",
          "rationale": "Bu enzim, amilazın parçalayamadığı nişasta dallanma noktalarındaki $α-1,6$ bağlarını kırar.",
          "isCorrect": false
        },
        {
          "text": "Pepsin",
          "rationale": "Pepsin, midede proteinleri parçalayan bir proteaz enzimidir, karbonhidrat sindiriminde rol almaz.",
          "isCorrect": false
        }
      ],
      "hint": "Nişasta sindirimi ağızda başlar. Bu enzimin adı nedir?"
    },
    {
      "questionNumber": 7,
      "question": "İnce bağırsak lümeninden (düşük konsantrasyon) enterosit (epitel hücresi) sitozolüne (yüksek konsantrasyon) glukoz taşınmasını sağlayan ve $Na^+$ gradyanını kullanan aktif taşıyıcı aşağıdakilerden hangisidir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "GLUT-1",
          "rationale": "GLUT-1, özellikle beyin ve eritrositlerde bulunur ve glukozun konsantrasyon gradyanına göre pasif taşınmasını (kolaylaştırılmış difüzyon) sağlar.",
          "isCorrect": false
        },
        {
          "text": "GLUT-2",
          "rationale": "GLUT-2, karaciğer ve pankreasta bulunur, yüksek $K_m$ değerine sahiptir ve konsantrasyon gradyanına göre pasif taşıma yapar, $Na^+$ kullanmaz.",
          "isCorrect": false
        },
        {
          "text": "GLUT-4",
          "rationale": "GLUT-4, kas ve yağ dokusunda bulunur, insüline bağımlıdır ve konsantrasyon gradyanına göre pasif taşıma yapar.",
          "isCorrect": false
        },
        {
          "text": "SGLT-1",
          "rationale": "SGLT-1 (Sodyum-Glukoz Taşıyıcısı 1), ince bağırsak ve böbrekte bulunur; $Na^+$'un hücre içine akış enerjisini kullanarak glukozu konsantrasyon gradyanına karşı (aktif) taşır.",
          "isCorrect": true
        },
        {
          "text": "GLUT-5",
          "rationale": "GLUT-5, özellikle fruktozun kolaylaştırılmış difüzyonla (pasif taşıma) taşınmasından sorumludur.",
          "isCorrect": false
        }
      ],
      "hint": "Bağırsak lümeninden emilim, konsantrasyonun tersine bir taşıma gerektirir. Bu 'aktif' taşımayı hangi protein yapar?"
    },
    {
      "questionNumber": 8,
      "question": "Glikoliz metabolik yolu ökaryotik hücrelerin hangi bölümünde gerçekleşir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Mitokondri matriksi",
          "rationale": "Mitokondri matriksi, TCA döngüsü ve yağ asidi beta-oksidasyonu gibi süreçlerin yeridir.",
          "isCorrect": false
        },
        {
          "text": "Sitozol (Sitoplazma)",
          "rationale": "Glikolizin on enzimi de sitozolde serbest olarak bulunur, bu da anaerobik koşullarda bile ATP üretimine izin verir.",
          "isCorrect": true
        },
        {
          "text": "Endoplazmik retikulum lümeni",
          "rationale": "Endoplazmik retikulum, protein modifikasyonu ve lipid sentezi ile ilgilidir. Sadece son glukoneogenez adımı (Glukoz-6-fosfataz) burada gerçekleşir.",
          "isCorrect": false
        },
        {
          "text": "Çekirdek (Nükleus)",
          "rationale": "Çekirdek, DNA replikasyonu ve transkripsiyon gibi genetik işlemlerin merkezidir.",
          "isCorrect": false
        },
        {
          "text": "Peroksizom",
          "rationale": "Peroksizomlar, çok uzun zincirli yağ asitlerinin oksidasyonu ve reaktif oksijen türlerinin detoksifikasyonu ile ilgilidir.",
          "isCorrect": false
        }
      ],
      "hint": "Bu yol, oksijen gerektirmeyen en temel enerji üretim yollarından biridir ve tüm hücre tiplerinde bulunur."
    },
    {
      "questionNumber": 9,
      "question": "Aerobik koşullar altında (piruvatın Asetil-CoA'ya dönüştüğü varsayılarak) 1 molekül glukozun glikoliz yoluyla katabolizması sonucu net olarak üretilen ATP ve NADH miktarı nedir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "4 ATP ve 2 NADH",
          "rationale": "Toplam 4 ATP üretilir, ancak hazırlık fazında 2 ATP tüketildiği için 'net' kazanç bu değildir.",
          "isCorrect": false
        },
        {
          "text": "2 ATP ve 0 NADH",
          "rationale": "Anaerobik fermantasyonda NADH, laktat üretimi için kullanılır ve net NADH kazancı 0 olur, ancak aerobik glikolizde NADH birikir.",
          "isCorrect": false
        },
        {
          "text": "2 ATP ve 2 NADH",
          "rationale": "Hazırlık fazında 2 ATP harcanır, kazanç fazında 4 ATP (substrat düzeyinde) ve 2 NADH (G3P Dehidrogenaz) üretilir. Net kazanç 2 ATP ve 2 NADH'dır.",
          "isCorrect": true
        },
        {
          "text": "32 ATP ve 0 NADH",
          "rationale": "Bu yüksek ATP miktarı, glikoliz, TCA döngüsü ve oksidatif fosforilasyonun tamamı işletildiğinde elde edilir, sadece glikoliz basamağında değil.",
          "isCorrect": false
        },
        {
          "text": "0 ATP ve 2 NADH",
          "rationale": "Glikolizde her zaman net bir ATP kazancı (substrat düzeyinde) vardır.",
          "isCorrect": false
        }
      ],
      "hint": "Glikolizin 'hazırlık' (yatırım) ve 'kazanç' (getiri) fazlarını ayrı ayrı düşünün. Harcanan ve üretilen ATP'leri dengeleyin."
    },
    {
      "questionNumber": 10,
      "question": "Karaciğerde bulunan Glukokinaz (Hekzokinaz IV) enziminin, kasta bulunan Hekzokinaz I'den temel farkı nedir ve bu farkın metabolik önemi nedir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Glukokinaz, glukoz yerine fruktozu fosforiller; bu, fruktoz metabolizmasını hızlandırır.",
          "rationale": "Glukokinaz glukoza spesifiktir; fruktozu fosforilleyen ana enzim fruktokinazdır.",
          "isCorrect": false
        },
        {
          "text": "Glukokinaz, Glikoz-6-Fosfat (G6P) tarafından inhibe edilmez ve glukoza afinitesi düşüktür (yüksek $K_m$); bu, karaciğerin kan şekeri yüksekken glukozu almasını sağlar.",
          "rationale": "Yüksek $K_m$, enzimin sadece kan şekeri yüksekken (örn. toklukta) aktif olmasını sağlar. G6P inhibisyonunun olmaması, glikojen sentezi için G6P birikimine izin verir.",
          "isCorrect": true
        },
        {
          "text": "Glukokinaz, ATP yerine GTP kullanır; bu, enerji kaynağını çeşitlendirir.",
          "rationale": "Glukokinaz, hekzokinaz gibi ATP'yi fosfat donörü olarak kullanır.",
          "isCorrect": false
        },
        {
          "text": "Glukokinaz sitozolde, Hekzokinaz I mitokondride bulunur; bu, yolları ayırır.",
          "rationale": "Her iki enzim de glikolizin ilk adımı olarak sitozolde faaliyet gösterir.",
          "isCorrect": false
        },
        {
          "text": "Glukokinaz glukozu Glikoz-1-Fosfata dönüştürür; bu, doğrudan glikojen sentezine yönlendirir.",
          "rationale": "Her iki enzim de glukozu Glikoz-6-Fosfata fosforiller. G6P daha sonra Fosfoglukomutaz ile G1P'ye dönüştürülür.",
          "isCorrect": false
        }
      ],
      "hint": "Karaciğerin kan şekerini 'tamponlama' rolünü düşünün. Toklukta nasıl davranmalı, açlıkta nasıl davranmalı?"
    },
    {
      "questionNumber": 11,
      "question": "Glikoliz yolunda yüksek miktarda negatif serbest enerji değişimine ($ΔG$) sahip olan ve bu nedenle 'geri dönüşümsüz' (irreversible) kabul edilen üç kilit regülasyon basamağı hangi enzimler tarafından katalizlenir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Fosfoglukomutaz, Enolaz, Laktat Dehidrogenaz",
          "rationale": "Bu enzimler, $ΔG$'si sıfıra yakın olan (veya glikolizin ana yolu dışında olan) geri dönüşümlü reaksiyonları katalizler.",
          "isCorrect": false
        },
        {
          "text": "Hekzokinaz, Fosfofruktokinaz-1 (PFK-1), Piruvat Kinaz",
          "rationale": "Bu üç 'kinaz' reaksiyonu (1., 3. ve 10. basamaklar), ATP'nin harcandığı veya üretildiği, termodinamik olarak elverişli ve geri dönüşümsüz adımlardır.",
          "isCorrect": true
        },
        {
          "text": "Aldolaz, Trioz Fosfat İzomeraz, Gliseraldehit-3-P Dehidrogenaz",
          "rationale": "Bu reaksiyonlar (4., 5. ve 6. basamaklar) $ΔG$'si sıfıra yakın veya pozitif olan, geri dönüşümlü adımlardır.",
          "isCorrect": false
        },
        {
          "text": "Hekzokinaz, Aldolaz, Piruvat Dehidrogenaz",
          "rationale": "Aldolaz geri dönüşümlüdür ve Piruvat Dehidrogenaz glikoliz yolunun bir parçası değil, glikoliz ile TCA döngüsü arasındaki bağlantıdır.",
          "isCorrect": false
        },
        {
          "text": "Fosfofruktokinaz-1, Fosfogliserat Kinaz, Piruvat Kinaz",
          "rationale": "Fosfogliserat Kinaz (7. basamak), substrat düzeyinde fosforilasyon yapmasına rağmen, $ΔG$'si sıfıra yakın olduğu için geri dönüşümlü kabul edilir.",
          "isCorrect": false
        }
      ],
      "hint": "Hangi basamaklar 'bypass' reaksiyonları gerektiren glukoneogenezde farklı enzimler kullanır?"
    },
    {
      "questionNumber": 12,
      "question": "Bir kas hücresinin enerji yükü (energy charge) yüksek olduğunda (ATP bol, AMP az) Fosfofruktokinaz-1 (PFK-1) enziminin aktivitesi nasıl etkilenir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "ATP enzimi allosterik olarak aktive eder, glikoliz hızlanır.",
          "rationale": "ATP bu enzimin substratıdır, ancak yüksek konsantrasyonlarda aynı zamanda bir allosterik inhibitör görevi görür.",
          "isCorrect": false
        },
        {
          "text": "AMP enzimi allosterik olarak inhibe eder, glikoliz yavaşlar.",
          "rationale": "AMP (düşük enerji sinyali), PFK-1'in güçlü bir allosterik aktivatörüdür, inhibitörü değil.",
          "isCorrect": false
        },
        {
          "text": "ATP enzimi allosterik olarak inhibe eder, glikoliz yavaşlar.",
          "rationale": "Hücrede enerji (ATP) bol olduğunda, glikolizin (enerji üreten yol) yavaşlaması metabolik olarak mantıklıdır. ATP, PFK-1 için bir allosterik inhibitördür.",
          "isCorrect": true
        },
        {
          "text": "ATP ve AMP birbirini dengeleyerek enzimin hızını değiştirmez.",
          "rationale": "ATP ve AMP'nin etkileri zıttır ve birbirini dengelemez; oransal olarak hücresel enerji durumunu yansıtırlar ve hızı belirlerler.",
          "isCorrect": false
        },
        {
          "text": "ATP enzimin substratı olduğu için $V_{max}$ değerini artırır, glikoliz hızlanır.",
          "rationale": "ATP substrat olmasına rağmen, yüksek konsantrasyonlarda enzimin allosterik bir bölgesine bağlanarak $K_m$ değerini artırır (afiniteyi düşürür) ve inhibisyona neden olur.",
          "isCorrect": false
        }
      ],
      "hint": "Hücrede enerji fazlası varsa, hücre daha fazla enerji üretmek ister mi, yoksa yakıtı depolar mı? PFK-1 bu kararı nasıl verir?"
    },
    {
      "questionNumber": 13,
      "question": "Glikolizde 'substrat düzeyinde fosforilasyon' yoluyla ATP sentezlenen iki reaksiyon, hangi iki yüksek enerjili ara üründen fosfat transferini içerir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Glukoz-6-Fosfat ve Fruktoz-6-Fosfat",
          "rationale": "Bu moleküller fosfat esterleridir ancak ATP sentezlemek için yeterli hidroliz enerjisine sahip değildirler; aksine oluşmaları için ATP harcanır.",
          "isCorrect": false
        },
        {
          "text": "Fruktoz-1,6-Bisfosfat ve Gliseraldehit-3-Fosfat",
          "rationale": "Fruktoz-1,6-Bisfosfat ATP harcayarak oluşur ve Gliseraldehit-3-Fosfat bir sonraki oksidasyon adımı için substrattır.",
          "isCorrect": false
        },
        {
          "text": "1,3-Bisfosfogliserat ve Fosfoenolpiruvat (PEP)",
          "rationale": "1,3-Bisfosfogliserat (bir açil fosfat) ve PEP (bir enol fosfat), ADP'ye fosfat transferi için yeterli yüksek serbest enerjiye sahip iki ara üründür.",
          "isCorrect": true
        },
        {
          "text": "Fosfoenolpiruvat (PEP) ve 2-Fosfogliserat",
          "rationale": "2-Fosfogliserat, PEP'e dönüştürülen düşük enerjili bir esterdir; ATP sentezleyemez.",
          "isCorrect": false
        },
        {
          "text": "1,3-Bisfosfogliserat ve Glukoz-1-Fosfat",
          "rationale": "Glukoz-1-Fosfat, ATP sentezlemek için yeterli enerjiye sahip değildir; UDP-Glukoz oluşumunda kullanılır.",
          "isCorrect": false
        }
      ],
      "hint": "Glikolizin 'kazanç' (payoff) fazındaki hangi iki kinaz reaksiyonu ATP üretir?"
    },
    {
      "questionNumber": 14,
      "question": "Anaerobik (oksijensiz) koşullarda, glikolizin devamlılığı için piruvatın laktata dönüştürülmesinin (laktik asit fermantasyonu) temel amacı nedir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Kaslarda krampa neden olarak yorgunluk sinyali vermek.",
          "rationale": "Laktat birikimi asidoza yol açarak yorgunluğa katkıda bulunsa da, bu reaksiyonun 'amacı' değil, 'sonucudur'.",
          "isCorrect": false
        },
        {
          "text": "Piruvatı mitokondriye girmesi için aktive etmek.",
          "rationale": "Laktat, piruvatın indirgenmiş halidir ve mitokondriye girmez; piruvatın kendisi mitokondriye girer.",
          "isCorrect": false
        },
        {
          "text": "Glikolizde oluşan NADH'ı $NAD^+$'ya geri yükseltgemek (rejenere etmek).",
          "rationale": "Glikolizdeki Gliseraldehit-3-P Dehidrogenaz adımı için $NAD^+$ gereklidir. Oksijen yokluğunda NADH'ı rejenere etmenin tek yolu, piruvatı laktata indirgemektir.",
          "isCorrect": true
        },
        {
          "text": "Ekstra ATP üretmek için substrat düzeyinde fosforilasyon yapmak.",
          "rationale": "Laktat Dehidrogenaz reaksiyonu ATP üretmez veya tüketmez.",
          "isCorrect": false
        },
        {
          "text": "Kan pH'ını düşürerek oksijenin dokulara daha kolay salınmasını sağlamak (Bohr etkisi).",
          "rationale": "Bu fizyolojik bir etki olsa da, reaksiyonun hücresel düzeydeki 'temel amacı' glikolizin devamı için $NAD^+$ sağlamaktır.",
          "isCorrect": false
        }
      ],
      "hint": "Glikolizdeki hangi reaksiyon $NAD^+$'ye ihtiyaç duyar ve $NAD^+$ tükenirse glikoliz durur?"
    },
    {
      "questionNumber": 15,
      "question": "Florür (Fluoride), diş macunlarında kullanılan ve aynı zamanda güçlü bir metabolik inhibitör olan bir iyondur. Glikolizde, 2-Fosfogliseratı Fosfoenolpiruvata (PEP) dönüştüren 'Enolaz' enzimini inhibe eder. Bir hücre florüre maruz kalırsa, hangi ara metabolit(ler) birikir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Piruvat ve Laktat",
          "rationale": "Enolaz inhibe edilirse, yol PEP ve sonrasındaki piruvat/laktata ilerleyemez; bu nedenle bu ürünler birikmez, aksine azalır.",
          "isCorrect": false
        },
        {
          "text": "Glukoz ve Glukoz-6-Fosfat",
          "rationale": "Yoldaki bir tıkanma, önceki tüm ara ürünlerin birikmesine neden olur. Glikolizin başındaki Glukoz-6-Fosfat ve ondan önceki Glukoz da birikir.",
          "isCorrect": false
        },
        {
          "text": "Fruktoz-1,6-Bisfosfat",
          "rationale": "Bu molekül, inhibisyon noktasından (Enolaz) öncedir ve birikmesi beklenir.",
          "isCorrect": false
        },
        {
          "text": "1,3-Bisfosfogliserat ve 2-Fosfogliserat",
          "rationale": "Enolaz, 2-Fosfogliseratı substrat olarak kullanır. Bu enzimin inhibisyonu, doğrudan substratı olan 2-Fosfogliseratın ve ondan önceki 1,3-Bisfosfogliseratın birikmesine neden olur.",
          "isCorrect": true
        },
        {
          "text": "Fosfoenolpiruvat (PEP)",
          "rationale": "PEP, inhibe edilen reaksiyonun 'ürünüdür'. Bu nedenle PEP seviyeleri birikmek yerine düşer.",
          "isCorrect": false
        }
      ],
      "hint": "Bir metabolik yolda bir enzim durdurulursa, o enzimin 'substratı' ve ondan önceki ara ürünler birikmeye başlar."
    },
    {
      "questionNumber": 16,
      "question": "Glukoneogenez (glukoz sentezi) yolunda, glikolizin geri dönüşümsüz üç adımını 'bypass' etmek (atlamak) için farklı enzimler kullanılır. Piruvatın PEP'e dönüşümü için hangi iki enzim gereklidir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Piruvat Kinaz ve Hekzokinaz",
          "rationale": "Bu enzimler glikoliz yolunda geri dönüşümsüz reaksiyonları katalizler; glukoneogenezde kullanılmazlar.",
          "isCorrect": false
        },
        {
          "text": "Piruvat Karboksilaz ve PEP Karboksikinaz (PEPCK)",
          "rationale": "Önce Piruvat Karboksilaz (mitokondride) piruvatı oksaloasetata (OAA) çevirir. Sonra PEPCK (sitozol/mitokondri) OAA'yı PEP'e çevirir. Bu, glikolizdeki Piruvat Kinaz adımını atlatır.",
          "isCorrect": true
        },
        {
          "text": "Fruktoz-1,6-Bisfosfataz ve Glukoz-6-Fosfataz",
          "rationale": "Bu iki enzim, glukoneogenezdeki diğer iki 'bypass' reaksiyonunu katalizler, ancak piruvatın PEP'e dönüşümünü değil.",
          "isCorrect": false
        },
        {
          "text": "Piruvat Dehidrogenaz ve Sitrat Sentaz",
          "rationale": "Bu enzimler piruvatı TCA döngüsüne sokar, glukoneogeneze değil.",
          "isCorrect": false
        },
        {
          "text": "Aldolaz ve Fosfoglukomutaz",
          "rationale": "Bu enzimler hem glikolizde hem de glukoneogenezde görev alan geri dönüşümlü enzimlerdir.",
          "isCorrect": false
        }
      ],
      "hint": "Glikolizdeki Piruvat Kinaz basamağı tek bir reaksiyondur, ancak glukoneogenezde bu adımı geri dönmek iki enzim ve iki farklı kompartman (mitokondri ve sitozol) gerektirir."
    },
    {
      "questionNumber": 17,
      "question": "Aşağıdakilerden hangisi memeli karaciğerinde glukoneogenez için bir öncül (prekürsör) **değildir**?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Laktat",
          "rationale": "Laktat (Cori döngüsü), Laktat Dehidrogenaz ile piruvata dönüştürülerek glukoneogenez için önemli bir kaynak sağlar.",
          "isCorrect": false
        },
        {
          "text": "Alanin",
          "rationale": "Alanin (Glukoz-Alanin döngüsü), transaminasyon ile piruvata dönüşerek glukoneogenez için önemli bir amino asit kaynağıdır.",
          "isCorrect": false
        },
        {
          "text": "Gliserol",
          "rationale": "Yağların (trigliserit) yıkımından gelen gliserol, Dihidroksiaseton Fosfat'a (DHAP) dönüştürülerek glukoneogenez yoluna girebilir.",
          "isCorrect": false
        },
        {
          "text": "Asetil-CoA (Yağ asidi yıkımından gelen)",
          "rationale": "Memelilerde, yağ asidi yıkımından gelen 2 karbonlu Asetil-CoA'yı net olarak glukoza dönüştürecek bir metabolik yol yoktur. Piruvat Dehidrogenaz reaksiyonu geri dönüşümsüzdür.",
          "isCorrect": true
        },
        {
          "text": "Glutamat",
          "rationale": "Glutamat gibi glukojenik amino asitler, $α-ketoglutarata$ (bir TCA ara ürünü) dönüşebilir ve Oksaloasetat üzerinden glukoneogeneze katılabilir.",
          "isCorrect": false
        }
      ],
      "hint": "Memeliler, 2 karbonlu hangi molekülden net glukoz sentezi yapamaz? (Piruvat Dehidrogenaz reaksiyonunu düşünün)."
    },
    {
      "questionNumber": 18,
      "question": "Karaciğerde Fruktoz-2,6-Bisfosfat (F-2,6-BP) molekülünün glikoliz ve glukoneogenez üzerindeki 'karşılıklı (reciprocal) regülasyon' etkisi nedir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Glikolizi (PFK-1) inhibe eder ve glukoneogenezi (FBPase-1) aktive eder.",
          "rationale": "Bu, F-2,6-BP'nin etkisinin tam tersidir. Bu durum açlıkta (glukagon) görülür.",
          "isCorrect": false
        },
        {
          "text": "Glikolizi (PFK-1) aktive eder ve glukoneogenezi (FBPase-1) inhibe eder.",
          "rationale": "F-2,6-BP, 'yakıt bol' sinyalidir. PFK-1'i (glikoliz) güçlü bir şekilde aktive ederken, zıt enzimi olan FBPase-1'i (glukoneogenez) inhibe eder.",
          "isCorrect": true
        },
        {
          "text": "Her iki yolu da (PFK-1 ve FBPase-1) aktive ederek substrat döngüsünü hızlandırır.",
          "rationale": "Bu durum, net bir metabolik akış sağlamaz ve sadece ATP israfına (futile cycle) yol açar.",
          "isCorrect": false
        },
        {
          "text": "Her iki yolu da (PFK-1 ve FBPase-1) inhibe ederek metabolizmayı yavaşlatır.",
          "rationale": "F-2,6-BP, bu iki zıt enzime karşı farklı etkiler göstererek metabolik akışın yönünü belirler.",
          "isCorrect": false
        },
        {
          "text": "Sadece PFK-1'i aktive eder, FBPase-1 üzerinde bir etkisi yoktur.",
          "rationale": "Bu molekülün anahtar rolü, 'karşılıklı' regülasyon yapmasıdır; yani zıt yolda çalışan enzimi de (FBPase-1) etkiler.",
          "isCorrect": false
        }
      ],
      "hint": "Bu molekül, tokluk durumunda (insülin) artar. Toklukta hangi metabolik yolun hızlanması gerekir?"
    },
    {
      "questionNumber": 19,
      "question": "Cori Döngüsü (Laktat Döngüsü) hangi iki organ arasında gerçekleşir ve temel amacı nedir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Karaciğer ve Beyin; Beyne laktat formunda enerji taşımak.",
          "rationale": "Beyin laktatı yakıt olarak kullanabilse de, Cori döngüsü glukozun geri kazanımı ile ilgilidir ve ana partneri kas dokusudur.",
          "isCorrect": false
        },
        {
          "text": "Kas ve Karaciğer; Kasta oluşan laktatı karaciğerde glukoza (glukoneogenez) çevirerek kasa geri göndermek.",
          "rationale": "Anaerobik egzersiz sırasında kasta oluşan laktat, karaciğere taşınır, glukoneogenez ile glukoza dönüştürülür ve bu glukoz tekrar kas tarafından kullanılabilir.",
          "isCorrect": true
        },
        {
          "text": "Kas ve Yağ Dokusu; Kasta oluşan laktatı yağ dokusunda yağa çevirmek.",
          "rationale": "Laktat yağa dönüştürülebilse de (piruvat üzerinden), Cori Döngüsü glukozun geri kazanımını ifade eder.",
          "isCorrect": false
        },
        {
          "text": "İnce Bağırsak ve Karaciğer; Emilim sonrası laktatı glukoza çevirmek.",
          "rationale": "Bu, Cori Döngüsü'nün tanımı değildir. Cori Döngüsü, anaerobik kas aktivitesi ile ilgilidir.",
          "isCorrect": false
        },
        {
          "text": "Karaciğer ve Böbrek; Kanda biriken laktatı böbrek yoluyla atmak.",
          "rationale": "Laktatın fazlası idrarla atılabilir ancak Cori döngüsü, laktatın 'geri kazanıldığı' metabolik bir işbirliğidir.",
          "isCorrect": false
        }
      ],
      "hint": "Yoğun egzersiz sırasında kaslarınızda ne birikir ve bu biriken madde nerede tekrar glukoza dönüştürülür?"
    },
    {
      "questionNumber": 20,
      "question": "Aşağıdaki durumlardan hangisi, kasta 'laktik asit fermantasyonu'nun (piruvatın laktata dönüşümü) hızlanmasına neden **olmaz**?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Yoğun (sprint) egzersiz sırasında kas dokusuna yetersiz oksijen (hipoksi) gelmesi.",
          "rationale": "Oksijen yetersizliği, NADH'ın mitokondride okside olmasını engeller. Glikolizin devamı için NADH'ın sitozolde (laktat üreterek) rejenere edilmesi gerekir.",
          "isCorrect": false
        },
        {
          "text": "Mitokondri içermeyen eritrositlerde (alyuvarlar) glikolizin çalışması.",
          "rationale": "Eritrositler mitokondriye sahip olmadıkları için enerjilerini sadece anaerobik glikolizle üretirler ve $NAD^+$ rejenere etmek için sürekli laktat üretirler.",
          "isCorrect": false
        },
        {
          "text": "Piruvat Dehidrogenaz (PDC) kompleksinin arsenit gibi bir inhibitörle bloke olması.",
          "rationale": "PDC bloke edilirse, piruvat Asetil-CoA'ya dönüşemez. Biriken piruvat, sitozolde laktata dönüşmeye zorlanır (Vaka 4'te olduğu gibi).",
          "isCorrect": false
        },
        {
          "text": "Hücrede $NADH/NAD^+$ oranının çok düşük olması (yani $NAD^+$'nın bol olması).",
          "rationale": "Eğer $NAD^+$ (yükseltgenmiş form) bolsa, NADH'ı (indirgenmiş form) rejenere etmeye gerek yoktur. Bu durum (düşük $NADH/NAD^+$ oranı) laktat fermantasyonunu yavaşlatır, çünkü piruvatın mitokondriye girmesi tercih edilir.",
          "isCorrect": true
        },
        {
          "text": "Hücrenin enerji ihtiyacının, mitokondriyal ATP üretim kapasitesini (oksidatif fosforilasyon) aşması.",
          "rationale": "Enerji ihtiyacı (ATP kullanımı) glikoliz hızını (AMP artışı ile) artırır. Glikoliz hızı mitokondrinin NADH'ı oksitleme hızını aşarsa, NADH birikir ve laktat fermantasyonu başlar.",
          "isCorrect": false
        }
      ],
      "hint": "Laktat fermantasyonunun ana nedeni, $NADH/NAD^+$ oranının yüksek olmasıdır. Hangi durum bu oranın düşük olmasına neden olur?"
    },
    {
      "questionNumber": 21,
      "question": "Pentoz Fosfat Yolu'nun (PPP) oksidatif fazının iki temel biyokimyasal ürünü nedir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "ATP ve NADH",
          "rationale": "PPP, ATP üretmek veya tüketmek için tasarlanmamıştır ve elektron alıcısı olarak $NAD^+$ yerine $NADP^+$ kullanır.",
          "isCorrect": false
        },
        {
          "text": "NADPH ve Riboz-5-Fosfat",
          "rationale": "Oksidatif faz, iki dehidrogenaz reaksiyonunda NADPH (redüktif biyosentez için) ve bir dekarboksilasyon ile Riboz-5-Fosfat (nükleotid sentezi için) üretir.",
          "isCorrect": true
        },
        {
          "text": "Fruktoz-6-Fosfat ve Gliseraldehit-3-Fosfat",
          "rationale": "Bu moleküller, PPP'nin 'non-oksidatif' fazının ürünleridir ve glikoliz ara ürünleridir.",
          "isCorrect": false
        },
        {
          "text": "Piruvat ve $CO_2$",
          "rationale": "PPP, glikoliz gibi piruvat üretmez; $CO_2$ üretir ancak diğer ana ürün pentoz fosfattır.",
          "isCorrect": false
        },
        {
          "text": "Riboz-5-Fosfat ve Fruktoz-1,6-Bisfosfat",
          "rationale": "Fruktoz-1,6-Bisfosfat bir glikoliz ara ürünüdür ve PPP'de doğrudan üretilmez.",
          "isCorrect": false
        }
      ],
      "hint": "Bu yolun bir amacı redüktif güç sağlamak, diğer amacı ise nükleik asitlerin yapı taşını üretmektir."
    },
    {
      "questionNumber": 22,
      "question": "Pentoz Fosfat Yolu'nun (PPP) hız sınırlayıcı ve kilit regülasyon basamağı olan reaksiyonu hangi enzim katalizler?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Transketolaz",
          "rationale": "Transketolaz, non-oksidatif fazda görev alan ve TPP'ye bağımlı olan, geri dönüşümlü bir reaksiyonu katalizler.",
          "isCorrect": false
        },
        {
          "text": "Glukoz-6-Fosfat Dehidrogenaz (G6PD)",
          "rationale": "Bu enzim (G6PD), yolun ilk adımı olan ve NADPH üreten geri dönüşümsüz reaksiyonu katalizler. $NADP^+$ (substrat) varlığı ve NADPH (ürün) inhibisyonu ile sıkı bir şekilde regüle edilir.",
          "isCorrect": true
        },
        {
          "text": "Transaldolaz",
          "rationale": "Transaldolaz, non-oksidatif fazda görev alan ve 3 karbonlu birimleri transfer eden geri dönüşümlü bir enzimdir.",
          "isCorrect": false
        },
        {
          "text": "Fosfoglukonat Dehidrogenaz",
          "rationale": "Bu enzim, oksidatif fazın ikinci NADPH üreten adımıdır, ancak hız sınırlayıcı ana kontrol noktası G6PD'dir.",
          "isCorrect": false
        },
        {
          "text": "Fosfoglukomutaz",
          "rationale": "Bu enzim, Glikoz-6-Fosfatı Glikoz-1-Fosfata (glikojen sentezi için) dönüştürür, PPP'nin bir parçası değildir.",
          "isCorrect": false
        }
      ],
      "hint": "Vaka 3'te eksikliği ciddi sorunlara yol açan enzim hangisiydi?"
    },
    {
      "questionNumber": 23,
      "question": "Eritrositlerde (alyuvarlar) üretilen NADPH'ın, hücreyi reaktif oksijen türlerinin (ROS) neden olduğu oksidatif hasardan korumasının ana mekanizması nedir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "NADPH, $H_2O_2$'yi (hidrojen peroksit) doğrudan su molekülüne indirger.",
          "rationale": "Bu reaksiyon doğrudan NADPH tarafından değil, Glutatyon Peroksidaz enzimi tarafından gerçekleştirilir.",
          "isCorrect": false
        },
        {
          "text": "NADPH, Glutatyon Redüktaz enzimini kullanarak okside olmuş glutatyonu (GSSG) indirgenmiş glutatyona (GSH) çevirir.",
          "rationale": "İndirgenmiş glutatyon (GSH), Glutatyon Peroksidaz için substrattır ve $H_2O_2$'yi detoksifiye eder. NADPH'ın rolü, bu GSH havuzunu sürekli olarak yenilemektir.",
          "isCorrect": true
        },
        {
          "text": "NADPH, NADH'a dönüştürülerek laktat dehidrogenaz reaksiyonunu destekler.",
          "rationale": "NADPH ve NADH, farklı metabolik yollarda (anabolizma vs katabolizma) görev alan ve birbirine kolayca dönüşmeyen farklı koenzimlerdir.",
          "isCorrect": false
        },
        {
          "text": "NADPH, demiri ($Fe^{3+}$) indirgeyerek hemoglobinin oksijen taşımasını artırır.",
          "rationale": "Hemoglobinin $Fe^{2+}$ (ferro) formda kalmasını sağlayan sistem (Methemoglobin redüktaz) NADPH'a dolaylı olarak bağlansa da, ana koruma mekanizması glutatyon üzerindendir.",
          "isCorrect": false
        },
        {
          "text": "NADPH, ATP sentazı aktive ederek hücrenin enerji seviyesini yükseltir.",
          "rationale": "NADPH, enerji (ATP) üretiminde değil, redüktif (indirgeyici) biyosentez ve detoksifikasyon reaksiyonlarında kullanılır.",
          "isCorrect": false
        }
      ],
      "hint": "Eritrositlerin $H_2O_2$'yi temizlemek için kullandığı küçük peptit nedir ve bu peptiti yenileyen enzim hangi koenzimi kullanır?"
    },
    {
      "questionNumber": 24,
      "question": "Bir hücrenin öncelikli ihtiyacı 'NADPH' ise (örneğin yağ asidi sentezi yapan karaciğer hücresi), ancak 'Riboz-5-Fosfat'a ihtiyacı yoksa, Pentoz Fosfat Yolu'nun (PPP) non-oksidatif faz enzimleri (Transketolaz/Transaldolaz) hangi metabolik dönüşümü sağlar?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Oksidatif fazı durdurur ve glikolizden Riboz-5-Fosfat çeker.",
          "rationale": "Bu senaryo, hücrenin Riboz-5-Fosfat'a ihtiyacı olduğunda ancak NADPH'a ihtiyacı olmadığında (Mode 1) gerçekleşir.",
          "isCorrect": false
        },
        {
          "text": "Üretilen Riboz-5-Fosfatı, Fruktoz-6-Fosfat ve Gliseraldehit-3-Fosfata (glikoliz/glukoneogenez ara ürünleri) geri dönüştürür.",
          "rationale": "Bu (Mode 3), oksidatif fazın sürekli çalışarak NADPH üretmesini sağlar. Fazla üretilen Riboz-5-Fosfat ise non-oksidatif faz aracılığıyla glikolize geri kazandırılır.",
          "isCorrect": true
        },
        {
          "text": "Riboz-5-Fosfatı doğrudan $CO_2$'ye okside ederek daha fazla NADPH üretir.",
          "rationale": "Riboz-5-Fosfatın daha fazla oksidasyonu PPP'de gerçekleşmez; $CO_2$ sadece G6P'nin 6-Fosfoglukonata oksidasyonunda çıkar.",
          "isCorrect": false
        },
        {
          "text": "Transketolaz ve Transaldolaz enzimlerini inhibe ederek Riboz-5-Fosfatın birikmesini sağlar.",
          "rationale": "Bu, hücrenin ihtiyacına yönelik bir cevap olmaz; biriken Riboz-5-Fosfat oksidatif fazı (G6PD) inhibe ederek NADPH üretimini durdurur.",
          "isCorrect": false
        },
        {
          "text": "NADPH'ı kullanarak Riboz-5-Fosfatı Glukoz-6-Fosfata geri sentezler.",
          "rationale": "Non-oksidatif faz geri dönüşümlüdür ancak NADPH tüketmez; amacı NADPH üretimini desteklemektir.",
          "isCorrect": false
        }
      ],
      "hint": "Hücre sadece NADPH istiyorsa, pentozları ne yapmalı? Onları glikolize geri göndererek (F6P, G3P) tekrar G6P yapıp döngüye sokabilir."
    },
    {
      "questionNumber": 25,
      "question": "Pentoz Fosfat Yolu'nun non-oksidatif fazında görev alan Transketolaz enzimi, 2 karbonlu birimlerin transferini gerçekleştirmek için hangi B vitamini türevi koenzime ihtiyaç duyar?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "NADPH (Niasin - Vitamin B3 türevi)",
          "rationale": "NADPH, oksidatif fazda üretilen bir üründür, non-oksidatif fazda bir koenzim olarak kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "Biotin (Vitamin B7)",
          "rationale": "Biotin, karboksilasyon (1 karbonlu $CO_2$ transferi) reaksiyonlarında (örn. Piruvat Karboksilaz) görev alır.",
          "isCorrect": false
        },
        {
          "text": "Tiamin Pirofosfat (TPP - Vitamin B1 türevi)",
          "rationale": "TPP, hem Transketolaz (2 karbonlu transfer) hem de Piruvat Dehidrogenaz (PDC) gibi enzimlerde aldehit gruplarının transferinde görev alır.",
          "isCorrect": true
        },
        {
          "text": "Pridoksal Fosfat (PLP - Vitamin B6 türevi)",
          "rationale": "PLP, genellikle amino asit metabolizmasında (transaminasyon) ve Glikojen Fosforilaz enziminde görev alır.",
          "isCorrect": false
        },
        {
          "text": "Koenzim A (Pantotenik Asit - Vitamin B5 türevi)",
          "rationale": "Koenzim A, asetil gibi açil gruplarının (2 karbonlu) transferinde görev alır, ancak Transketolaz'ın koenzimi değildir.",
          "isCorrect": false
        }
      ],
      "hint": "Bu koenzim, PDC ve $α-KGDH$ komplekslerinde de dekarboksilasyon için kritik öneme sahiptir."
    },
    {
      "questionNumber": 26,
      "question": "Memelilerde glikojenin depolandığı iki ana doku aşağıdakilerden hangisidir ve bu dokulardaki temel işlevleri nedir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Beyin (enerji rezervi) ve Böbrek (glukoz atılımı)",
          "rationale": "Beyin çok az glikojen depolar, esas olarak kan glukozuna bağımlıdır. Böbrek glukoneogenez yapsa da ana glikojen deposu değildir.",
          "isCorrect": false
        },
        {
          "text": "Karaciğer (kan glukozunu idame ettirme) ve İskelet Kası (lokal enerji kaynağı)",
          "rationale": "Karaciğer, glukoz-6-fosfataz enzimi sayesinde kan şekerini dengeler. Kas ise glikojeni sadece kendi ani enerji (ATP) ihtiyacı için kullanır.",
          "isCorrect": true
        },
        {
          "text": "Yağ Dokusu (lipogenez için) ve İnce Bağırsak (emilim için)",
          "rationale": "Yağ dokusu yağ depolar, glikojen değil. İnce bağırsak glukozu emer, depolamaz.",
          "isCorrect": false
        },
        {
          "text": "Pankreas (insülin salınımı) ve Eritrositler (oksijen taşıma)",
          "rationale": "Bu dokular glikojen depolamazlar. Eritrositlerin yakıtı sadece glukozdur.",
          "isCorrect": false
        },
        {
          "text": "Karaciğer (lokal enerji kaynağı) ve İskelet Kası (kan glukozunu idame ettirme)",
          "rationale": "Bu roller tam tersidir. Kendi enerjisi için kullanan kas, kan glukozunu idame ettiren karaciğerdir.",
          "isCorrect": false
        }
      ],
      "hint": "Hangi organ kan şekerini sabit tutmakla yükümlüdür ve hangi doku ani hareketler için hızlı enerjiye ihtiyaç duyar?"
    },
    {
      "questionNumber": 27,
      "question": "Glikojen polimerinin yapısında bulunan iki temel glikozidik bağ tipi nedir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "$α-1,4$ (düz zincir) ve $β-1,4$ (dallanma)",
          "rationale": "$β-1,4$ bağı selülozun yapısında bulunur, glikojenin yapısında bulunmaz.",
          "isCorrect": false
        },
        {
          "text": "$α-1,4$ (düz zincir) ve $α-1,6$ (dallanma)",
          "rationale": "Glikojen, $α-1,4$ bağlarıyla uzayan glukoz zincirlerinden ve her 8-12 glukozda bir oluşan $α-1,6$ dallanma noktalarından oluşur.",
          "isCorrect": true
        },
        {
          "text": "$β-1,4$ (düz zincir) ve $α-1,6$ (dallanma)",
          "rationale": "Glikojenin ana zinciri $α-1,4$ bağlarından oluşur, $β-1,4$ değil.",
          "isCorrect": false
        },
        {
          "text": "$α-1,6$ (düz zincir) ve $α-1,4$ (dallanma)",
          "rationale": "Bu bağ tipleri ters verilmiştir. Ana zincir $α-1,4$, dallanma $α-1,6$'dır.",
          "isCorrect": false
        },
        {
          "text": "$α-1,4$ (dallanma) ve $β-1,6$ (düz zincir)",
          "rationale": "Glikojende $β$ tipi bağ bulunmaz ve ana zincir $α-1,4$'tür.",
          "isCorrect": false
        }
      ],
      "hint": "Nişasta (amilopektin) ile aynı bağ tiplerine sahiptir ancak daha sık dallanmıştır."
    },
    {
      "questionNumber": 28,
      "question": "Glikojen sentezi (Glikojenez) sırasında, Glikojen Sentaz enziminin glikojen zincirine eklediği 'aktive edilmiş' glukoz molekülü formu aşağıdakilerden hangisidir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Serbest Glukoz",
          "rationale": "Serbest glukozun polimerizasyonu termodinamik olarak elverişsizdir; önce aktive edilmesi gerekir.",
          "isCorrect": false
        },
        {
          "text": "Glukoz-6-Fosfat",
          "rationale": "Glukoz-6-Fosfat, glikojen sentezinin başlangıç noktasıdır ancak Glikojen Sentaz'ın doğrudan substratı değildir.",
          "isCorrect": false
        },
        {
          "text": "Glukoz-1-Fosfat",
          "rationale": "Glukoz-1-Fosfat, UDP-Glukoz'a dönüştürülmek için kullanılır, ancak kendisi Glikojen Sentaz'ın substratı değildir.",
          "isCorrect": false
        },
        {
          "text": "ATP-Glukoz",
          "rationale": "Aktivasyon ATP ile değil, UTP (Uridin Trifosfat) ile yapılır.",
          "isCorrect": false
        },
        {
          "text": "UDP-Glukoz (Uridin Difosfat Glukoz)",
          "rationale": "Glukoz-1-Fosfat, UTP ile reaksiyona girerek yüksek enerjili bir şeker nükleotidi olan UDP-Glukoz'u oluşturur. Glikojen Sentaz, glukozu bu molekülden transfer eder.",
          "isCorrect": true
        }
      ],
      "hint": "Glikojen sentezi için glukozun bir nükleotid (ATP değil, diğeri) ile aktive edilmesi gerekir."
    },
    {
      "questionNumber": 29,
      "question": "Glikojenin $α-1,4$ düz zincirlerini uzatan ve glikojenezin hız sınırlayıcı enzimi olan enzim hangisidir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Glikojen Fosforilaz",
          "rationale": "Bu enzim glikojen 'yıkımının' (glikojenoliz) hız sınırlayıcı enzimidir.",
          "isCorrect": false
        },
        {
          "text": "Glikojen Sentaz",
          "rationale": "Glikojen Sentaz, UDP-Glukoz'dan glukoz birimlerini alarak $α-1,4$ bağlarıyla mevcut zincirin indirgeyici olmayan ucuna ekler ve zinciri uzatır.",
          "isCorrect": true
        },
        {
          "text": "Dallandırıcı Enzim (Branching Enzyme)",
          "rationale": "Bu enzim, $α-1,6$ bağlarını oluşturarak dallanmayı yapar, ancak ana zinciri uzatmaz.",
          "isCorrect": false
        },
        {
          "text": "Fosfoglukomutaz",
          "rationale": "Bu enzim, G6P ve G1P arasında geri dönüşümlü bir izomerizasyon yapar.",
          "isCorrect": false
        },
        {
          "text": "Glikogenin",
          "rationale": "Glikogenin, glikojen sentezini 'başlatan' (primer) proteindir, zinciri uzatan ana enzim değildir.",
          "isCorrect": false
        }
      ],
      "hint": "Adı üstünde, glikojen 'sentezleyen' enzim."
    },
    {
      "questionNumber": 30,
      "question": "Glikojen yıkımının (Glikojenoliz) hız sınırlayıcı adımı olan $α-1,4$ bağlarının fosforolizini (fosfat ile kırma) katalizleyen enzim hangisidir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Glikojen Sentaz",
          "rationale": "Bu enzim glikojen 'sentezinin' (glikojenez) hız sınırlayıcı enzimidir.",
          "isCorrect": false
        },
        {
          "text": "Glikojen Fosforilaz",
          "rationale": "Glikojen Fosforilaz, glikojen zincirinin indirgeyici olmayan ucuna inorganik fosfat (Pi) ile saldırarak $α-1,4$ bağını kırar ve Glukoz-1-Fosfat salar.",
          "isCorrect": true
        },
        {
          "text": "Dal Bozucu Enzim (Debranching Enzyme)",
          "rationale": "Bu enzim, fosforilazın durduğu dallanma noktalarını (hem $α-1,4$ transferaz hem de $α-1,6$ glukozidaz aktivitesiyle) temizler.",
          "isCorrect": false
        },
        {
          "text": "Glukoz-6-Fosfataz",
          "rationale": "Bu enzim, Glikoz-6-Fosfatı serbest glukoza çevirir, glikojenin kendisini parçalamaz.",
          "isCorrect": false
        },
        {
          "text": "$α-Amilaz$",
          "rationale": "Amilaz, sindirim sisteminde glikojeni (ve nişastayı) hidroliz (su ile kırma) eder, fosforoliz (fosfat ile kırma) yapmaz.",
          "isCorrect": false
        }
      ],
      "hint": "Glikojen 'yıkımının' anahtar enzimi, fosfat kullanarak G1P üreten enzimdir."
    },
    {
      "questionNumber": 31,
      "question": "Dal Bozucu Enzimin (Debranching Enzyme) glikojen yıkımındaki iki enzimatik aktivitesi nedir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Fosforilaz ve Glukozidaz",
          "rationale": "Fosforilaz aktivitesi ayrı bir enzim (Glikojen Fosforilaz) tarafından yürütülür.",
          "isCorrect": false
        },
        {
          "text": "Transferaz ve Glukozidaz",
          "rationale": "Enzim önce (4:4 transferaz aktivitesi ile) 3 glukozluk bir parçayı $α-1,4$ bağıyla başka bir uca taşır, ardından (amilo-1,6-glukozidaz aktivitesi ile) kalan $α-1,6$ bağlı tek glukozu serbest glukoz olarak hidrolizler.",
          "isCorrect": true
        },
        {
          "text": "Sentaz ve Fosfataz",
          "rationale": "Bu aktiviteler glikojen yıkımıyla ilgili değildir; sentaz yapım, fosfataz ise fosfat grubu koparma işi yapar.",
          "isCorrect": false
        },
        {
          "text": "Kinaz ve Transferaz",
          "rationale": "Dal bozucu enzim fosforilasyon (kinaz) yapmaz, hidroliz ve transfer yapar.",
          "isCorrect": false
        },
        {
          "text": "Mutaz ve Glukozidaz",
          "rationale": "Mutaz aktivitesi (örn. Fosfoglukomutaz) fosfat grubunun yerini değiştirir, dal bozucu enzimde bu aktivite yoktur.",
          "isCorrect": false
        }
      ],
      "hint": "Bu enzim, hem $α-1,4$ bağıyla ilişkili bir 'taşıma' hem de $α-1,6$ bağıyla ilişkili bir 'kırma' işlemi yapar."
    },
    {
      "questionNumber": 32,
      "question": "Yüksek kan şekeri (tokluk) durumunda salgılanan İnsülin hormonu, karaciğerde glikojen sentezini (glikojenez) nasıl aktive eder?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Protein Kinaz A'yı (PKA) aktive ederek Glikojen Sentaz'ı fosforiller.",
          "rationale": "PKA, glukagon/epinefrin tarafından aktive edilir ve Glikojen Sentaz'ı fosforilleyerek 'inaktive' eder.",
          "isCorrect": false
        },
        {
          "text": "Glikojen Fosforilazı aktive ederek Glukoz-1-Fosfat üretimini artırır.",
          "rationale": "Bu, glikojen yıkımını (glikojenoliz) hızlandırır ve insülinin etkisinin tam tersidir.",
          "isCorrect": false
        },
        {
          "text": "Protein Fosfataz-1'i (PP-1) aktive ederek Glikojen Sentaz'ın defosforilasyonunu sağlar.",
          "rationale": "İnsülin sinyal yolu, PP-1'i aktive eder. PP-1, Glikojen Sentaz b'yi (inaktif, fosforilli) defosforilleyerek Glikojen Sentaz a'ya (aktif, defosforilli) dönüştürür.",
          "isCorrect": true
        },
        {
          "text": "Glukokinaz enzimini inhibe ederek Glukoz-6-Fosfat oluşumunu yavaşlatır.",
          "rationale": "İnsülin, glukozun hücreye alımını ve fosforilasyonunu (glukokinaz yoluyla) teşvik eder, inhibe etmez.",
          "isCorrect": false
        },
        {
          "text": "cAMP seviyelerini artırarak glikojen yıkımını hızlandırır.",
          "rationale": "cAMP seviyelerini artıran glukagon ve epinefrindir. İnsülin, cAMP seviyelerini düşürür (fosfodiesterazı aktive ederek).",
          "isCorrect": false
        }
      ],
      "hint": "İnsülin 'depolama' hormonudur. Glikojen Sentaz'ın aktif formu fosforilli midir, yoksa defosforilli mi?"
    },
    {
      "questionNumber": 33,
      "question": "Düşük kan şekeri (açlık) durumunda pankreastan salgılanan Glukagon hormonu, karaciğerde glikojen yıkımını (glikojenoliz) nasıl aktive eder?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Protein Fosfataz-1'i (PP-1) aktive ederek Glikojen Fosforilaz'ı defosforiller.",
          "rationale": "PP-1, glikojen yıkımını durduran enzimdir. Glukagon, PP-1'i inhibe eder.",
          "isCorrect": false
        },
        {
          "text": "Glikojen Sentaz'ı aktive ederek glikojen sentezini hızlandırır.",
          "rationale": "Bu, insülinin etkisidir ve glukagonun amacının (kan şekerini yükseltmek) tersidir.",
          "isCorrect": false
        },
        {
          "text": "Adenilat Siklaz'ı aktive ederek cAMP üretimini artırır; bu da Protein Kinaz A'yı (PKA) aktive eder.",
          "rationale": "PKA, Fosforilaz Kinaz'ı fosforiller; o da Glikojen Fosforilaz'ı fosforilleyerek (aktif form 'a') glikojen yıkımını başlatır.",
          "isCorrect": true
        },
        {
          "text": "Glukoz-6-Fosfataz enzimini inhibe ederek glukozun karaciğerde kalmasını sağlar.",
          "rationale": "Glukagonun amacı kan şekerini yükseltmektir; bu nedenle glikojen yıkımından gelen glukozun (G6P -> Glukoz) kana verilmesi gerekir.",
          "isCorrect": false
        },
        {
          "text": "Kas hücresindeki GLUT-4 taşıyıcılarını uyarır.",
          "rationale": "Glukagonun ana hedefi karaciğerdir, kas değil. GLUT-4'ü uyaran insülindir.",
          "isCorrect": false
        }
      ],
      "hint": "Glukagon, 'ikincil haberci' olarak hangi molekülü kullanır ve bu molekül hangi kinazı aktive eder?"
    },
    {
      "questionNumber": 34,
      "question": "Glukagon veya Epinefrin sinyali ile aktive olan Protein Kinaz A (PKA), glikojen metabolizmasını nasıl 'karşılıklı (reciprocal)' olarak düzenler?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Hem Glikojen Sentazı hem de Glikojen Fosforilazı aktive eder.",
          "rationale": "Bu durum, aynı anda hem sentez hem yıkım anlamına gelir ve ATP israfına yol açar.",
          "isCorrect": false
        },
        {
          "text": "Hem Glikojen Sentazı hem de Glikojen Fosforilazı inhibe eder.",
          "rationale": "Bu durum, hormonun 'yıkım' sinyaline aykırıdır.",
          "isCorrect": false
        },
        {
          "text": "Glikojen Sentazı (sentez) fosforilleyerek inaktive eder; Glikojen Fosforilazı (yıkım) ise (Fosforilaz Kinaz üzerinden) fosforilleyerek aktive eder.",
          "rationale": "PKA, sentezi (Glikojen Sentaz) durdurur ve aynı anda yıkımı (Glikojen Fosforilaz) başlatır. Bu, koordine ve karşılıklı bir regülasyondur.",
          "isCorrect": true
        },
        {
          "text": "Glikojen Sentazı defosforilleyerek aktive eder; Glikojen Fosforilazı fosforilleyerek inaktive eder.",
          "rationale": "Bu, PKA'nın değil, Protein Fosfataz-1'in (insülin tarafından aktive edilen) etkisidir.",
          "isCorrect": false
        },
        {
          "text": "Sadece Glikojen Fosforilazı etkiler, Glikojen Sentaz üzerinde etkisi yoktur.",
          "rationale": "PKA, her iki enzimin de regülasyonunda (doğrudan veya dolaylı olarak) rol oynayarak karşılıklı kontrol sağlar.",
          "isCorrect": false
        }
      ],
      "hint": "Açlık/stres (Glukagon/Epinefrin) durumunda PKA aktive olur. Vücudun sentez mi yapması, yoksa yıkım mı yapması gerekir? PKA bu iki zıt yolu nasıl ayarlar?"
    },
    {
      "questionNumber": 35,
      "question": "Karaciğer glikojeni ile kas glikojeninin temel fizyolojik fonksiyonları arasındaki farkı en iyi açıklayan ifade hangisidir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Kas glikojeni sadece anaerobik, karaciğer glikojeni sadece aerobik koşullarda kullanılır.",
          "rationale": "Kas glikojeni hem aerobik hem de anaerobik koşullarda kullanılır. Karaciğer glikojeninin yıkımı da oksijenden bağımsızdır.",
          "isCorrect": false
        },
        {
          "text": "Karaciğer glikojeni kan glukozunu idame ettirmek için kullanılırken, kas glikojeni sadece kasın kendi ATP ihtiyacı için lokal bir enerji deposudur.",
          "rationale": "Karaciğerde Glukoz-6-Fosfataz bulunması, glukozu kana vermesini sağlar. Kasta bu enzim yoktur, bu nedenle G6P glikolize girmek zorundadır.",
          "isCorrect": true
        },
        {
          "text": "Karaciğer glikojeni insülinle, kas glikojeni glukagonla kontrol edilir.",
          "rationale": "Her ikisi de insülinden etkilenir (depolama). Ancak glikojen yıkımı karaciğerde glukagon, kasta ise epinefrin tarafından tetiklenir (kasın glukagon reseptörü yoktur).",
          "isCorrect": false
        },
        {
          "text": "Kas glikojeni dallanmış, karaciğer glikojeni dallanmamış yapıdadır.",
          "rationale": "Her iki glikojen de $α-1,4$ ve $α-1,6$ bağları içeren, yüksek oranda dallanmış polisakkaritlerdir.",
          "isCorrect": false
        },
        {
          "text": "Karaciğer glikojeni yağ asidi sentezi için, kas glikojeni protein sentezi için karbon kaynağı sağlar.",
          "rationale": "Her ikisinin de temel amacı glukoz sağlamaktır (kana veya glikolize).",
          "isCorrect": false
        }
      ],
      "hint": "Hangi dokuda Glukoz-6-Fosfataz enzimi bulunur ve bu enzimin varlığı/yokluğu ne anlama gelir?"
    },
    {
      "questionNumber": 36,
      "question": "Glikolizden gelen piruvatın, TCA döngüsüne girmeden önce Asetil-CoA'ya oksidatif dekarboksilasyonu, ökaryotik hücrede nerede gerçekleşir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Sitozol",
          "rationale": "Sitozolde glikoliz gerçekleşir, ancak piruvatın Asetil-CoA'ya dönüşümü için piruvatın bir organele taşınması gerekir.",
          "isCorrect": false
        },
        {
          "text": "Mitokondriyal iç zar (Inner membrane)",
          "rationale": "İç zar, elektron transport zincirini (ETZ) barındırır, ancak Piruvat Dehidrogenaz Kompleksi (PDC) burada değildir.",
          "isCorrect": false
        },
        {
          "text": "Mitokondriyal matriks",
          "rationale": "Piruvat, sitozolden mitokondriyal matrikse taşınır ve burada devasa Piruvat Dehidrogenaz Kompleksi (PDC) tarafından Asetil-CoA'ya dönüştürülür. TCA enzimleri de buradadır.",
          "isCorrect": true
        },
        {
          "text": "Endoplazmik Retikulum",
          "rationale": "Bu organel, PDC veya TCA döngüsü reaksiyonlarını içermez.",
          "isCorrect": false
        },
        {
          "text": "Mitokondriler arası boşluk (Intermembrane space)",
          "rationale": "Bu boşluk, ETZ sırasında protonların biriktiği yerdir, enzimatik reaksiyonların merkezi değildir.",
          "isCorrect": false
        }
      ],
      "hint": "TCA döngüsü (Krebs) nerede gerçekleşiyorsa, ona yakıt sağlayan bu reaksiyon da orada gerçekleşir."
    },
    {
      "questionNumber": 37,
      "question": "Piruvat Dehidrogenaz Kompleksi (PDC), üç farklı enzimin (E1, E2, E3) bir araya gelmesiyle oluşur ve çalışması için 5 farklı koenzim/kofaktör gerektirir. Aşağıdakilerden hangisi bu 5 koenzimden biri **değildir**?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Tiamin Pirofosfat (TPP)",
          "rationale": "TPP, E1 enziminin (Pruvat Dehidrogenaz) kofaktörüdür ve dekarboksilasyon ( $CO_2$ çıkışı) için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "Lipoik Asit (Lipoamide)",
          "rationale": "Lipoik Asit, E2 enziminin (Dihidrolipoil Transasetilaz) 'sallanan kolu' olarak görev yapar, asetil grubunu ve elektronları taşır.",
          "isCorrect": false
        },
        {
          "text": "Koenzim A (CoA-SH)",
          "rationale": "CoA, E2'den asetil grubunu alarak Asetil-CoA'yı (ürün) oluşturan substrattır.",
          "isCorrect": false
        },
        {
          "text": "FAD (Flavin Adenin Dinükleotid)",
          "rationale": "FAD, E3 enziminin (Dihidrolipoil Dehidrogenaz) kofaktörüdür ve indirgenmiş lipoik asitten elektronları alır.",
          "isCorrect": false
        },
        {
          "text": "Pridoksal Fosfat (PLP)",
          "rationale": "PLP (Vitamin B6), PDC tarafından kullanılmaz. PLP, amino asit metabolizması ve Glikojen Fosforilaz için önemlidir.",
          "isCorrect": true
        }
      ],
      "hint": "Bu kompleksin 5 koenzimi B vitaminlerinden (B1, B2, B3, B5) ve bir diğerinden (Lipoik Asit) türetilir. B6 (PLP) bu grupta yoktur."
    },
    {
      "questionNumber": 38,
      "question": "Piruvatın Asetil-CoA'ya dönüşümü neden metabolik olarak 'geri dönüşümsüz' (irreversible) kabul edilir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Reaksiyonun $ΔG$'si sıfıra yakın olduğu için.",
          "rationale": "Sıfıra yakın $ΔG$, reaksiyonun geri dönüşümlü (reversible) olduğunu gösterir.",
          "isCorrect": false
        },
        {
          "text": "Reaksiyonun mitokondride gerçekleşmesi nedeniyle.",
          "rationale": "Mitokondride geri dönüşümlü reaksiyonlar da (örn. Malat Dehidrogenaz) gerçekleşir. Konum, geri dönüşümsüzlüğü belirlemez.",
          "isCorrect": false
        },
        {
          "text": "Reaksiyon, $CO_2$ çıkışı (dekarboksilasyon) içerir ve $ΔG$'si çok negatiftir.",
          "rationale": "Gaz halindeki $CO_2$'nin salınması, reaksiyonu entropik olarak ileriye iter ve reaksiyonun $ΔG$'si o kadar negatiftir ki, fizyolojik koşullarda geri döndürülemez.",
          "isCorrect": true
        },
        {
          "text": "Reaksiyonun 5 farklı koenzim gerektirmesi nedeniyle.",
          "rationale": "Koenzim sayısı reaksiyonun karmaşıklığını gösterir, termodinamik geri dönüşümsüzlüğünü açıklamaz.",
          "isCorrect": false
        },
        {
          "text": "Memelilerde Asetil-CoA'dan piruvat sentezleyen bir enzim (bypass enzimi) bulunduğu için.",
          "rationale": "Bu ifade yanlıştır; memelilerde Asetil-CoA'dan piruvat yapan bir 'bypass' enzimi yoktur, bu da yağların glukoza net dönüşümünü engeller.",
          "isCorrect": false
        }
      ],
      "hint": "Hangi ürünün reaksiyondan salınması, reaksiyonu geri döndürülmesi çok zor hale getirir? (Le Chatelier prensibini düşünün)."
    },
    {
      "questionNumber": 39,
      "question": "Hücrenin enerji yükü yüksekse (bol ATP, bol NADH, bol Asetil-CoA varsa), Piruvat Dehidrogenaz Kompleksi (PDC) nasıl regüle edilir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "ADP ve Piruvat tarafından allosterik olarak aktive edilir.",
          "rationale": "ADP ve Piruvat, enerji ihtiyacını (düşük enerji yükü) gösterir ve PDC'yi (Kinazı inhibe ederek) aktive eder.",
          "isCorrect": false
        },
        {
          "text": "Ürünleri olan NADH ve Asetil-CoA tarafından allosterik olarak inhibe edilir.",
          "rationale": "Yüksek NADH ve Asetil-CoA (enerji ve yakıt bol sinyali), E2 ve E3 enzimlerini doğrudan (ürün inhibisyonu) ve ayrıca PDC Kinaz'ı aktive ederek (kovalent modifikasyon) kompleksi inhibe eder.",
          "isCorrect": true
        },
        {
          "text": "İnsülin tarafından defosforile edilerek inhibe edilir.",
          "rationale": "İnsülin (tokluk), PDC Fosfataz'ı aktive eder ve PDC'nin defosforile (aktif) olmasını sağlayarak glikolizden gelen piruvatın yağa dönüştürülmesini (Asetil-CoA yoluyla) teşvik eder.",
          "isCorrect": false
        },
        {
          "text": "$Ca^{2+}$ (Kalsiyum) tarafından inhibe edilir.",
          "rationale": "$Ca^{2+}$ (örn. kas kasılması sinyali), enerji ihtiyacını gösterir ve PDC Fosfataz'ı aktive ederek PDC'yi 'aktive' eder.",
          "isCorrect": false
        },
        {
          "text": "Sadece PFK-1 regülasyonuna bağlıdır, kendi regülasyonu yoktur.",
          "rationale": "PDC, glikoliz ile TCA döngüsü arasındaki kilit, geri dönüşümsüz bir kapı olduğu için çok sıkı bir regülasyona tabidir.",
          "isCorrect": false
        }
      ],
      "hint": "Enerji bol olduğunda, hücrenin daha fazla yakıtı (Asetil-CoA) TCA döngüsüne sokması gerekir mi? PDC'nin ürünleri (NADH, Asetil-CoA) enzimi nasıl etkiler?"
    },
    {
      "questionNumber": 40,
      "question": "Sitrat (TCA) Döngüsü'nün ilk reaksiyonu olan Asetil-CoA (2C) ve Oksaloasetat (4C) moleküllerinin birleşerek Sitrat (6C) oluşturması, hangi enzim tarafından katalizlenir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Akonitaz",
          "rationale": "Akonitaz, döngünün ikinci adımıdır ve sitratı izositrata dönüştüren bir izomerazdır.",
          "isCorrect": false
        },
        {
          "text": "İzositrat Dehidrogenaz",
          "rationale": "Bu, döngünün ilk oksidatif dekarboksilasyonunu (NADH ve $CO_2$ üreten) katalizleyen hız sınırlayıcı bir enzimdir.",
          "isCorrect": false
        },
        {
          "text": "Sitrat Sentaz",
          "rationale": "Adı üzerinde, 'Sitrat Sentezleyen' enzim budur. Asetil-CoA ve Oksaloasetatı birleştirerek döngüyü başlatır.",
          "isCorrect": true
        },
        {
          "text": "Piruvat Karboksilaz",
          "rationale": "Bu bir anaplerotik enzimdir; piruvattan oksaloasetat sentezler, ancak TCA döngüsünün bir parçası değildir.",
          "isCorrect": false
        },
        {
          "text": "Malat Dehidrogenaz",
          "rationale": "Bu, döngünün son adımıdır ve oksaloasetatı rejenere (yeniden oluşturur) eder.",
          "isCorrect": false
        }
      ],
      "hint": "Döngüye adını veren molekülü (Sitrat) 'sentezleyen' enzim hangisidir?"
    },
    {
      "questionNumber": 41,
      "question": "Sitrat (TCA) Döngüsü'nün bir turu (1 molekül Asetil-CoA'nın tam oksidasyonu) sonucunda üretilen enerji eşdeğerleri (indirgenmiş koenzimler ve yüksek enerjili fosfat) aşağıdakilerden hangisidir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "1 NADH, 1 FADH2, 1 ATP",
          "rationale": "Bu, üretilen miktardan daha azdır. Döngüde 3 adet NADH üreten dehidrogenaz adımı vardır.",
          "isCorrect": false
        },
        {
          "text": "2 NADH, 2 FADH2, 2 GTP",
          "rationale": "Üretilen NADH sayısı 3, $FADH_2$ sayısı 1'dir.",
          "isCorrect": false
        },
        {
          "text": "3 NADH, 1 FADH2, 1 GTP (veya ATP)",
          "rationale": "İzositrat DH, $α-KGDH$ ve Malat DH 3 NADH üretir. Süksinat DH 1 $FADH_2$ üretir. Süksinil-CoA Sentetaz 1 GTP (substrat düzeyinde) üretir.",
          "isCorrect": true
        },
        {
          "text": "3 NADH, 2 FADH2, 1 GTP",
          "rationale": "$FADH_2$ üreten tek adım Süksinat Dehidrogenaz'dır (1 $FADH_2$).",
          "isCorrect": false
        },
        {
          "text": "4 NADH, 0 FADH2, 2 GTP",
          "rationale": "Hem NADH hem de $FADH_2$ üretilir. NADH sayısı 4 değil 3'tür (PDC'den gelen NADH, döngünün 'içinde' sayılmaz).",
          "isCorrect": false
        }
      ],
      "hint": "Döngüdeki 4 dehidrogenaz reaksiyonunu (3'ü $NAD^+$ kullanır, 1'i FAD kullanır) ve 1 substrat düzeyinde fosforilasyon adımını sayın."
    },
    {
      "questionNumber": 42,
      "question": "TCA döngüsünde Akonitaz enziminin Sitratı İzositrata dönüştürmesinin (izomerizasyon) temel nedeni nedir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Sitratın 6 karbonlu, İzositratın 5 karbonlu olması.",
          "rationale": "Bu bir izomerizasyon reaksiyonudur; her iki molekül de 6 karbonludur. Karbon kaybı (dekarboksilasyon) bir sonraki adımda olur.",
          "isCorrect": false
        },
        {
          "text": "Sitratın bir tersiyer (üçüncül) alkol olması ve oksidasyona (dehidrogenasyon) uygun olmaması.",
          "rationale": "Akonitaz, -OH grubunun yerini değiştirerek tersiyer alkol olan sitratı, bir sonraki adımda dehidrogenaz (İzositrat DH) tarafından oksitlenebilecek bir sekonder (ikincil) alkol olan izositrata dönüştürür.",
          "isCorrect": true
        },
        {
          "text": "Reaksiyonun substrat düzeyinde fosforilasyon için enerji sağlaması.",
          "rationale": "Bu reaksiyon ATP/GTP üretmez veya tüketmez.",
          "isCorrect": false
        },
        {
          "text": "Reaksiyonun döngüdeki ilk $CO_2$'yi salması.",
          "rationale": "$CO_2$ salınımı bir sonraki adımda (İzositrat Dehidrogenaz) gerçekleşir.",
          "isCorrect": false
        },
        {
          "text": "Sitratın allosterik bir inhibitör olması nedeniyle hızla uzaklaştırılması gerekmesi.",
          "rationale": "Sitrat bir inhibitör olsa da (örn. PFK-1), bu izomerizasyonun kimyasal nedeni oksidasyona hazırlıktır.",
          "isCorrect": false
        }
      ],
      "hint": "Tersiyer alkoller (R3-C-OH) kolayca oksitlenebilir mi? Bir sonraki adımın (İzositrat Dehidrogenaz) bir oksidasyon olduğunu unutmayın."
    },
    {
      "questionNumber": 43,
      "question": "TCA döngüsünün hızı, temel olarak hangi iki geri dönüşümsüz (yüksek negatif $ΔG$) oksidatif dekarboksilasyon basamağı tarafından kontrol edilir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Sitrat Sentaz ve Malat Dehidrogenaz",
          "rationale": "Sitrat Sentaz bir kontrol noktasıdır ancak oksidatif dekarboksilasyon yapmaz. Malat Dehidrogenaz geri dönüşümlüdür ($ΔG$ > 0).",
          "isCorrect": false
        },
        {
          "text": "İzositrat Dehidrogenaz ve $α-Ketoglutarat$ Dehidrogenaz",
          "rationale": "Bu iki reaksiyon (3. ve 4. adımlar), döngünün ilk $CO_2$ ve NADH üreten, termodinamik olarak elverişli ve geri dönüşümsüz basamaklarıdır ve ana kontrol noktalarıdır.",
          "isCorrect": true
        },
        {
          "text": "Süksinat Dehidrogenaz ve Fumaraz",
          "rationale": "Bu reaksiyonlar döngünün sonlarına doğrudur ve geri dönüşümlüdürler ( $ΔG$ ≈ 0).",
          "isCorrect": false
        },
        {
          "text": "Süksinil-CoA Sentetaz ve Akonitaz",
          "rationale": "Bu reaksiyonlar (biri GTP üretir, diğeri izomerizasyondur) geri dönüşümlüdür ve ana hız sınırlayıcı adımlar değildir.",
          "isCorrect": false
        },
        {
          "text": "Piruvat Dehidrogenaz ve Sitrat Sentaz",
          "rationale": "Piruvat Dehidrogenaz, döngüye girişi kontrol eder ancak döngünün 'içinde' değildir. Sitrat Sentaz bir kontrol noktası olsa da, soru 'iki oksidatif dekarboksilasyon' basamağını sormaktadır.",
          "isCorrect": false
        }
      ],
      "hint": "Döngüde $CO_2$'nin çıktığı iki reaksiyonu düşünün. Bu reaksiyonlar genellikle hız kontrol noktalarıdır."
    },
    {
      "questionNumber": 44,
      "question": "İzositrat Dehidrogenaz enziminin aktivitesi, hücrenin enerji durumu tarafından nasıl allosterik olarak düzenlenir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Yüksek ATP ve yüksek NADH tarafından aktive edilir.",
          "rationale": "Yüksek ATP ve NADH, 'enerji bol' sinyalidir ve enerji üreten TCA döngüsünü 'inhibe eder', aktive etmez.",
          "isCorrect": false
        },
        {
          "text": "Düşük ADP ve düşük $NAD^+$ tarafından aktive edilir.",
          "rationale": "Düşük ADP 'enerji bol', düşük $NAD^+$ ise 'indirgeyici güç bol' demektir. Her ikisi de inhibisyon sinyalidir.",
          "isCorrect": false
        },
        {
          "text": "Yüksek ADP ve yüksek $Ca^{2+}$ tarafından aktive edilir; yüksek ATP ve yüksek NADH tarafından inhibe edilir.",
          "rationale": "ADP ve $Ca^{2+}$ (enerji ihtiyacı sinyalleri) enzimi aktive eder. ATP ve NADH (enerji bol sinyalleri) enzimi inhibe eder. Bu, metabolik ihtiyaca tam uyan bir regülasyondur.",
          "isCorrect": true
        },
        {
          "text": "Yüksek Sitrat tarafından aktive edilir ve Asetil-CoA tarafından inhibe edilir.",
          "rationale": "Sitrat, bu enzimin substratının (izositrat) öncülüdür ancak ana regülatörler enerji yükü (ATP/ADP) ve redoks durumudur (NADH).",
          "isCorrect": false
        },
        {
          "text": "Sadece kovalent modifikasyon (fosforilasyon) ile düzenlenir, allosterik düzenlenmez.",
          "rationale": "Bu enzim, allosterik regülasyonun (özellikle ADP ve NADH ile) klasik bir örneğidir.",
          "isCorrect": false
        }
      ],
      "hint": "Hücrenin enerjiye (ATP) ihtiyacı varsa (yüksek ADP) bu enzim hızlanmalı mı, yavaşlamalı mı? Enerjisi tamsa (yüksek ATP/NADH) ne olmalı?"
    },
    {
      "questionNumber": 45,
      "question": "TCA döngüsünde, glikolizdekine benzer şekilde, 'substrat düzeyinde fosforilasyon' ile GTP (veya ATP) üreten reaksiyonu hangi enzim katalizler?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Sitrat Sentaz",
          "rationale": "Bu reaksiyon, yüksek enerjili bir tiyoester bağını (Asetil-CoA) 'harcar', GTP üretmez.",
          "isCorrect": false
        },
        {
          "text": "Süksinil-CoA Sentetaz",
          "rationale": "Bu enzim, yüksek enerjili bir tiyoester bağını (Süksinil-CoA) kırar ve bu enerjiyi GDP'yi GTP'ye fosforilemek için kullanır. Bu, substrat düzeyinde fosforilasyondur.",
          "isCorrect": true
        },
        {
          "text": "Süksinat Dehidrogenaz",
          "rationale": "Bu enzim $FADH_2$ üretir, GTP/ATP üretmez.",
          "isCorrect": false
        },
        {
          "text": "$α-Ketoglutarat$ Dehidrogenaz",
          "rationale": "Bu reaksiyon NADH üretir ve yüksek enerjili Süksinil-CoA'yı 'oluşturur', onu kullanıp GTP yapmaz.",
          "isCorrect": false
        },
        {
          "text": "Malat Dehidrogenaz",
          "rationale": "Bu reaksiyon NADH üretir, GTP/ATP üretmez.",
          "isCorrect": false
        }
      ],
      "hint": "Döngüde yüksek enerjili bir tiyoester (~S-CoA) bağının kırıldığı ve GDP'nin kullanıldığı adımı arayın."
    },
    {
      "questionNumber": 46,
      "question": "Radyoaktif olarak $C_1$'den (karbonil karbonu) işaretlenmiş Asetil-CoA ($CH_3-^{14}CO-SCoA$) TCA döngüsüne girerse, döngünün **ilk turu** tamamlandığında radyoaktif işaret ($^{14}C$) hangi molekülün yapısında bulunur?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Salınan $CO_2$ moleküllerinde",
          "rationale": "İlk turda salınan iki $CO_2$ molekülü, Asetil-CoA'dan değil, döngüye giren Oksaloasetat'ın karboksil gruplarından gelir.",
          "isCorrect": false
        },
        {
          "text": "Oksaloasetat'ın karboksil gruplarında ($C_1$ veya $C_4$)",
          "rationale": "İşaretli karbon, simetrik bir ara ürün olan Süksinat oluşana kadar izlenir. Süksinat simetrik olduğu için, işaret Oksaloasetatın C1 ve C4 karboksilleri yerine C2 ve C3 karbonlarına dağılır.",
          "isCorrect": false
        },
        {
          "text": "Oksaloasetat'ın merkezi karbonlarında ($C_2$ veya $C_3$)",
          "rationale": "Asetil-CoA'nın karboksil karbonu (C1), Sitratın C2'si (karboksil) olur, bu da $α-KGDH$ reaksiyonundan sonra Süksinil-CoA'nın karboksili olur. Simetrik Süksinat nedeniyle, bu işaret Oksaloasetatın C2 ve C3'üne dağılır. *Düzeltme: Asetil-CoA'nın karboksil karbonu (C1), Sitratın pro-S kolunun C1'i (karboksil) olur. Bu, $α-KGDH$'da $CO_2$ olarak çıkmaz. Süksinil-CoA'nın C4'ü (karboksil) olur. Süksinat simetrik olduğu için bu C4 işareti, Oksaloasetatın C1 ve C4 karboksillerine dağılır.*",
          "isCorrect": false
        },
        {
          "text": "Radyoaktif işaretin tamamı ilk turda kaybolur.",
          "rationale": "Asetil-CoA'dan gelen karbonlar ilk turda $CO_2$ olarak kaybolmaz, döngüde kalır.",
          "isCorrect": false
        },
        {
          "text": "Süksinil-CoA ve Oksaloasetat'ın karboksil gruplarında (işaret $CO_2$ olarak salınmaz)",
          "rationale": "Asetil-CoA'nın karboksil karbonu, $α-Ketoglutarat$'ın C5'i (karboksil) ve Süksinil-CoA'nın C4'ü (karboksil) olur. Bu karbon $CO_2$ olarak salınmaz. Simetrik süksinat nedeniyle, bu işaret bir sonraki Oksaloasetat'ın C1 ve C4 (karboksil) pozisyonlarına %50-%50 dağılır.",
          "isCorrect": true
        }
      ],
      "hint": "Asetil-CoA'dan gelen karbonların, döngünün ilk turunda $CO_2$ olarak salınıp salınmadığını ve simetrik ara ürün olan Süksinat'ın etkisini düşünün."
    },
    {
      "questionNumber": 47,
      "question": "TCA döngüsü, hem katabolik (yıkım) hem de anabolik (yapım) yollara hizmet ettiği için 'amfibolik' bir yol olarak adlandırılır. Aşağıdakilerden hangisi döngünün anabolik fonksiyonuna bir örnektir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Asetil-CoA'nın $CO_2$'ye oksitlenmesi.",
          "rationale": "Bu, döngünün ana katabolik (yıkım ve enerji üretimi) fonksiyonudur.",
          "isCorrect": false
        },
        {
          "text": "NADH ve $FADH_2$ üretimi.",
          "rationale": "Bu, döngünün katabolik fonksiyonunun (enerji eldesi) bir parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "Ara ürün olan Oksaloasetat'ın glukoneogenez (glukoz sentezi) için kullanılması.",
          "rationale": "Oksaloasetatın döngüden 'çekilerek' glukoz gibi yeni bir molekülün 'yapımında' kullanılması (anabolizma), döngünün amfibolik doğasını gösterir.",
          "isCorrect": true
        },
        {
          "text": "Yağ asidi yıkımından (beta-oksidasyon) gelen Asetil-CoA'nın döngüye girmesi.",
          "rationale": "Bu, döngüye yakıt girmesidir (katabolik).",
          "isCorrect": false
        },
        {
          "text": "Piruvatın laktata dönüştürülmesi.",
          "rationale": "Bu reaksiyon (fermantasyon) TCA döngüsünün bir parçası değildir.",
          "isCorrect": false
        }
      ],
      "hint": "Amfibolik, 'her iki yöne de çalışan' demektir. Döngüden hangi ara ürünler 'yapım' reaksiyonları için 'çalınır'?"
    },
    {
      "questionNumber": 48,
      "question": "TCA döngüsü ara ürünlerinin biyosentetik yollar için 'çekilmesi' reaksiyonlarına 'kataplerotik' reaksiyonlar denir. Aşağıdakilerden hangisi bir kataplerotik reaksiyon örneği **değildir**?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Sitrat'ın sitozole taşınarak yağ asidi sentezi için Asetil-CoA sağlaması.",
          "rationale": "Bu, döngüden sitratın çekildiği (kataplerotik) ve anabolizmada (yağ sentezi) kullanıldığı klasik bir örnektir.",
          "isCorrect": false
        },
        {
          "text": "$α-Ketoglutarat$'ın transaminasyon ile Glutamat amino asidine dönüşmesi.",
          "rationale": "Bu, döngüden $α-Ketoglutarat$'ın çekildiği (kataplerotik) ve amino asit sentezinde (anabolizma) kullanıldığı bir örnektir.",
          "isCorrect": false
        },
        {
          "text": "Süksinil-CoA'nın porfirin (hem) sentezi için kullanılması.",
          "rationale": "Bu, döngüden Süksinil-CoA'nın çekildiği (kataplerotik) ve hem sentezinde (anabolizma) kullanıldığı bir örnektir.",
          "isCorrect": false
        },
        {
          "text": "Oksaloasetat'ın Aspartat amino asidine dönüşmesi.",
          "rationale": "Bu, döngüden Oksaloasetatın çekildiği (kataplerotik) ve amino asit/pürin/pirimidin sentezinde (anabolizma) kullanıldığı bir örnektir.",
          "isCorrect": false
        },
        {
          "text": "Piruvatın Piruvat Dehidrogenaz (PDC) ile Asetil-CoA'ya dönüştürülmesi.",
          "rationale": "Bu reaksiyon, TCA döngüsüne 'giriş' sağlar; döngüden bir ara ürün 'çekmez'.",
          "isCorrect": true
        }
      ],
      "hint": "Kataplerotik, döngüyü 'boşaltan' (çeken) anlamına gelir. Hangi seçenek döngüyü 'dolduran' (besleyen) bir reaksiyondur?"
    },
    {
      "questionNumber": 49,
      "question": "Biyosentez (anabolizma) için TCA döngüsünden ara ürünler çekildiğinde (kataplerotik), döngünün durmasını engellemek için bu ara ürünleri yenileyen 'anaplerotik' (doldurma) reaksiyonlar gerekir. Memeli karaciğerindeki en önemli anaplerotik reaksiyon hangisidir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Piruvatın Asetil-CoA'ya dönüşümü (PDC)",
          "rationale": "Asetil-CoA, döngüye giren yakıttır, ancak döngüdeki ara ürün miktarını (örn. Oksaloasetat) net olarak artırmaz, çünkü döngüde 2 karbonu da $CO_2$ olarak kaybedilir.",
          "isCorrect": false
        },
        {
          "text": "Piruvatın Piruvat Karboksilaz ile Oksaloasetat'a dönüştürülmesi.",
          "rationale": "Bu reaksiyon, 3 karbonlu piruvata $CO_2$ ekleyerek 4 karbonlu bir TCA ara ürünü (Oksaloasetat) oluşturur. Bu, döngüyü 'dolduran' ana reaksiyondur.",
          "isCorrect": true
        },
        {
          "text": "Glutamatın $α-Ketoglutarat$'a transaminasyonu.",
          "rationale": "Bu bir anaplerotik reaksiyon örneğidir (amino asit yıkımından), ancak genellikle Piruvat Karboksilaz en önemli ve en çok düzenlenen anaplerotik reaksiyon olarak kabul edilir.",
          "isCorrect": false
        },
        {
          "text": "Fumaratın Malata dönüşümü (Fumaraz)",
          "rationale": "Bu, TCA döngüsünün kendi içindeki bir adımdır; dışarıdan bir ara ürün eklemez.",
          "isCorrect": false
        },
        {
          "text": "Asetil-CoA'nın Sitrata dönüşümü (Sitrat Sentaz)",
          "rationale": "Bu reaksiyon, döngüye giren Asetil-CoA'yı mevcut Oksaloasetat ile birleştirir; Oksaloasetat miktarını 'artırmaz'.",
          "isCorrect": false
        }
      ],
      "hint": "Döngüdeki 4-karbonlu ara ürün (Oksaloasetat) glukoneogenez için çekilirse, bu 4-karbonlu ara ürünü 3-karbonlu bir öncülden (Piruvat) hangi enzim 'doldurur'?"
    },
    {
      "questionNumber": 50,
      "question": "Piruvat Karboksilaz enziminin (anaplerotik) aktivitesi, Asetil-CoA tarafından güçlü bir şekilde allosterik olarak aktive edilir. Bu regülasyonun metabolik mantığı nedir?",
      "imageUrl": "",
      "answerOptions": [
        {
          "text": "Asetil-CoA, enerji azlığını gösterir ve piruvatın yakılmasını (TCA) yavaşlatır.",
          "rationale": "Asetil-CoA, (özellikle yağ asidi yıkımından geliyorsa) 'yakıt bolluğunu' gösterir, enerji azlığını değil.",
          "isCorrect": false
        },
        {
          "text": "Asetil-CoA, piruvatın glikolizden geldiğini gösterir ve glikolizi hızlandırır.",
          "rationale": "Asetil-CoA, PDC'yi inhibe ederek piruvatın glikolizden gelmesini yavaşlatır.",
          "isCorrect": false
        },
        {
          "text": "Asetil-CoA, TCA döngüsüne girmek için Oksaloasetat'a (OAA) ihtiyaç duyar; eğer OAA azsa (örn. glukoneogenez için çekilmişse), Asetil-CoA birikir ve kendi 'partneri' olan OAA'nın piruvattan sentezlenmesini aktive eder.",
          "rationale": "Bu, 'ileri besleme aktivasyonu'nun (feed-forward) mükemmel bir örneğidir. Asetil-CoA (yakıt), döngüye girebilmek için Oksaloasetat (taşıyıcı) miktarının yeterli olmasını garanti altına alır.",
          "isCorrect": true
        },
        {
          "text": "Asetil-CoA, yağ asidi sentezinin yavaşladığını gösterir ve piruvatın yağ sentezine yönlenmesini sağlar.",
          "rationale": "Asetil-CoA'nın Piruvat Karboksilazı aktive etmesi, OAA üretimini artırır; bu durum glukoneogenezi (Asetil-CoA'nın enerji sağlamasıyla) veya TCA döngüsünü destekler.",
          "isCorrect": false
        },
        {
          "text": "Asetil-CoA, glukoneogenezi inhibe etmek için Oksaloasetat üretimini durdurur.",
          "rationale": "Tam tersine, Asetil-CoA, glukoneogenez için Oksaloasetat (ve enerji) sağlayan bir sinyal olarak Piruvat Karboksilazı aktive eder.",
          "isCorrect": false
        }
      ],
      "hint": "TCA döngüsünün ilk adımı (Sitrat Sentaz) iki substrat gerektirir: Asetil-CoA ve Oksaloasetat. Substratlardan biri (Asetil-CoA) birikirse, diğer substratın (Oksaloasetat) üretimi için ne yapmalıdır?"
    }
  ];
