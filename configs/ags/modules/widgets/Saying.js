import { Widget } from "../utils/imports.js";

const words_dict = [
    "لِتبرَأ الرُّوح مِن ضِيقٍ ومِن كَدَرٍ - ويَبْرأ الجِسْمُ مِن وَهْنٍ ومِن سَغَبِ",
    "لَكَم نُغالِبُ في الأيّامِ مِن كَبَدٍ - نَظُنُّ أنّ هَنَاء العَيْشِ في الغَلَبِ",
    "إلى حتفي مَشَتْ قدمي.",
    "اليوم خمر وغداً أمر.",
    "تجري الرياح بما لا تشتهي السفن.",
    "حنانيك بعض الشر أهون من بعض.",
    "رُبَّ دهر بكيت منه فلما صرت في غيره بكيت عليه.",
    "رُبَّ ملوم لا ذنب له.",
    "قُتل رحمه الله” خير من “فر أخزاه الله”.",
    "أخاك أخاك إن مَنْ لا أخاً له كَساعٍ إلى الهيجا بغير سلاح.",
    "أخوك من صدقك النصيحة.",
    "إذا غامَرْتَ في شرف مروم فلا تقنع بما دون النجوم.",
    "إذا لم يكن إلا الأَسِنَّةُ مركباً فلا رأي للمضطر إلا ركوبها.",
    "السعادة والرضا أدوات تجميل عظيمة، وأدوات خادعة لحفظ مظهر الشباب.",
    "تزيين الجسم أسرع من تزيين النفس.",
    "ليست البقرة الأقوى خواراً، هي البقرة الأكثر مدراراً.",
    "من لا يعرف التصنع لا يعرف العيش.",
    "ما فائدة الدنيا الواسعة، إذا كان حذاؤك ضيقاً.",
    "الدعوة للحرية ليس معناها دعوة للإنفلات والفوضى والهمجية الحرية قيمة عظيمة ولكن القاعدة: أنت حر ما لم تضر.",
    "إذا كانت الحرية ضعيفة التسليح فعلينا تسليحها بقوة الارادة.",
    "استقبال الموت خير من استدباره.",
    "أكرم نفسك عن كل دنيء.",
    "الإفراط في التواضع يجلب المذلة.",
    "الجود بالنفس أقصى غاية الجود.",
    "السيف أهول ما يُرى مسلولاً.",
    "العز في نواصي الخيل.",
    "القَصَّابُ لا تهوله كثرة الغنم.",
    "إن البعوضة تُدْمي مُقْلةَ الأسد.",
    "إن الجبان حتْفُه من فوقه.",
    "إن القذى يؤذي العيون قليله ولربما جرح البعوض الفيلا.",
    "أنا لها ولكل عظيمة.",
    "بنفسي فَخَرْتُ لا بجدودي.",
    "تجوع الحرة ولا تأكل بثدييها.",
    "تعدو الذئاب على من لا كلاب له وتتقي صولة المستنفر الحامي.",
    "ذل من لا سيف له.",
    "عش عزيزاً أو مت وأنت كريم.",
    "رُبَّ نعل شر من الحفا.",
    "سحابة صيف تذروها الرياح عند الصباح يحمد القوم السرى.",
    "في فمي ماء وهل ينطق من في فمه ماء.",
    "لا تشكون إلى خلق فتشمته شكوى الجريح إلى الغربان والرخم.",
    "فرخ البط عوام.",
    "من شابه أباه فما ظلم.",
    "هذا الشبل من ذاك الأسد.",
    "كلما ارتفع الشريف تواضع، وكلما ارتفع الوضيع تكبر.",
    "لا حسب كالتواضع ولا شرف كالعلم.",
    "إذا وجد المؤمن الصحيح وجدت معه أسباب النجاح جميعاً.",
    "المؤمن إذا جاع صبر وإذا شبع شكر.",
    "المؤمن غر كريم والفاجر خب لئيم.",
    "يجب أن أخترع نظاماً وإلا فسيستعبدني نظام رجل أخر.",
    "حيث النظام نجد الطعام حيث الفوضى تجد الجوع.",
    "أفضل وسيلة لتدمير النظام الرأسمالي هو إفساد قيمة المال.",
    "الأدارة تعمل من خلال النظام أما القيادة فتعمل فوق النظام.",
    "الزينة الجميلة تغطي لحماً هزيلاً.",
    "ليست الحرية غياب الالتزامات انما هي القدرة على أختيار ما هو أفضل لي وإلزام نفسي به.",
    "الحياة ليست عادلة، فلتعود نفسك على ذلك.",
    "في المدرسة يعلمونك الدرس ثم يختبرونك، أما الحياة فتختبرك ثم تعلمك الدرس.",
    "لا تكن رأساً فالرأس كثير الأذى.",
    "لا كرامة لنبيّ في وطنه.",
    "إذا أنت لم تشرب مراراً على القذى ظمئت وأي الناس تصفو مشاربه.",
    "إذا كان الصبر مُرًّاً فعاقبته حلوة.",
    "اصبر تنل.",
    "اصبر قليلاً فبعد العسر تيسير وكل أمر له وقت وتدبير.",
    "اصبر لكل مُصِيبةٍ وتجلًّدِ واعلم بأن الدهر غير مُخَلَّدِ.",
    "الأيام دول. التأني من الرحمن والعجلة من الشيطان.",
    "الجزع عند المصيبة مصيبة.",
    "الرمد أهون من العمى.",
    "الصبر صبران: صبر على ما تكره وصبر على ما تحب.",
    "الصبر عند الصدمة الأولى.",
    "الصبر مفتاح الفرج.",
    "إن السماء تُرْجَى حين تحتجب.",
    "إن الله يمهل ولا يهمل.",
    "إن غداً لناظره قريب.",
    "إن مع اليوم غداً يا مسعدة.",
    "أنا الغريق فما خوفي من البلل. بالتأني تُدْرَكُ الفُرَصُ.",
    "لكل حي أجل.",
    "لكل داء دواء.",
    "إذا ذكرت الذئب فخذ الحذر.",
    "آخر الحياة الموت.",
    "إذا قل ماء الوجه قل حياؤه، ولا خير في وجه إذا قل ماؤه.",
    "إذا حان القضاء ضاق الفضاء.",
    "إذا سلمت من الأسد فلا تطمع في صيده.",
    "إذا ظلمت من دونك فلا تأمن عقاب من فوقك.",
    "إذا قصرت يدك عن المكافأة فليصل لسانك بالشكر.",
    "إذا كان الكلام من فضة فالسكوت من ذهب.",
    "بعض الحلم ذل.",
    "يد واحدة لا تحمل بطيختين.",
    "خذوا الحكمة من أفواه البسطاء.",
    "ما كلُّ ما يُعلم يُقال.",
    "اجلس حيث يُؤْخَذُ بيدك وَتُبَرُّ ولا تجلس حيث يؤخذ برجلك وتُجَرُّ.",
    "أَحْسِنْ إلى الناس تستعبد قلوبهم. إذا تم العقل نقص الكلام.",
    "كل غريب للغريب نسيب.",
    "ابذل لصديقك دمك ومالك.",
    "غبن الصديق نذالة.",
    "احذر عدوك مرة وصديقك ألف مرة فإن انقلب الصديق فهو أعلم بالمضرة.",
    "آخ الأْكْفاءَ وداه الأعداء.",
    "أخوك من صَدَقك لا من صدّقك.",
    "خير الإخوان أقدمهم.",
    "إذا صُنْتَ المودة كان باطنها أحسن من ظاهرها.",
    "إذا كنت في كل الأمور معاتباً صديقك لم تلق الذي لا تعاتبه.",
    "اعرف صاحبك واتركه.",
    "الإمارة حلوة الرضاع مُرَّةُ الفطام.",
    "الجار أولى بالشُّفْعَةِ.",
    "الجار قبل الدار.",
    "الصديق إما أن ينفع وإما أن يشفع.",
    "الصديق وقت الضيق.",
    "العتاب هدية الأحباب.",
    "الغائب عُذْرُه معه.",
    "في سعة الأخلاق كنوز الأرزاق.",
    "كن مخلصاً في عملك تبلغ أقصى أملك.",
    "الغريق يتمسك بقشة.",
    "أنفق ما في الجيب، يأتيك ما في الغيب.",
    "من أدب ولده صغيراً سر به كبيراً.",
    "أجلد السرج لكي تحمل الحمار على التفكير.",
    "من أنهكني علمني القوة.",
    "من شب على شيء شاب عليه.",
    "في التأني السلامة وفي العجلة الندامة.",
    "العجول مخطيء ولو ملك، والمتأني مصيب وإن هلك.",
    "من أسرع كثر عثاره.",
    "من تأنى نال ما تمنى.",
    "الخطأ زاد العجول.",
    "بالتأني تسهل المطالب.",
    "من ركب العجلة أدركه الزلل.",
    "ما طار طير وارتفع إلا كما طار وقع.",
    "لا يتكبر إلا كل وضيع، ولا يتواضع إلا كل رفيع.",
    "اللهم قني شر أصدقائي أما أعدائي فأنا كفيل بهم.",
    "الناس لبعضها.",
    "الوَحْدَةُ خير من جليس السوء.",
    "إن أخاك من واساك.",
    "إذا زل العالِمُ زل بزلته عالَمٌ.",
    "إذا ضربت فأوجع فإن الملامة واحدة.",
    "إذا كنت ذا رأي فكن ذا عزيمة.",
    "إذا نُصِرَ الرأي بطل الهوى.",
    "أرسل حكيماً ولا توصه.",
    "اشتدي يا أزمة تنفرجي.",
    "أشد الجهاد مجاهدة الغيظ.",
    "أشد الفاقة عدم العقل.",
    "السعادة صحة جيدة وذاكرة سيئة.",
    "اخطب لبنتك ولا تخطب لابنك.",
    "أكبر منك بيوم يعرف عنك بسنة.",
    "الأم مدرسة إذا أعددتها أعددت شعباً طيب الأعراق.",
    "البطن لا تلد عدواً.",
    "التجارب ليست لها نهاية والمرء منها في زيادة.",
    "التجربة العلم الكبير.",
    "العبد يقرع بالعصا والحر تكفيه الإشارة.",
    "العتب على النظر.",
    "العلم زين فكن للعلم مكتسباً وكن له طالبًا ما عشت مقتبسا.",
    "العلم يجدي ويبقى للفتى أبدا والمال يفنى وإن أجدى إلى حين.",
    "العلم يرفع بيتاً لا عماد له والجهل يهدم بيت العز والشرف.",
    "القرد في عين أمه غزال.",
    "الكتاب يقرأ من عنوانه.",
    "إذا دببت على المنسأة من هرم فقد تباعد عنك اللهو والغزل.",
    "إذا عُرِفَ السبب بطل العجب.",
    "وإذا كانت النفوس كباراً تعبت في مرادها الأجسام.",
    "اطلب من العلوم علماً ينفعك ينفي الأذى والعيب ثم يرفعك.",
    "أعدل الشهود التجارب.",
    "أعز من الولد ولد الولد.",
    "أعز مكان في الدنا سرج سابح وخير جليس في الزمان كتاب.",
    "خادم سيدين يكذب على أحدهما.",
    "إذا سمعت الرجل يقول فيك من الخير ما ليس فيك فلا تأمن أن يقول فيك من الشر ما ليس فيك.",
    "أذل البخل أعناق الرجال.",
    "أرى كل إنسان يرى عيب غيره ويعمى عن العيب الذي هو فيه.",
    "أساء سمعاً فأساء إجابة.",
    "أسد عليَّ وفي الحروب نعامة.",
    "أعلمه الرماية كل يوم فلما أشتد ساعِدُهُ رماني.",
    "أغنى الأغنياء من لم يكن للبخل أسيراً.",
    "آفة الحديث الكذب. أقل الناس سروراً الحسود.",
    "أكلوا خيري وعصوا أمري.",
    "البخيل عظيم الرواق صغير الأخلاق.",
    "البخيل غناه فقر ومطبخه قفر.",
    "البخيل لا تَبُلُّ إحدى يديه الأخرى.",
    "اجتنب مصاحبة الكذاب فإن اضطررت إليه فلا تُصَدِّقْهُ.",
    "أجهل الناس من كان على السلطان مدلاً وللإخوان مذلاً.",
    "أحضر الناس جواباً من لم يغضب.",
    "اختلط حابلهم بنابلهم.",
    "إذا تفرقت الغنم قادتها العنز الجرباء.",
    "إذا ساء فعل المرء ساءت ظنونه وَصَدَّقَ ما يعتاده من توهم.",
    "إذا سأل ألحف وإن سئل سوّف.",
    "احفر بئراً وَطُمَّ بئراً ولا تُعَطِّلْ أجيرا.",
    "احفظ قرشك الأبيض ليومك الأسود.",
    "إذا كنت سنداناً فاصبر وإذا كنت مطرقة فأوجع.",
    "إذا هَبَّتْ رياحك فاغتنمها.",
    "استر عورة أخيك لما يعلمه فيك.",
    "اشكر من أَنْعَمَ عليك وأَنْعِمْ على من شكرك.",
    "اِضْرِبْ ما دام الحديد حامياً.",
    "اعقلها وتوكل.",
    "اعمل الطيب وارمه البحر.",
    "أفضل الجود أن تبذل من غير مسألة.",
    "أقلل عتابك فالبقاء قليل والدهر يعدل تارة ويميل.",
    "وانهض فوراً مستبشراً ، فتلك هي أولى درجات النجاح.",
    "عندما يرن الهاتف ابتسم وأنت تتلقى السماعة، فإن محدثك على الطرف الآخر سيرى ابتسامتك من خلال نبرات صوتك.",
    "تزوج من تجيد المحادثة، فعندما يتقدم بك العمر ستعرف أهمية ذلك، عندما يصبح الحديث مع من تحب قمة أولوياتك واهتماماتك.",
    "إذا أحببت شخصاً فاذهب إليه وقل إنك تحبه ، إلّا إذا كنت لا تعني ما تقول فعلاً ! لأنه سيعرف الحقيقة بمجرد النظر في عينيك.",
    "لا تتردد في أن تتأسف لمن أخطأت في حقه ، وانظر لعينيه وأنت تنطق بكلمات الاعتذار ، ليقرأها في عينيك وهو يسمعها بأذنيه.",
    "لا تحكم على شخص من أقربائه فقط ، فالإنسان لم يختر والديه ، فما بالك بأقربائه.",
    "عندما لا تريد الإجابة على سؤال ، فابتسم للسائل قائلاً: هل تعتقد أنه فعلاً من المهم.",
    "لا تدع الأشياء الصغيرة تدمر صداقتك الغالية مع الآخرين ، فالصداقة الحقيقية تاج على رؤوس البشر ، لا يدركه إلا سكان الجدران الخالية والقلوب الخاوية.",
    "لا تسخر من الآخرين وأحلامهم الوردية الجميلة ، خاصة من تعتقد أنهم أقل منك من البسطاء الطيبين ، فلربما تكون منزلة خادمك عند الله أسمى وأرفع منك ومن كثير من علياء القوم ، وقد تحظى بشفاعتهم يوم القيامة، ولا تقلل من شأن الأحلام ، فالدنيا بدونها رحلة جافة ومملة مهما يكن الواقع جميلا.",
    "فكر كثيراً ، واستنتج طويلا ، وتحدث قليلاً، ولا تهمل كل ما تسمعه ! فمن المؤكد أنك ستحتاجه في المستقبل.",
    "من يغرق يتعلق بعود قش.",
    "أعزب دهر ولا أرمل شهر.",
    "اعطني عمر وارميني بالبحر.",
    "ألا كل ما هو آت قريب وللأرض من كل حي نصيب.",
    "الحصاة من الجبل.",
    "الصباح رباح.",
    "العمر واحد والرب واحد.",
    "المأمول خير من المأكول.",
    "أول الشجرة بذرة.",
    "البعيد عن العين بعيد عن القلب.",
    "الحب أعمى.",
    "من أحب ولده رحم الأيتام.",
    "القلوب عند بعضها.",
    "إن العيون التي في طرفها حور قتلننا ثم لم يحيين قتلانا يَصرَعْنَ ذا اللب حتى لا حراك به وهن أضعف خلق الله إنسانا.",
    "أول الشجرة بذرة.",
    "ربك رب قلوب.",
    "فإن قليل الحب بالعقل صالح وإن كثير الحب بالجهل فاسد.",
    "لا تخف ما صنعت بك الأشواق .. واشرح هواك فكلنا عشاق.",
    "مرآة الحب عمياء.",
    "من القلب للقلب رسول.",
    "رب بعيد أنفع من قريب.",
    "فيا ليت الشباب يعود يوماً فأخبره بما فعل المشيب.",
    "كلكم طلب صيد.",
    "ما أبعد ما فات وما أقرب ما يأتي.",
    "ما كل ما يتمنى المرء يدركه تجرى الرياح بما لا تشتهي السفن.",
    "كل حبل على غاربه.",
    "ما أشبه الليلة بالبارحة.",
    "أثقل من جبل.",
    "أحذر من غراب.",
    "أحرس من كلب.",
    "أدنى من حبل الوريد.",
    "أرخص من التمر في البصرة.",
    "أسرع من الريح.",
    "أقرب من اللسان للأسنان.",
    "البعد جفاء.",
    "البياض نصف الحسن.",
    "الماء أهون موجود وأعز مفقود.",
    "المتكبر كالواقف على الجبل يرى الناس صغاراً ويرونه صغيراً.",
    "أتبع من الظل.",
    "إنه أشبه به من التمرة بالتمرة.",
    "سارت به الرُّكْبانُ.",
    "عاد الأمر إلى نصابه.",
    "فالوجه مثل الصبح مبيض والشعر مثل الليل مسود.",
    "فما تحمد العينان كل بشاشة ولا كل وجه عابس بذميم.",
    "لسان المرء من خدم الفؤاد.",
    "صاحب الحق عينه قوية.",
    "على الباغي تدور الدوائر.",
    "كما تدين تدان.",
    "لا يَفُلُّ الحديد إلا الحديد.",
    "من عَفَّ عن ظلم العباد تورعاً جاءته ألطاف الإله تبرعا.",
    "هذه بتلك والبادئ أظلم.",
    "هي النفس ما حَمَّلْتَها تتحمل وللدهر أيام تجور وتَعْدِلُ.",
    "ما أشبه الليلة بالبارحة.",
    "من يخشى البلل لا يصطاد السمك.",
    "معظم النار من مستصغر الشرر.",
    "اترك الشر يتركك.",
    "احذر الأحمق واحذر وُدَّهُ إنما الأحمق كالثوب الْخَلَق.",
    "احذروا من لا يرجى خيره ولا يؤمن شره.",
    "إذا جاء الحين حارت العين.",
    "إذا ذكرت الذئب فأعد له العصا.",
    "إذا رأيت نيوب الليث بارزة فلا تظنن أن الليث يبتسم.",
    "إذا كنتَ ذا رأىٍ فكن ذا مشورة فإن فساد الرأي أن تترددا.",
    "أعدّوا لكلب السوء كلباً يعادله.",
    "أقلل طعامك تجد منامك.",
    "الدهر يومان حلو ومر.",
    "اللي يخاف من العفريت يطلع له.",
    "إن الجواد قد يعثر.",
    "إن الشفيق بسوء ظن مولع.",
    "إن كنت ريحاً فقد لاقيت إعصارا.",
    "إن وراء الأَكَمةِ ما وراءها.",
    "خُذْهُ بالموت حتى يرضى بالحُمَّى.",
    "راحت السكرة وجاءت الفكرة.",
    "ستبدي لك الأيام ما كنت جاهلاً.",
    "قد يخرج من الصدفة غير الدُّرَّة.",
    "أَدّى قدراً مستعيرها.",
    "إذا أتاك أحد الخصمين وقد فُقِئَتْ عينه فلا تقض له حتى يأتيك خصمه فلعله قد فُقِئَتْ عيناه.",
    "إذا تولى عقداً أحكامه.",
    "الجزاء من جنس العمل.",
    "الحق دولة والباطل جولة.",
    "الرجوع إلى الحق خير من التمادي في الباطل.",
    "العاقل لا يبطل حقاً ولا يحق باطلاً.",
    "العدل أساس الْمُلْك.",
    "العين بالعين والسن بالسن.",
    "إذا أردت أن تطاع فأمر بما يستطاع.",
    "إذا المرء لم يدنس من اللؤم عرضه فكل رداء يرتديه جميل.",
    "إذا أنت أكرمت الكريم ملكته وإن أنت أكرمت اللئيم تمردا.",
    "كفى المرء فضلاً أن تُعَدَّ معايبه.",
    "إذا حضر الماء بطل التيمم.",
    "اذالم تستحي فأفعل ما تشاء.",
    "أطهر الناس أعراقاً أحسنهم أخلاقاً.",
    "أعرف الناس بالله أرضاهم بما قسم الله له.",
    "اعف عما أغضبك لما أرضاك.",
    "أفضل الجود العطاء قبل الموعد.",
    "الْبِشْرَ دال على الكرم.",
    "التكبر على المتكبر تواضع.",
    "التواضع من مصائد الشرف.",
    "الجودة من الموجودة.",
    "الحر تكفيه الإشارة.",
    "الحِلْمُ سيد الأخلاق.",
    "الدال على الخير كفاعله.",
    "الرفق بالجاني عتاب.",
    "السر أمانة.",
    "الشريف إذا تَقَوَّى تواضع والوضيع إذا تَقَوَّى تكبر.",
    "الناس الذين غيروا العالم هم الناس الذين واصلوا البحث عندما بدا الأمر مستحيلاً بالنسبة للآخرين.",
];

export default className => Widget.Label({
    className: className || "saying-wd-label",
// label: "SUIII",
    justification: 'left',
    // truncate: 'end',
    xalign: 0,
    maxWidthChars: 24,
    wrap: true,
    connections: [
        [(30 * 1000 * 60), self => {
            const randomIndex = Math.floor(Math.random() * words_dict.length);

            // Use the random index to get a random element
            const randomSaying = words_dict[randomIndex];

            self.label = randomSaying;
        }],
    ]
})
