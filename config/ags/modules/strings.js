import { local } from './utils/helpers.js';

const strings = {
    ar: {
        today: 'اليوم',
        hello: 'مرحبا',
        tomorrow: 'غدا',
        dayAfterTomorrow: 'ب غدا',

        noNotifications: 'لا توجد أي إشعارات جديدة',
        notificationCenter: 'مركز الإشعارات',

        // Themes
        blackHoleTheme: 'ثقب',
        deerTheme: 'غزال',
        colorTheme: 'جمالي',
        siberianTheme: 'تدرج',
        materialYouTheme: 'مادي',
        win20Theme: 'ويندوز',
        gameTheme: 'لعبة',
        darkTheme: 'مظلم',
        unicatTheme: 'قط',
        newCatTheme: 'قط 2',
        goldenTheme: 'ذهبي',
        harmonyTheme: 'تناغم',
        circlesTheme: 'دوائر',
        whiteFlower: 'ابيض',

        // Circles Widget
        linuxTitle: 'لينكس',
        systemTitle: 'النظام',
        nameTitle: 'الاسم',
        hostTitle: 'الهوست',
        runtimeTitle: 'وقت التشغيل',
        packageManagerTitle: 'مدير الحزم',
        packagesTitle: 'الحزم',

        // Prayers
        prayerTimes: 'اوقات الصلوات',
        fajrPrayer: 'صلاة الفجر',
        dhuhrPrayer: 'صلاة الظهر',
        asrPrayer: 'صلاة العصر',
        maghribPrayer: 'صلاة المغرب',
        ishaPrayer: 'صلاة العشاء',
        prayerTimeNow: 'حان الآن وقت صلاة',
        fajr: 'الفجر',
        isha: 'العشاء',
        maghrib: 'المغرب',
        asr: 'العصر',
        dhuhr: 'الظهر',

        // Weather
        feelsLike: 'شعور وكانة',
        humidity: 'الرطوبة',
        pressure: 'الضغط',
        wind: 'الرياح',
        clouds: 'السحب',
        minAndMax: 'الصغرى والعلياء',
        coldWeather: 'طقس بارد !',
        hotWeather: 'طقس حار !',
        minTemperature: 'درجة الحرارة الصغرى اليوم',
        maxTemperature: 'درجة الحرارة الكبرى اليوم',
        weatherNotAvailable: 'خدمة الطقس غير متاحة',

        // Fuzzy Widget
        fuzzyClockThursday: 'أرحب يالخميس',
        fuzzyClockProgrammingTime: 'وقت البرمجة, حان وقت الابداع',
        fuzzyClockMorning: 'صباح الخير! بداية جديدة ليوم مليء بالفرص',
        fuzzyClockCoffee: 'بكوب من القهوة، دع الإنجازات تبدأ',
        fuzzyClockLunch: 'حان وقت الغداء، استرح واستعد للجولة الثانية',
        fuzzyClockCreative: 'حان وقت الإبداع، شغف وعمل خفيف ينتظرك',
        fuzzyClockTea: 'استمتع بكوب شاي واسترخِ مع كتاب خفيف',
        fuzzyClockDinner: 'العشاء جاهز، استمتع بوقتك مع أحبائك',
        fuzzyClockNight: 'ليلة سعيدة! استرخِ واستعد لغد جديد',
        fuzzyClockPlay: 'استمتع باللعب والمرح، إنها العطلة!',
        fuzzyClockPray: 'وقت مثالي للأذكار وقراءة القرآن.',
        fuzzyClockBath: 'استحم واستعد لصلاة الجمعة المباركة.',
        fuzzyClockFridayPrayer: 'حان وقت صلاة الجمعة.',
        fuzzyClockFamily: 'استمتع بالغداء مع العائلة واسترخِ.',
        fuzzyClockFriends: 'اخرج مع الأصدقاء واستمتع بيومك.',
        fuzzyClockRelax: 'ليلة سعيدة! استرخِ واستعد ليوم جديد.',
        fuzzyDaySaturday: 'مرحبًا بك في يوم جديد،',
        fuzzyDaySunday: 'الأحد هو فرصة جديدة',
        fuzzyDayMonday: 'نصف الأسبوع قد حان',
        fuzzyDayTuesday: 'يوم مليء بالأعمال',
        fuzzyDayWednesday: 'اليوم هو الأربعاء،',
        fuzzyDayFriday: 'يوم الجمعة',
        usedTimeNowSaturday: 'السبت هو بداية مغامرات جديدة.',
        usedTimeNowSunday: 'واصل السعي نحو أهدافك.',
        usedTimeNowMonday: 'استمر في الزخم والإيجابية.',
        usedTimeNowTuesday: 'اشحن نفسك واستعد لما هو قادم.',
        usedTimeNowWednesday:
            'أنهِ ما تبقى من عمل الأسبوع واستمتع بوقتك الباقي.',
        usedTimeNowThursday: 'حان وقت الاستمتاع بالجهود المبذولة.',
        usedTimeNowFriday: 'الاسترخاء والاستمتاع، استمتع بلحظات الهدوء.',
        fuzzyTimeThursday:
            'الخميس هو وقتك الخاص، استمتع بكل لحظة وافعل ما تريد.',
        musicPlayer: 'مشغل الموسيقى',
        musicPlayerNoArtist: 'لا يوجد فنان',
        musicPlayerNoTitle: 'لا يوجد عنوان',
        musicPlayerNoMusicPlaying: 'لا توجد موسيقى قيد التشغيل',

        // Hardware
        cpuUsage: 'مستهلك من المعالج',
        ramUsage: 'مستهلك من الرام',
        batteryPercentage: 'نسبة البطارية',
        highWifiTempWarning: 'تحذير: درجة حرارة الواي فاي مرتفعة جداً',
        highWifiTempMessage:
            'درجة حرارة جهاز الواي فاي مرتفعة (${wifiTemp}°C) وقد تؤدي إلى أداء غير مستقر أو تلف الأجهزة. يرجى التحقق من تهوية الجهاز والتأكد من عدم وجود مشكلات في التبريد.',
        highNVMeTempWarning: 'تحذير: درجة حرارة NVMe مرتفعة جداً',
        highNVMeTempMessage:
            'درجة حرارة NVMe مرتفعة (${nvmeTemp}°C) وقد تؤدي إلى أداء غير مستقر أو تلف الأجهزة. يرجى التحقق من تهوية الجهاز والتأكد من عدم وجود مشكلات في التبريد.',
        highCpuTempWarning: 'تحذير: درجة حرارة المعالج المركزي مرتفعة جداً',
        highCpuTempMessage:
            'درجة حرارة المعالج المركزي مرتفعة (${cpuTemp}°C) وقد تؤدي إلى أداء غير مستقر أو تلف الأجهزة. يرجى التحقق من تهوية الجهاز والتأكد من عدم وجود مشكلات في التبريد.',
        deviceTempTotal: 'اجمالي درجة حرارة الاجهزة',
        battery: 'البطارية',
        batteryHealth: 'الصحة',
        batteryVoltage: 'الفولتية',
        batteryEnergy: 'الطاقة',
        batteryCycles: 'الدورات',
        highVoltageWarning: 'تحذير: فولتية مرتفعة جداً',
        highVoltageMessage:
            'جهازك يستخدم شاحن بفولتية (${voltage} V) أعلى من المتوقع (${highVoltage} V). قد يؤدي ذلك إلى تلف البطارية أو الدوائر الإلكترونية. يرجى استخدام شاحن مناسب لجهازك.',
        highPerformance: 'مرتفع',
        balanced: 'معتدل',
        powerSaver: 'منخفض',
        devicesTemp: 'حرارة الاجهزة',
        wifiTemp: 'الوايفاي',
        nvmeTemp: 'الهارد',
        cpuTemp: 'المعالج',
        process: 'العملية',
        percentage: '%',
        volumeLevel: 'مستوى الصوت',
        brightnessLevel: 'مستوى السطوع',
        batteryPercentage: 'نسبة البطارية',
        brightnessLevel: 'مستوى السطوع',
        cpuUsage: 'يتم استخدام المعالج',
        ramUsage: 'نسبة الرام المستهلكة',
        hardwareTemperature: 'اجمالي درجة حرارة الاجهزة',

        mediaCenter: 'مركز الوسائط',
        controlCenter: 'مركز التحكم',
        hardwareCenter: 'مركز العتاد',

        doYouWantToPoweroff: 'هل تريد ايقاف التشغيل ؟',
        doYouWantToRestart: 'هل تريد اعادة التشغيل ؟',
        doYouWantToLogout: 'هل تريد تسجيل الخروج ؟',
        yes: 'نعم',
        no: 'لا',
    },
    en: {
        hello: 'Hello',
        today: 'Today',
        tomorrow: 'Tomo..',
        dayAfterTomorrow: 'D-A-T',

        noNotifications: 'No new notifications',
        notificationCenter: 'Notification Center',

        //Themes
        blackHoleTheme: 'B-Hole',
        deerTheme: 'Deer',
        colorTheme: 'Aest ..',
        siberianTheme: 'Sibe ..',
        materialYouTheme: 'M-You',
        win20Theme: 'Win 20',
        gameTheme: 'Game',
        darkTheme: 'Dark',
        unicatTheme: 'Unicat',
        newCatTheme: 'N-Cat',
        goldenTheme: 'Golden',
        harmonyTheme: 'Harm ..',
        circlesTheme: 'Circles',
        whiteFlower: 'Flo ..',

        // Circles Widget
        linuxTitle: 'Linux',
        systemTitle: 'System',
        nameTitle: 'Name',
        hostTitle: 'Host',
        runtimeTitle: 'Runtime',
        packageManagerTitle: 'Package Manager',
        packagesTitle: 'Packages',
        weatherNotAvailable: 'Weather not available',

        // Prayers
        prayerTimes: 'Prayer Times',
        fajrPrayer: 'Fajr Prayer',
        dhuhrPrayer: 'Dhuhr Prayer',
        asrPrayer: 'Asr Prayer',
        maghribPrayer: 'Maghrib Prayer',
        ishaPrayer: 'Isha Prayer',
        prayerTimeNow: 'It is now time for',
        fajr: 'Fajr',
        isha: 'Isha',
        maghrib: 'Maghrib',
        asr: 'Asr',
        dhuhr: 'Dhuhr',

        // Weather
        feelsLike: 'Feels Like',
        humidity: 'Humidity',
        pressure: 'Pressure',
        wind: 'Wind',
        clouds: 'Clouds',
        minAndMax: 'Min and Max',
        coldWeather: 'Cold Weather!',
        hotWeather: 'Hot Weather!',
        minTemperature: `oday's minimum temperature`,
        maxTemperature: `Today's maximum temperature`,

        // Fuzzy Widget
        fuzzyClockThursday: 'Welcome Thursday!',
        fuzzyClockProgrammingTime:
            'It is programming time, the time for creativity!',
        fuzzyClockMorning:
            'Good morning! A new day full of opportunities begins',
        fuzzyClockCoffee: 'With a cup of coffee, let the achievements begin',
        fuzzyClockLunch:
            'It’s lunchtime, take a break and get ready for the second round',
        fuzzyClockCreative:
            'It’s time for creativity, passion and light work await you',
        fuzzyClockTea: 'Enjoy a cup of tea and relax with a light book',
        fuzzyClockDinner:
            'Dinner is ready, enjoy your time with your loved ones',
        fuzzyClockNight: 'Good night! Relax and get ready for a new day',
        fuzzyClockPlay: 'Have fun and enjoy, it’s the holiday!',
        fuzzyClockPray: 'Perfect time for prayers and reading Quran',
        fuzzyClockBath: 'Shower and get ready for the blessed Friday prayer',
        fuzzyClockFridayPrayer: 'It’s time for Friday prayer',
        fuzzyClockFamily: 'Enjoy lunch with the family and relax',
        fuzzyClockFriends: 'Go out with friends and enjoy your day',
        fuzzyClockRelax: 'Good night! Relax and get ready for a new day',
        fuzzyDaySaturday: 'Welcome to a new day,',
        fuzzyDaySunday: 'Sunday is a new opportunity',
        fuzzyDayMonday: 'Half of the week has come',
        fuzzyDayTuesday: 'A day full of tasks',
        fuzzyDayWednesday: 'Today is Wednesday,',
        fuzzyDayFriday: 'Friday',
        usedTimeNowSaturday: 'Saturday is the start of new adventures.',
        usedTimeNowSunday: 'Keep striving towards your goals.',
        usedTimeNowMonday: 'Keep up the momentum and positivity.',
        usedTimeNowTuesday: 'Recharge and prepare yourself for what’s ahead.',
        usedTimeNowWednesday:
            'Finish what’s left of the week’s work and enjoy the rest of your time.',
        usedTimeNowThursday: 'Time to enjoy the efforts put in.',
        usedTimeNowFriday:
            'Relaxation and enjoyment, enjoy the moments of calm.',
        fuzzyTimeThursday:
            'Thursday is your special time, enjoy every moment and do what you want.',
        musicPlayer: 'Music Player',
        musicPlayerNoArtist: 'No artist',
        musicPlayerNoTitle: 'No title',
        musicPlayerNoMusicPlaying: 'There is no music currently playing.',

        // Hardware
        cpuUsage: 'CPU Usage',
        ramUsage: 'RAM Usage',
        batteryPercentage: 'Battery Percentage',
        highWifiTempWarning: 'Warning: High Wi-Fi Temperature',
        highWifiTempMessage:
            "The temperature of the Wi-Fi device is high (${wifiTemp}°C) and may lead to unstable performance or hardware damage. Please check the device's ventilation and ensure there are no cooling issues.",
        highNVMeTempWarning: 'Warning: High NVMe Temperature',
        highNVMeTempMessage:
            "The temperature of NVMe is high (${nvmeTemp}°C) and may lead to unstable performance or hardware damage. Please check the device's ventilation and ensure there are no cooling issues.",
        highCpuTempWarning: 'Warning: High CPU Temperature',
        highCpuTempMessage:
            "The temperature of the CPU is high (${cpuTemp}°C) and may lead to unstable performance or hardware damage. Please check the device's ventilation and ensure there are no cooling issues.",
        deviceTempTotal: 'Total Device Temperature',
        battery: 'Battery',
        batteryHealth: 'Health',
        batteryVoltage: 'Voltage',
        batteryEnergy: 'Energy',
        batteryCycles: 'Cycles',
        highVoltageWarning: 'Warning: High Voltage',
        highVoltageMessage:
            'Your device is using a charger with voltage (${voltage} V) higher than expected (${highVoltage} V). This could lead to battery or circuitry damage. Please use a compatible charger for your device.',
        highPerformance: 'High-P',
        balanced: 'Balance',
        powerSaver: 'P-Saver',
        devicesTemp: 'Devices Temperature',
        wifiTemp: 'Wi-Fi',
        nvmeTemp: 'NVMe',
        cpuTemp: 'CPU',
        process: 'Process',
        percentage: '%',
        volumeLevel: 'Volume Level',
        brightnessLevel: 'Brightness Level',
        batteryPercentage: 'Battery Percentage',
        brightnessLevel: 'Brightness Level',
        cpuUsage: 'CPU Usage',
        ramUsage: 'RAM Usage',
        hardwareTemperature: 'Hardware Temperature',

        // audio
        mediaCenter: 'Media Center',
        controlCenter: 'Media Center',
        hardwareCenter: 'Hardware Center',

        doYouWantToPoweroff: 'Do you want to power off ?',
        doYouWantToRestart: 'Do you want to restart ?',
        doYouWantToLogout: 'Do you want to logout ?',
        yes: 'Yes',
        no: 'No',
    },
};

export default local === 'RTL' ? strings.ar : strings.en;
// export default strings.en;
