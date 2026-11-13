/* SAVIICII — shared: language (EN / AR), ambience colour, starlight, reveals */
(() => {
  const SV = window.SV = {};
  SV.PHONE = '96179029518';
  SV.R = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const T = SV.T = {
    en: {
      langBtn: 'عربي', nServices: 'Services', nWork: 'The work', nBook: 'Book', book: 'Book',
      eyebrow: 'Interior lighting · Custom kits · Lebanon', tag: 'Light, crafted for your cabin.',
      sub: 'Starlight headliners, ambient lighting, door projectors and custom interior kits. Fitted clean, made to look factory.',
      ctaBook: 'Book a fitting', ctaWork: 'See the work', ambLbl: 'Try the ambience', scroll: 'Scroll',
      svcK: 'What we do', svcH: 'Details that <em>glow.</em>', ask: 'Ask about it',
      s1h: 'Starlight headliners', s1p: 'Hundreds of fibre-optic stars placed by hand across your roof, with colour, twinkle and shooting-star effects.',
      s2h: 'Ambient lighting', s2p: 'Light lines across the dash, doors and console. One colour, or all of them moving together.',
      s3h: 'Projectors & lit sills', s3p: 'Your logo on the ground and lit door sills. The first thing you see when the door opens.',
      s4h: 'LED lights & custom kits', s4p: 'LED headlights, interior upgrades, custom kits and accessories, fitted clean like they came from the factory.',
      vK: 'Step inside', vH: 'Feel it <em>before you drive.</em>', vP: 'Starlight roof, ambient lines, lit sills, a whole cabin rebuilt around light. This is what opening the door feels like.', vBtn: 'Book this look',
      gK: 'The work', gH: 'After <em>dark.</em>', c1: 'Ambient · Orchid', c2: 'Starlight headliner', c3: 'Ambient · Rainbow', c4: 'Door projector', c5: 'LED headlights', c6: 'Door ambient', c7: 'Starlight · M4', c8: 'Lit sill + projector', c9: 'Illuminated sill', c10: 'Cabin, in motion',
      pK: 'How it works', pH: 'Three steps to <em>a new cabin.</em>',
      p1h: 'Consult', p1p: 'Send us your car and what you have in mind. We suggest what fits it best.',
      p2h: 'Design', p2p: 'Colours, star count, logos and kits, chosen with you before anything is touched.',
      p3h: 'Install', p3p: 'Fitted clean and hidden, tested with you before you drive away.',
      cK: 'Book a fitting', cH: 'Your cabin, <em>after dark.</em>', cBook: 'Book online', wa: 'WhatsApp', call: 'Call',
      foot: 'Lighting · Interiors · Custom kits · Lebanon', waMsg: 'Hello SAVIICII, I would like to book a fitting.',
      amb: { orchid: 'Orchid', royal: 'Royal', ice: 'Ice', ruby: 'Ruby', emerald: 'Emerald', amber: 'Amber' }
    },
    ar: {
      langBtn: 'EN', nServices: 'خدماتنا', nWork: 'شغلنا', nBook: 'احجز', book: 'احجز',
      eyebrow: 'إضاءة داخلية · كيتات مخصّصة · لبنان', tag: 'ضوء، مصمَّم لسيارتك.',
      sub: 'سقف نجوم، إضاءة أمبيانت، بروجكتور للأبواب وكيتات داخلية مخصّصة. تركيب نضيف، كأنها طالعة من المصنع.',
      ctaBook: 'احجز موعد', ctaWork: 'شوف شغلنا', ambLbl: 'جرّب الأمبيانت', scroll: 'انزل',
      svcK: 'شو منعمل', svcH: 'تفاصيل <em>بتلمع.</em>', ask: 'اسأل عنها',
      s1h: 'سقف نجوم', s1p: 'مئات النجوم من الألياف الضوئية، منركّبها بالإيد على سقف سيارتك، مع ألوان ولمعة ونجوم بتسقط.',
      s2h: 'إضاءة أمبيانت', s2p: 'خطوط ضو عالتابلو والأبواب والكونسول. لون واحد، أو كل الألوان عم يمشوا سوا.',
      s3h: 'بروجكتور وعتبات مضوّية', s3p: 'لوغو سيارتك عالأرض وعتبات أبواب مضوّية. أول شي بتشوفو لما تفتح الباب.',
      s4h: 'أضواء LED وكيتات', s4p: 'أضواء LED قدّامية، تعديلات داخلية، كيتات وإكسسوارات، تركيب نضيف كأنها من المصنع.',
      vK: 'فوت لجوّا', vH: 'حسّها <em>قبل ما تسوق.</em>', vP: 'سقف نجوم، خطوط أمبيانت، عتبات مضوّية، سيارة كاملة مبنية حوالين الضو. هيك بيكون الإحساس لما تفتح الباب.', vBtn: 'بدّي هالستايل',
      gK: 'شغلنا', gH: 'بعد <em>العتمة.</em>', c1: 'أمبيانت · أوركيد', c2: 'سقف نجوم', c3: 'أمبيانت · ألوان', c4: 'بروجكتور باب', c5: 'أضواء LED', c6: 'أمبيانت الباب', c7: 'نجوم · M4', c8: 'عتبة وبروجكتور', c9: 'عتبة مضوّية', c10: 'السيارة عم تتحرّك',
      pK: 'كيف منشتغل', pH: 'تلات خطوات <em>لسيارة جديدة.</em>',
      p1h: 'استشارة', p1p: 'ابعتلنا سيارتك وشو ببالك، ومنقلّك شو بيليق فيها أكتر.',
      p2h: 'تصميم', p2p: 'الألوان، عدد النجوم، اللوغوهات والكيتات، منختارن معك قبل ما نلمس شي.',
      p3h: 'تركيب', p3p: 'تركيب نضيف ومخفي، ومنجرّبو معك قبل ما تمشي.',
      cK: 'احجز موعد', cH: 'سيارتك، <em>بعد العتمة.</em>', cBook: 'احجز أونلاين', wa: 'واتساب', call: 'اتصل',
      foot: 'إضاءة · داخلية · كيتات · لبنان', waMsg: 'مرحبا SAVIICII، بدّي احجز موعد.',
      amb: { orchid: 'أوركيد', royal: 'ملكي', ice: 'ثلجي', ruby: 'ياقوتي', emerald: 'زمرّدي', amber: 'عنبري' }
    }
  };
  let lang = 'en'; try { lang = localStorage.getItem('sv-lang') || 'en'; } catch (e) {}
  SV.lang = () => lang;
  SV.extra = { en: {}, ar: {} };
  const hooks = [];
  SV.onLang = f => hooks.push(f);
  SV.t = k => (SV.extra[lang] && SV.extra[lang][k] != null) ? SV.extra[lang][k] : (T[lang][k] != null ? T[lang][k] : k);
  SV.wa = (msg) => `https://wa.me/${SV.PHONE}?text=${encodeURIComponent(msg || SV.t('waMsg'))}`;

  function split(h) {
    if (h.querySelector('.w')) return;
    let i = 0;
    const walk = n => [...n.childNodes].forEach(c => {
      if (c.nodeType === 3) { const f = document.createDocumentFragment(); c.textContent.split(/(\s+)/).forEach(w => { if (!w.trim()) { f.appendChild(document.createTextNode(w)); return; } const o = document.createElement('span'); o.className = 'w'; const s = document.createElement('span'); s.textContent = w; s.style.setProperty('--i', i++); o.appendChild(s); f.appendChild(o); }); c.replaceWith(f); }
      else walk(c);
    });
    walk(h);
  }
  SV.apply = l => {
    lang = l;
    document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i]').forEach(el => { const v = SV.t(el.dataset.i); if (v != null) el.innerHTML = v; });
    document.querySelectorAll('.split').forEach(split);
    document.querySelectorAll('[data-wa]').forEach(a => a.href = SV.wa(a.dataset.msg ? SV.t(a.dataset.msg) : null));
    const b = document.getElementById('lang'); if (b) b.textContent = T[l].langBtn;
    hooks.forEach(f => f(l));
    try { localStorage.setItem('sv-lang', l); } catch (e) {}
    reveal();
  };

  /* ambience */
  SV.AMB = [['orchid', '#e14bff'], ['royal', '#3d6bff'], ['ice', '#bfe0ff'], ['ruby', '#ff2d55'], ['emerald', '#22d38a'], ['amber', '#ff9a1f']];
  const hex = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
  SV.target = hex(SV.AMB[0][1]); SV.ambI = 0;
  const ambHooks = []; SV.onAmb = f => ambHooks.push(f);
  SV.setAmb = (i, save) => {
    SV.ambI = i; const [, c] = SV.AMB[i], rgb = hex(c);
    document.documentElement.style.setProperty('--amb', c); document.documentElement.style.setProperty('--amb-rgb', rgb.join(','));
    SV.target = rgb; ambHooks.forEach(f => f(i));
    if (save) try { localStorage.setItem('sv-amb', i); } catch (e) {}
  };
  try { const s = +localStorage.getItem('sv-amb'); if (s >= 0 && s < SV.AMB.length) { SV.ambI = s; } } catch (e) {}

  /* starlight headliner */
  SV.sky = (cv, o) => {
    o = o || {}; const ctx = cv.getContext('2d'); let W, H, stars = [], shoot = null, dpr = Math.min(2, devicePixelRatio || 1), px = 0, py = 0, vis = true;
    const size = () => { const r = cv.getBoundingClientRect(); W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(W * H / (o.density || 3600)); stars = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.3 + .35, p: Math.random() * 6.28, s: .6 + Math.random() * 1.8, d: Math.random() * .8 + .2, w: Math.random() < .3 })); };
    size(); addEventListener('resize', size);
    new IntersectionObserver(e => vis = e[0].isIntersecting).observe(cv);
    addEventListener('pointermove', e => { px = e.clientX / innerWidth - .5; py = e.clientY / innerHeight - .5; }, { passive: true });
    const cur = SV.target.slice();
    (function frame(t) {
      requestAnimationFrame(frame); if (!vis) return;
      for (let k = 0; k < 3; k++) cur[k] += (SV.target[k] - cur[k]) * .04;
      ctx.clearRect(0, 0, W, H); const c = cur.map(Math.round).join(',');
      for (const s of stars) {
        const tw = SV.R ? .8 : .4 + .6 * Math.sin(t / 1000 * s.s + s.p) ** 2;
        const x = s.x + px * 16 * s.d; let y = s.y + py * 12 * s.d - (SV.R ? 0 : (t / 1000 * 2 * s.d) % H); if (y < 0) y += H;
        ctx.globalAlpha = tw * (o.alpha || 1); ctx.fillStyle = s.w ? '#fff' : `rgb(${c})`;
        ctx.beginPath(); ctx.arc(x, y, s.r, 0, 6.283); ctx.fill();
        if (s.r > 1.2) { ctx.globalAlpha = tw * .2 * (o.alpha || 1); ctx.fillStyle = `rgb(${c})`; ctx.beginPath(); ctx.arc(x, y, s.r * 4, 0, 6.283); ctx.fill(); }
      }
      if (!SV.R && !o.noShoot) {
        if (!shoot && Math.random() < .006) shoot = { x: Math.random() * W * .7, y: Math.random() * H * .4, vx: 7 + Math.random() * 5, vy: 2.5 + Math.random() * 2, life: 1 };
        if (shoot) { const g = ctx.createLinearGradient(shoot.x, shoot.y, shoot.x - shoot.vx * 12, shoot.y - shoot.vy * 12); g.addColorStop(0, 'rgba(255,255,255,' + shoot.life + ')'); g.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.globalAlpha = 1; ctx.strokeStyle = g; ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(shoot.x, shoot.y); ctx.lineTo(shoot.x - shoot.vx * 12, shoot.y - shoot.vy * 12); ctx.stroke();
          shoot.x += shoot.vx; shoot.y += shoot.vy; shoot.life -= .018; if (shoot.life <= 0 || shoot.x > W + 50) shoot = null; }
      }
      ctx.globalAlpha = 1;
    })(0);
  };

  /* reveal */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .14, rootMargin: '0px 0px -6% 0px' });
  function reveal() { document.querySelectorAll('.rv:not(.in),.split:not(.in),.wipe:not(.in),[data-rv]:not(.in)').forEach(el => io.observe(el)); }
  SV.reveal = reveal;

  /* nav */
  addEventListener('scroll', () => { const n = document.getElementById('nav'); if (n) n.classList.toggle('solid', scrollY > 40); }, { passive: true });
  document.documentElement.classList.add('js');
  document.addEventListener('click', e => { if (e.target.closest && e.target.closest('#lang')) SV.apply(lang === 'en' ? 'ar' : 'en'); });
})();
