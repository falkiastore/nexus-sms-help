/* ═══════════════════════════════════════════════════════════
   NEXUS SMS — Website Interactivity (v2)
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── All 9 Module Data ───────────────────────────────── 
  const MODULE_DATA = {
    dashboard: {
      img: 'images/dashboard.png',
      title: 'Nexus SMS — Dashboard',
      tag: '<i class="fas fa-chart-pie"></i> Dashboard',
      h3: 'Smart Role-Based Dashboard',
      desc: 'Tailored dashboards for Admin, Teacher, and Accountant roles. View live attendance charts, fee collection vs overdue analysis, a predictive month-end forecast, student growth trends, and grade insights — all with date range filters (Today / 7 Days / 30 Days).',
      list: ['Role-based views (Admin / Teacher / Accountant)', 'Attendance bar chart by class or date range', 'Fee Collected vs Overdue doughnut chart', 'Predictive month-end collection forecast', 'Student growth line chart', 'Top students & weak subject insights']
    },
    students: {
      img: 'images/students.png',
      title: 'Nexus SMS — Students Registry',
      tag: '<i class="fas fa-user-graduate"></i> Students',
      h3: 'Complete Student Registry',
      desc: 'Maintain comprehensive student profiles with personal details, guardian contacts, class/section assignments, admission dates, and custom fee structures. Smart search, class/section filters, and bulk import from Excel.',
      list: ['Full student profiles with guardian info', 'Class & section assignment', 'Custom fee structure per student', 'Bulk import from Excel', 'Smart search & filter', 'School Leaving Certificate (SLC) generation']
    },
    staff: {
      img: 'images/staff.png',
      title: 'Nexus SMS — Staff & Payroll',
      tag: '<i class="fas fa-chalkboard-teacher"></i> Staff',
      h3: 'Staff Management & Payroll',
      desc: 'Manage teachers and admin staff with complete profiles and role assignments. Process monthly salaries, calculate deductions and bonuses, and generate professional PDF salary slips per employee.',
      list: ['Staff profile management', 'Role assignment (Teacher / Admin)', 'Monthly salary processing', 'Deductions & bonus calculation', 'PDF salary slip generation', 'Net pay auto-calculation']
    },
    attendance: {
      img: 'images/attendance.png',
      title: 'Nexus SMS — Attendance',
      tag: '<i class="fas fa-calendar-check"></i> Attendance',
      h3: 'Smart Attendance Tracking',
      desc: 'Daily attendance marking by class with configurable status types (Present, Absent, Late, Leave). Integrated public holiday awareness for Pakistan (and any country). Prevents duplicate entries and respects custom school closures.',
      list: ['Mark attendance in under 30 seconds', 'Present / Absent / Late / Leave statuses', 'Configurable late cutoff time', 'National & custom holiday integration', 'Duplicate entry prevention', 'Daily & trend attendance charts']
    },
    fees: {
      img: 'images/fees.png',
      title: 'Nexus SMS — Fee Management',
      tag: '<i class="fas fa-hand-holding-usd"></i> Fees',
      h3: 'Complete Fee Management',
      desc: 'Flexible fee structures per class — admission, monthly, exam, and other fees. Auto-generate monthly charges on schedule. Track payments, identify defaulters, issue sequentially numbered receipts, and support JazzCash / EasyPaisa.',
      list: ['Custom fee structure per class', 'Auto monthly charge generation', 'Sequential receipt numbering (e.g. RCPT-001)', 'Defaulter tracking & alerts', 'JazzCash / EasyPaisa support', 'Overdue grace days config']
    },
    grades: {
      img: 'images/grades.png',
      title: 'Nexus SMS — Grades & Results',
      tag: '<i class="fas fa-graduation-cap"></i> Grades',
      h3: 'Grades, Results & Report Cards',
      desc: 'Enter marks by exam type and subject. Fully customisable grading scale (A+, A, B, C, D, F with configurable min/max). Bulk generate PDF report cards for an entire class. Identify top performers and struggling students automatically.',
      list: ['Exam-wise mark entry', 'Custom grading scale (A+ to F)', 'Bulk PDF report card generation', 'School Leaving Certificate generation', 'Top & weak student identification', 'Weak subject analytics']
    },
    notifications: {
      img: 'images/notifications.png',
      title: 'Nexus SMS — Notifications',
      tag: '<i class="fas fa-bell"></i> Notifications',
      h3: 'Smart Notifications & News Ticker',
      desc: 'Automated email notifications for fee payments, overdue fees, grade publishing, and absent students. Fully customisable message templates. Plus a live news ticker for school-wide announcements with scrolling, colour, font, speed, and schedule controls.',
      list: ['Fee payment & overdue email alerts', 'Grade published & absent student alerts', 'Custom notification templates (Urdu / English)', 'News ticker with RTL/LTR scrolling', 'Ticker schedule (start/end date)', 'Per-channel on/off toggles']
    },
    export: {
      img: 'images/export.png',
      title: 'Nexus SMS — Export & Backup',
      tag: '<i class="fas fa-file-export"></i> Export',
      h3: 'Export & Automated Backups',
      desc: 'Export any module\'s data as CSV or Excel for offline analysis. Schedule automated backups (daily, weekly, monthly) as CSV or ZIP packages delivered to your email. If files are too large, a Google Drive link is sent automatically.',
      list: ['Export any module to CSV / Excel', 'Scheduled backups (daily / weekly / monthly)', 'ZIP or CSV backup format', 'Email delivery with file attachment', 'Auto Drive link if file size exceeds limit', 'Custom backup file prefix']
    },
    settings: {
      img: 'images/settings.png',
      title: 'Nexus SMS — Settings',
      tag: '<i class="fas fa-cog"></i> Settings',
      h3: 'Comprehensive School Settings',
      desc: 'A 7-section settings panel covering every configurable aspect: General school profile, Academic configuration (year, terms, grading scale, pass mark), Attendance rules, Finance configuration, Notifications & news ticker, Backup schedule, and Security controls.',
      list: ['School name, logo & contact details', 'Academic year, terms & grading scale', 'Attendance status & holiday configuration', 'Payment methods & receipt numbering', 'Notification toggles & custom templates', 'Automated backup schedule & email recipients']
    }
  };

  // ─── Navbar Scroll ──────────────────────────────────── 
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ─── Mobile Hamburger ────────────────────────────────── 
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navActions = document.getElementById('navActions');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('mobile-open');
    navActions?.classList.toggle('mobile-open');
  });
  navLinks?.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('mobile-open');
    navActions?.classList.remove('mobile-open');
  }));

  // ─── Keyword Rotator ─────────────────────────────────── 
  const keywords = document.querySelectorAll('.keyword');
  let kwIdx = 0;
  if (keywords.length) {
    setInterval(() => {
      keywords[kwIdx].classList.remove('active');
      kwIdx = (kwIdx + 1) % keywords.length;
      keywords[kwIdx].classList.add('active');
    }, 2400);
  }

  // ─── Module Tabs ─────────────────────────────────────── 
  const tabBtns = document.querySelectorAll('.tab-btn');
  const previewImg = document.getElementById('previewImage');
  const previewTitle = document.getElementById('previewTitle');
  const infoTag = document.getElementById('moduleInfoTag');
  const infoTitle = document.getElementById('moduleInfoTitle');
  const infoDesc = document.getElementById('moduleInfoDesc');
  const infoList = document.getElementById('moduleInfoList');

  function switchModule(tab) {
    const d = MODULE_DATA[tab];
    if (!d) return;

    // Image fade
    if (previewImg) {
      previewImg.style.opacity = '0';
      setTimeout(() => {
        previewImg.src = d.img;
        previewImg.alt = d.title;
        previewImg.style.opacity = '1';
      }, 280);
    }
    if (previewTitle) previewTitle.textContent = d.title;

    // Info panel
    if (infoTag) infoTag.innerHTML = d.tag;
    if (infoTitle) infoTitle.textContent = d.h3;
    if (infoDesc) infoDesc.textContent = d.desc;
    if (infoList) {
      infoList.innerHTML = d.list
        .map(item => `<li><i class="fas fa-check"></i>${item}</li>`)
        .join('');
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      switchModule(btn.dataset.tab);
    });
  });

  // ─── FAQ Accordion ────────────────────────────────────── 
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question')?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(fi => fi.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  // ─── Scroll Animations ───────────────────────────────── 
  const animObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); animObs.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-animate]').forEach(el => animObs.observe(el));

  // ─── Counter Animation ───────────────────────────────── 
  const counted = new Set();
  const cntObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting || counted.has(e.target)) return;
      counted.add(e.target);
      const el = e.target;
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const isText = isNaN(target);
      if (isText) return;

      const dur = 1800;
      const start = performance.now();
      const isFloat = !Number.isInteger(target);

      const tick = now => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = eased * target;
        el.textContent = (isFloat ? val.toFixed(1) : Math.floor(val).toLocaleString()) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-target]').forEach(el => cntObs.observe(el));

  // ─── Hero Particles ──────────────────────────────────── 
  const pc = document.getElementById('heroParticles');
  if (pc) {
    for (let i = 0; i < 45; i++) {
      const p = document.createElement('div');
      const sz = Math.random() * 2.5 + 1;
      p.style.cssText = `
        position:absolute; width:${sz}px; height:${sz}px;
        background:rgba(212,168,50,${(Math.random() * .25 + .04).toFixed(2)});
        border-radius:50%; left:${Math.random() * 100}%; top:${Math.random() * 100}%;
        animation:float ${(Math.random() * 6 + 4).toFixed(1)}s ease-in-out infinite;
        animation-delay:${(Math.random() * -12).toFixed(1)}s;
        pointer-events:none;
      `;
      pc.appendChild(p);
    }
  }

  // ─── Smooth Scroll ───────────────────────────────────── 
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  // ─── Contact Form ─────────────────────────────────────── 
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyVvjaIC8oVBbsChH-Fem1dUVynk0D6rgdC4mbMWnu0XdHN5_6t0n6Jxx7_J_zyFVDPVQ/exec';

  window.handleContactForm = async (e) => {
    e.preventDefault();

    const form = e.target;
    const btn = form.querySelector('button[type=submit]');
    const successBox = document.getElementById('contactFormSuccess');
    const errorBox = document.getElementById('contactFormError');
    const originalButtonHtml = btn.innerHTML;

    if (successBox) successBox.style.display = 'none';
    if (errorBox) errorBox.style.display = 'none';

    const payload = {
      source: 'NexusWebsite',
      schoolName: (document.getElementById('schoolName')?.value || '').trim(),
      contactPerson: (document.getElementById('contactPerson')?.value || '').trim(),
      email: (document.getElementById('contactEmail')?.value || '').trim(),
      phone: (document.getElementById('contactPhone')?.value || '').trim(),
      studentRange: (document.getElementById('studentRange')?.value || '').trim(),
      message: (document.getElementById('contactMessage')?.value || '').trim()
    };

    if (!payload.schoolName || !payload.contactPerson || !payload.email) {
      if (errorBox) {
        errorBox.textContent = 'Please fill School Name, Contact Person, and Email.';
        errorBox.style.display = 'block';
      }
      return;
    }

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    try {
      // Apps Script web apps usually require no-cors from static websites.
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      form.reset();
      if (successBox) successBox.style.display = 'block';
    } catch (error) {
      if (errorBox) {
        errorBox.textContent = 'Network error. Please try again.';
        errorBox.style.display = 'block';
      }
    } finally {
      btn.innerHTML = originalButtonHtml;
      btn.disabled = false;
    }
  };

});


