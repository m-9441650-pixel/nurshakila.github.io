(function(){
  const LANGS={ms:'BM',en:'EN',id:'ID'};
  const T={
    'Dashboard':{en:'Dashboard',id:'Dasbor'},
    'My Learning':{en:'My Learning',id:'Pembelajaran Saya'},
    'My Notes':{en:'My Notes',id:'Catatan Saya'},
    'Tools':{en:'Tools',id:'Alat'},
    'About Project':{en:'About Project',id:'Tentang Projek'},
    'LEARN':{en:'LEARN',id:'BELAJAR'},'PRACTICE':{en:'PRACTICE',id:'BERLATIH'},'IMPROVE':{en:'IMPROVE',id:'MENAMBAH BAIK'},'SUCCEED':{en:'SUCCEED',id:'BERJAYA'},
    'Search my learning...':{en:'Search my learning...',id:'Cari pembelajaran saya...'},
    'HELLO,':{en:'HELLO,',id:'HALO,'},
    'WELCOME BACK, NURSHAKILA MARLISA! ✦':{en:'WELCOME BACK, NURSHAKILA MARLISA! ✦',id:'SELAMAT DATANG KEMBALI, NURSHAKILA MARLISA! ✦'},
    'Keep learning, keep exploring, and keep building your future.':{en:'Keep learning, keep exploring, and keep building your future.',id:'Terus belajar, terus meneroka, dan terus membina masa depan anda.'},
    'MY PERSONAL SPACE':{en:'MY PERSONAL SPACE',id:'RUANG PERIBADI SAYA'},'LEARN • BUILD • GROW':{en:'LEARN • BUILD • GROW',id:'BELAJAR • BINA • BERKEMBANG'},
    'DAILY REMINDER':{en:'DAILY REMINDER',id:'PERINGATAN HARIAN'},'“Discipline today,':{en:'“Discipline today,',id:'“Disiplin hari ini,'},'brighter tomorrow.”':{en:'brighter tomorrow.”',id:'masa depan lebih cerah.”'},'Small progress is still progress.':{en:'Small progress is still progress.',id:'Kemajuan kecil tetap merupakan kemajuan.'},
    'Same':{en:'Same',id:'Semangat'},'Passion':{en:'Passion',id:'Minat'},'Bigger':{en:'Bigger',id:'Lebih Besar'},'Goals ✓':{en:'Goals ✓',id:'Matlamat ✓'},
    'Structure the web':{en:'Structure the web',id:'Membina struktur web'},'Style the web':{en:'Style the web',id:'Menggayakan web'},'Make it interactive':{en:'Make it interactive',id:'Menjadikannya interaktif'},'Understand connections':{en:'Understand connections',id:'Memahami sambungan'},
    '✣ My Learning Path':{en:'✣ My Learning Path',id:'✣ Laluan Pembelajaran Saya'},'Learn':{en:'Learn',id:'Belajar'},'Practice':{en:'Practice',id:'Berlatih'},'Create':{en:'Create',id:'Mencipta'},'Improve':{en:'Improve',id:'Menambah baik'},
    'Gain knowledge and understand the basics.':{en:'Gain knowledge and understand the basics.',id:'Dapatkan pengetahuan dan fahami asas.'},'Try and explore through small exercises.':{en:'Try and explore through small exercises.',id:'Cuba dan teroka melalui latihan kecil.'},'Build something meaningful.':{en:'Build something meaningful.',id:'Bina sesuatu yang bermakna.'},'Get feedback and keep making it better.':{en:'Get feedback and keep making it better.',id:'Dapatkan maklum balas dan terus perbaikinya.'},
    '◉ Current Focus':{en:'◉ Current Focus',id:'◉ Fokus Semasa'},'This Week':{en:'This Week',id:'Minggu Ini'},'This Month':{en:'This Month',id:'Bulan Ini'},'Later':{en:'Later',id:'Kemudian'},
    'Finish HTML layout practice':{en:'Finish HTML layout practice',id:'Siapkan latihan susun atur HTML'},'Learn more CSS styling':{en:'Learn more CSS styling',id:'Pelajari lebih lanjut gaya CSS'},'Do JavaScript DOM exercise':{en:'Do JavaScript DOM exercise',id:'Buat latihan DOM JavaScript'},'Revise networking (subnetting)':{en:'Revise networking (subnetting)',id:'Ulang kaji rangkaian (subnetting)'},'Design infographic for project':{en:'Design infographic for project',id:'Reka infografik untuk projek'},'Update portfolio website':{en:'Update portfolio website',id:'Kemas kini laman portfolio'},
    '◎ My Goal':{en:'◎ My Goal',id:'◎ Matlamat Saya'},'Become a':{en:'Become a',id:'Menjadi seorang'},'Web Developer':{en:'Web Developer',id:'Pembangun Web'},'Build useful websites, solve real problems, and keep learning new technologies.':{en:'Build useful websites, solve real problems, and keep learning new technologies.',id:'Bina laman web yang berguna, selesaikan masalah sebenar dan terus pelajari teknologi baharu.'},'I CAN DO THIS! →':{en:'I CAN DO THIS! →',id:'SAYA BOLEH! →'},
    '⚒ Useful Tools':{en:'⚒ Useful Tools',id:'⚒ Alat Berguna'},'Code Editor':{en:'Code Editor',id:'Editor Kod'},'Graphic Design':{en:'Graphic Design',id:'Reka Bentuk Grafik'},'Network Simulation':{en:'Network Simulation',id:'Simulasi Rangkaian'},'Web Testing':{en:'Web Testing',id:'Ujian Web'},
    '▤ Recent Notes':{en:'▤ Recent Notes',id:'▤ Nota Terkini'},'HTML Basic Structure':{en:'HTML Basic Structure',id:'Struktur Asas HTML'},'CSS Flexbox Notes':{en:'CSS Flexbox Notes',id:'Nota Flexbox CSS'},'JavaScript DOM':{en:'JavaScript DOM',id:'DOM JavaScript'},'Subnetting Basics':{en:'Subnetting Basics',id:'Asas Subnetting'},
    '☼ Motivation Corner':{en:'☼ Motivation Corner',id:'☼ Sudut Motivasi'},'“BELAJAR HARI INI,':{en:'“LEARN TODAY,',id:'“BELAJAR HARI INI,'},'BINA SESUATU BESOK.”':{en:'BUILD SOMETHING TOMORROW.”',id:'BINA SESUATU BESOK.”'},
    'MY LEARNING':{en:'MY LEARNING',id:'PEMBELAJARAN SAYA'},'LEARN → PRACTICE → CREATE → IMPROVE':{en:'LEARN → PRACTICE → CREATE → IMPROVE',id:'BELAJAR → BERLATIH → CIPTA → TAMBAH BAIK'},'Learning Roadmap':{en:'Learning Roadmap',id:'Peta Pembelajaran'},'Projects':{en:'Projects',id:'Projek'},
    'Dashboard ini membantu saya menyusun kemahiran yang sedang dipelajari dan perkara yang perlu dipraktikkan.':{en:'This dashboard helps me organise the skills I am learning and the things I need to practise.',id:'Dasbor ini membantu saya menyusun kemahiran yang sedang dipelajari dan perkara yang perlu dipraktikkan.'},
    'MY NOTES':{en:'MY NOTES',id:'NOTA SAYA'},'SMALL NOTES, BIG PROGRESS.':{en:'SMALL NOTES, BIG PROGRESS.',id:'NOTA KECIL, KEMAJUAN BESAR.'},'Struktur asas halaman':{en:'Basic page structure',id:'Struktur asas halaman'},'Flexbox & layout':{en:'Flexbox & layout',id:'Flexbox & susun atur'},'DOM & interaction':{en:'DOM & interaction',id:'DOM & interaksi'},'IP & subnetting':{en:'IP & subnetting',id:'IP & subnetting'},
    'TOOLS':{en:'TOOLS',id:'ALAT'},'TOOLS I USE TO BUILD.':{en:'TOOLS I USE TO BUILD.',id:'ALAT YANG SAYA GUNAKAN UNTUK MEMBINA.'},'Menulis dan menyusun kod.':{en:'Writing and organising code.',id:'Menulis dan menyusun kod.'},'Menguji paparan dan fungsi web.':{en:'Testing web display and functions.',id:'Menguji paparan dan fungsi web.'},'Membina simulasi rangkaian.':{en:'Building network simulations.',id:'Membina simulasi rangkaian.'},'Menyediakan bahan grafik dan multimedia.':{en:'Creating graphic and multimedia materials.',id:'Menyediakan bahan grafik dan multimedia.'},
    'ABOUT PROJECT':{en:'ABOUT PROJECT',id:'TENTANG PROJEK'},'KENAPA DASHBOARD INI DIBUAT?':{en:'WHY WAS THIS DASHBOARD BUILT?',id:'KENAPA DASBOR INI DIBUAT?'},
    'Ini ialah projek multimedia peribadi yang saya bina menggunakan':{en:'This is a personal multimedia project that I built using',id:'Ini ialah projek multimedia peribadi yang saya bina menggunakan'},'melalui Visual Studio Code. Dashboard ini digunakan untuk menyusun kemahiran, fokus pembelajaran, nota dan matlamat kerjaya saya dalam satu paparan interaktif.':{en:'through Visual Studio Code. This dashboard is used to organise my skills, learning focus, notes and career goals in one interactive view.',id:'melalui Visual Studio Code. Dasbor ini digunakan untuk menyusun kemahiran, fokus pembelajaran, nota dan matlamat kerjaya saya dalam satu paparan interaktif.'},
    'SKILL SCAN':{en:'SKILL SCAN',id:'IMBASAN KEMAHIRAN'},'TOOL KIT':{en:'TOOL KIT',id:'KIT ALAT'},
    'Kemahiran yang sedang saya pelajari dan kembangkan.':{en:'A skill I am currently learning and developing.',id:'Keterampilan yang sedang saya pelajari dan kembangkan.'},
    'HTML membina struktur asas halaman web. Saya sedang mengukuhkan penggunaan semantic elements dan struktur halaman yang kemas.':{en:'HTML builds the basic structure of web pages. I am strengthening my use of semantic elements and clean page structure.',id:'HTML membina struktur asas halaman web. Saya sedang mengukuhkan penggunaan elemen semantik dan struktur halaman yang kemas.'},
    'CSS digunakan untuk menghasilkan layout, tipografi, warna, spacing dan responsive design.':{en:'CSS is used for layout, typography, colour, spacing and responsive design.',id:'CSS digunakan untuk menghasilkan susun atur, tipografi, warna, jarak dan reka bentuk responsif.'},
    'JavaScript membantu saya menghasilkan interaksi seperti popup, button, navigation dan perubahan kandungan.':{en:'JavaScript helps me create interactions such as popups, buttons, navigation and content changes.',id:'JavaScript membantu saya menghasilkan interaksi seperti popup, butang, navigasi dan perubahan kandungan.'},
    'Networking membantu saya memahami sambungan peranti, konfigurasi asas dan simulasi rangkaian menggunakan Cisco Packet Tracer.':{en:'Networking helps me understand device connections, basic configuration and network simulation using Cisco Packet Tracer.',id:'Networking membantu saya memahami sambungan peranti, konfigurasi asas dan simulasi rangkaian menggunakan Cisco Packet Tracer.'},
    'Digunakan untuk menulis, menyusun dan menguji fail HTML, CSS dan JavaScript.':{en:'Used to write, organise and test HTML, CSS and JavaScript files.',id:'Digunakan untuk menulis, menyusun dan menguji fail HTML, CSS dan JavaScript.'},'Digunakan untuk menghasilkan bahan grafik dan multimedia.':{en:'Used to create graphic and multimedia materials.',id:'Digunakan untuk menghasilkan bahan grafik dan multimedia.'},'Digunakan untuk simulasi rangkaian dan latihan konfigurasi peranti.':{en:'Used for network simulation and device configuration practice.',id:'Digunakan untuk simulasi rangkaian dan latihan konfigurasi peranti.'},'Digunakan untuk melihat, menguji dan menyemak fungsi laman web.':{en:'Used to view, test and check website functions.',id:'Digunakan untuk melihat, menguji and check website functions.'},
    'WELCOME TO MY STUDY SPACE':{en:'WELCOME TO MY STUDY SPACE',id:'SELAMAT DATANG KE RUANG PEMBELAJARAN SAYA'},
    'Pilih suasana sebelum masuk ke dashboard pembelajaran saya.':{en:'Choose your mood before entering my learning dashboard.',id:'Pilih suasana sebelum masuk ke dasbor pembelajaran saya.'},
    'Soft • Calm • Focused':{en:'Soft • Calm • Focused',id:'Lembut • Tenang • Fokus'},'Deep • Creative • Night':{en:'Deep • Creative • Night',id:'Mendalam • Kreatif • Malam'},
    'Enter Light →':{en:'Enter Light →',id:'Masuk Light →'},'Enter Dark →':{en:'Enter Dark →',id:'Masuk Dark →'},
    'PROJECT 03 / WEB & INTERACTIVE':{en:'PROJECT 03 / WEB & INTERACTIVE',id:'PROJEK 03 / WEB & INTERAKTIF'},
    'Mini dashboard interaktif yang saya bangunkan untuk menyusun kemahiran, fokus pembelajaran, nota dan matlamat kerjaya sebagai pelajar Teknologi Maklumat.':{en:'An interactive mini dashboard I built to organise my skills, learning focus, notes and career goals as an Information Technology student.',id:'Dasbor mini interaktif yang saya bangunkan untuk menyusun kemahiran, fokus pembelajaran, nota dan matlamat kerjaya sebagai pelajar Teknologi Informasi.'},
    'Buka Dashboard Penuh ↗':{en:'Open Full Dashboard ↗',id:'Buka Dasbor Penuh ↗'},'Muat Turun Kod ↓':{en:'Download Code ↓',id:'Muat Turun Kod ↓'},'Tutup':{en:'Close',id:'Tutup'},
    'Small Steps, Big Progress ♡':{en:'Small Steps, Big Progress ♡',id:'Langkah Kecil, Kemajuan Besar ♡'}
  };

  const MS={
    'My IT Study Dashboard':'Dashboard Pembelajaran IT Saya',
    'IT STUDENT':'PELAJAR TEKNOLOGI MAKLUMAT',
    'Dashboard':'Dashboard',
    'My Learning':'Pembelajaran Saya',
    'My Notes':'Nota Saya',
    'Tools':'Alat',
    'About Project':'Tentang Projek',
    'Search my learning...':'Cari pembelajaran saya...',
    'HELLO,':'Helo,',
    'WELCOME BACK, NURSHAKILA MARLISA! ✦':'SELAMAT DATANG KEMBALI, NURSHAKILA MARLISA! ✦',
    'Keep learning, keep exploring, and keep building your future.':'Terus belajar, terus meneroka dan terus membina masa depan anda.',
    'MY PERSONAL SPACE':'RUANG PERIBADI SAYA',
    'LEARN • BUILD • GROW':'BELAJAR • BINA • BERKEMBANG',
    'DAILY REMINDER':'PERINGATAN HARIAN',
    '“Discipline today,':'“Disiplin hari ini,',
    'brighter tomorrow.”':'masa depan lebih cerah.”',
    'Small progress is still progress.':'Kemajuan kecil tetap merupakan kemajuan.',
    'Same':'Semangat',
    'Passion':'Minat',
    'Bigger':'Lebih Besar',
    'Goals ✓':'Matlamat ✓',
    'Structure the web':'Membina struktur web',
    'Style the web':'Menggayakan web',
    'Make it interactive':'Menjadikannya interaktif',
    'Understand connections':'Memahami sambungan',
    '✣ My Learning Path':'✣ Laluan Pembelajaran Saya',
    'Learn':'Belajar',
    'Practice':'Berlatih',
    'Create':'Mencipta',
    'Improve':'Menambah baik',
    'Gain knowledge and understand the basics.':'Dapatkan pengetahuan dan fahami asas.',
    'Try and explore through small exercises.':'Cuba dan teroka melalui latihan kecil.',
    'Build something meaningful.':'Bina sesuatu yang bermakna.',
    'Get feedback and keep making it better.':'Dapatkan maklum balas dan terus perbaikinya.',
    '◉ Current Focus':'◉ Fokus Semasa',
    'This Week':'Minggu Ini',
    'This Month':'Bulan Ini',
    'Later':'Kemudian',
    'Finish HTML layout practice':'Siapkan latihan susun atur HTML',
    'Learn more CSS styling':'Pelajari lebih lanjut tentang gaya CSS',
    'Do JavaScript DOM exercise':'Buat latihan DOM JavaScript',
    'Revise networking (subnetting)':'Ulang kaji rangkaian (subnetting)',
    'Design infographic for project':'Reka infografik untuk projek',
    'Update portfolio website':'Kemas kini laman portfolio',
    '◎ My Goal':'◎ Matlamat Saya',
    'Become a':'Menjadi seorang',
    'Web Developer':'Pembangun Web',
    'Build useful websites, solve real problems, and keep learning new technologies.':'Bina laman web yang berguna, selesaikan masalah sebenar dan terus pelajari teknologi baharu.',
    'I CAN DO THIS! →':'SAYA BOLEH! →',
    '⚒ Useful Tools':'⚒ Alat Berguna',
    'Code Editor':'Editor Kod',
    'Graphic Design':'Reka Bentuk Grafik',
    'Network Simulation':'Simulasi Rangkaian',
    'Web Testing':'Ujian Web',
    '▤ Recent Notes':'▤ Nota Terkini',
    'HTML Basic Structure':'Struktur Asas HTML',
    'CSS Flexbox Notes':'Nota Flexbox CSS',
    'JavaScript DOM':'DOM JavaScript',
    'Subnetting Basics':'Asas Subnetting',
    '☼ Motivation Corner':'☼ Sudut Motivasi',
    'MY LEARNING':'PEMBELAJARAN SAYA',
    'LEARN → PRACTICE → CREATE → IMPROVE':'BELAJAR → BERLATIH → CIPTA → TAMBAH BAIK',
    'Learning Roadmap':'Peta Pembelajaran',
    'Projects':'Projek',
    'SMALL NOTES, BIG PROGRESS.':'NOTA KECIL, KEMAJUAN BESAR.',
    'Flexbox & layout':'Flexbox & susun atur',
    'DOM & interaction':'DOM & interaksi',
    'IP & subnetting':'IP & subnetting',
    'TOOLS':'ALAT',
    'TOOLS I USE TO BUILD.':'ALAT YANG SAYA GUNAKAN UNTUK MEMBINA.',
    'ABOUT PROJECT':'TENTANG PROJEK',
    'KENAPA DASHBOARD INI DIBUAT?':'KENAPA DASHBOARD INI DIBUAT?',
    'WELCOME TO MY STUDY SPACE':'SELAMAT DATANG KE RUANG PEMBELAJARAN SAYA',
    'Choose your mood before entering my learning dashboard.':'Pilih suasana sebelum masuk ke dashboard pembelajaran saya.',
    'Soft • Calm • Focused':'Lembut • Tenang • Fokus',
    'Deep • Creative • Night':'Mendalam • Kreatif • Malam',
    'Enter Light →':'Masuk Light →',
    'Enter Dark →':'Masuk Dark →',
    'PROJECT 03 / WEB & INTERACTIVE':'PROJEK 03 / WEB & INTERAKTIF',
    'Open Full Dashboard ↗':'Buka Dashboard Penuh ↗',
    'Close':'Tutup',
    'MY IT STUDY DASHBOARD':'DASHBOARD PEMBELAJARAN IT SAYA',
    'Structure the web':'Membina struktur web',
    'Style the web':'Menggayakan web',
    'Make it interactive':'Menjadikannya interaktif',
    'Understand connections':'Memahami sambungan',
    'SKILL SCAN':'IMBASAN KEMAHIRAN',
    'TOOL KIT':'KIT ALAT'
  };

  const originals=new WeakMap();
  const norm=s=>s.replace(/\s+/g,' ').trim();
  function translateTree(root,lang){
    if(!root)return;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const nodes=[];
    while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(n=>{
      if(!originals.has(n)) originals.set(n,n.nodeValue);
      const raw=originals.get(n),key=norm(raw),hit=T[key];
      const directMs=MS[key];
      let translated=raw;
      if(lang==='ms') translated=directMs || (hit&&hit.ms) || (hit?key:raw);
      else if(hit) translated=hit[lang]||raw;
      else {
        for(const source of Object.keys(T)){
          const item=T[source];
          if(item && item[lang]===key){ translated=lang==='ms'?(MS[source]||source):item[lang]; break; }
        }
      }
      if(translated!==raw || lang==='ms'){const lead=(raw.match(/^\s*/)||[''])[0],trail=(raw.match(/\s*$/)||[''])[0];n.nodeValue=lead+translated+trail;}
    });
  }
  function translateAttrs(lang){
    document.querySelectorAll('[placeholder],[title],[aria-label],[alt]').forEach(el=>['placeholder','title','aria-label','alt'].forEach(a=>{
      if(!el.hasAttribute(a))return;const k='data-p3-original-'+a;
      if(!el.hasAttribute(k))el.setAttribute(k,el.getAttribute(a));
      const raw=el.getAttribute(k),hit=T[norm(raw)];if(hit)el.setAttribute(a,lang==='ms'?raw:(hit[lang]||raw));
    }));
  }
  function getLang(){try{return localStorage.getItem('my-it-journey-language')||'ms';}catch(e){return 'ms';}}
  function apply(lang){
    if(!LANGS[lang])lang='ms';
    document.documentElement.lang=lang==='ms'?'ms':lang;
    translateTree(document.body,lang);translateAttrs(lang);
    window.P3_LANG=lang;
    document.dispatchEvent(new CustomEvent('p3LanguageChanged',{detail:{lang}}));
  }
  window.P3_I18N={apply};
  document.addEventListener('DOMContentLoaded',()=>{
    apply(getLang());
    const wrap=document.getElementById('dashLang'),btn=document.getElementById('dashLangBtn'),menu=document.getElementById('dashLangMenu');
    if(wrap&&btn&&menu){
      btn.addEventListener('click',e=>{e.stopPropagation();wrap.classList.toggle('open');});
      menu.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',e=>{const next=e.currentTarget.dataset.lang;try{localStorage.setItem('my-it-journey-language',next);}catch(err){}apply(next);wrap.classList.remove('open');}));
      document.addEventListener('click',()=>wrap.classList.remove('open'));
    }
    window.addEventListener('storage',e=>{if(e.key==='my-it-journey-language')apply(e.newValue||'ms');});
    const observer=new MutationObserver(mutations=>{const lang=window.P3_LANG||getLang();mutations.forEach(m=>m.addedNodes.forEach(node=>{if(node.nodeType===1)translateTree(node,lang);}));});
    observer.observe(document.body,{childList:true,subtree:true});
  });
})();
