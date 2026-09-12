// Dataset 38 Provinsi Lengkap dengan Estimasi Produksi Ribu Ton Padi
const dataProvinsi = [
  // SUMATERA
  { kode: "11", provinsi: "Aceh", pulau: "Sumatera", rtp: 1.12, cagr: 0.85, ikrp: 42.1, kontribusi: 3.2, produksi: 1720, status: "Prioritas Sedang" },
  { kode: "12", provinsi: "Sumatera Utara", pulau: "Sumatera", rtp: 1.25, cagr: 1.10, ikrp: 48.5, kontribusi: 4.8, produksi: 2580, status: "Prioritas Sedang" },
  { kode: "13", provinsi: "Sumatera Barat", pulau: "Sumatera", rtp: 1.18, cagr: 0.45, ikrp: 45.2, kontribusi: 2.6, produksi: 1400, status: "Prioritas Sedang" },
  { kode: "14", provinsi: "Riau", pulau: "Sumatera", rtp: 1.45, cagr: -1.20, ikrp: 62.4, kontribusi: 0.8, produksi: 430, status: "Prioritas Tinggi" },
  { kode: "15", provinsi: "Jambi", pulau: "Sumatera", rtp: 1.32, cagr: -0.50, ikrp: 54.1, kontribusi: 1.1, produksi: 590, status: "Prioritas Tinggi" },
  { kode: "16", provinsi: "Sumatera Selatan", pulau: "Sumatera", rtp: 1.08, cagr: 2.15, ikrp: 38.0, kontribusi: 5.1, produksi: 2740, status: "Sentra Utama Stabil" },
  { kode: "17", provinsi: "Bengkulu", pulau: "Sumatera", rtp: 1.22, cagr: 0.10, ikrp: 49.0, kontribusi: 0.9, produksi: 480, status: "Prioritas Sedang" },
  { kode: "18", provinsi: "Lampung", pulau: "Sumatera", rtp: 1.15, cagr: 1.80, ikrp: 39.5, kontribusi: 4.9, produksi: 2630, status: "Sentra Utama Stabil" },
  { kode: "19", provinsi: "Kep. Bangka Belitung", pulau: "Sumatera", rtp: 1.62, cagr: -2.10, ikrp: 71.3, kontribusi: 0.2, produksi: 105, status: "Sangat Rentan" },
  { kode: "21", provinsi: "Kepulauan Riau", pulau: "Sumatera", rtp: 1.75, cagr: -3.00, ikrp: 78.0, kontribusi: 0.05, produksi: 28, status: "Sangat Rentan" },

  // JAWA
  { kode: "31", provinsi: "DKI Jakarta", pulau: "Jawa", rtp: 2.10, cagr: -5.00, ikrp: 85.0, kontribusi: 0.01, produksi: 5, status: "Sangat Rentan" },
  { kode: "32", provinsi: "Jawa Barat", pulau: "Jawa", rtp: 1.42, cagr: 0.90, ikrp: 52.3, kontribusi: 17.2, produksi: 9250, status: "Sentra Kritis" },
  { kode: "33", provinsi: "Jawa Tengah", pulau: "Jawa", rtp: 1.38, cagr: 1.05, ikrp: 49.8, kontribusi: 17.8, produksi: 9570, status: "Sentra Kritis" },
  { kode: "34", provinsi: "DI Yogyakarta", pulau: "Jawa", rtp: 1.55, cagr: -0.20, ikrp: 58.7, kontribusi: 1.0, produksi: 537, status: "Prioritas Tinggi" },
  { kode: "35", provinsi: "Jawa Timur", pulau: "Jawa", rtp: 1.35, cagr: 1.20, ikrp: 47.6, kontribusi: 18.1, produksi: 9730, status: "Sentra Kritis" },
  { kode: "36", provinsi: "Banten", pulau: "Jawa", rtp: 1.40, cagr: 0.30, ikrp: 55.1, kontribusi: 2.9, produksi: 1560, status: "Prioritas Tinggi" },

  // NUSA TENGGARA & BALI
  { kode: "51", provinsi: "Bali", pulau: "Nusa Tenggara", rtp: 1.48, cagr: -0.80, ikrp: 60.2, kontribusi: 1.2, produksi: 645, status: "Prioritas Tinggi" },
  { kode: "52", provinsi: "Nusa Tenggara Barat", pulau: "Nusa Tenggara", rtp: 1.05, cagr: 2.40, ikrp: 36.4, kontribusi: 2.7, produksi: 1450, status: "Sentra Utama Stabil" },
  { kode: "53", provinsi: "Nusa Tenggara Timur", pulau: "Nusa Tenggara", rtp: 1.28, cagr: -0.10, ikrp: 56.8, kontribusi: 1.4, produksi: 752, status: "Prioritas Tinggi" },

  // KALIMANTAN
  { kode: "61", provinsi: "Kalimantan Barat", pulau: "Kalimantan", rtp: 1.20, cagr: 0.60, ikrp: 46.5, kontribusi: 1.5, produksi: 805, status: "Prioritas Sedang" },
  { kode: "62", provinsi: "Kalimantan Tengah", pulau: "Kalimantan", rtp: 1.18, cagr: 1.00, ikrp: 44.0, kontribusi: 1.1, produksi: 590, status: "Prioritas Sedang" },
  { kode: "63", provinsi: "Kalimantan Selatan", pulau: "Kalimantan", rtp: 1.10, cagr: 1.50, ikrp: 40.2, kontribusi: 2.1, produksi: 1130, status: "Sentra Utama Stabil" },
  { kode: "64", provinsi: "Kalimantan Timur", pulau: "Kalimantan", rtp: 1.36, cagr: -0.40, ikrp: 53.9, kontribusi: 0.6, produksi: 320, status: "Prioritas Tinggi" },
  { kode: "65", provinsi: "Kalimantan Utara", pulau: "Kalimantan", rtp: 1.25, cagr: 0.20, ikrp: 50.1, kontribusi: 0.2, produksi: 108, status: "Prioritas Sedang" },

  // SULAWESI
  { kode: "71", provinsi: "Sulawesi Utara", pulau: "Sulawesi", rtp: 1.30, cagr: -0.30, ikrp: 52.0, kontribusi: 0.7, produksi: 375, status: "Prioritas Tinggi" },
  { kode: "72", provinsi: "Sulawesi Tengah", pulau: "Sulawesi", rtp: 1.12, cagr: 1.80, ikrp: 41.0, kontribusi: 1.6, produksi: 860, status: "Sentra Utama Stabil" },
  { kode: "73", provinsi: "Sulawesi Selatan", pulau: "Sulawesi", rtp: 1.04, cagr: 2.90, ikrp: 32.5, kontribusi: 9.3, produksi: 5000, status: "Sentra Utama Stabil" },
  { kode: "74", provinsi: "Sulawesi Tenggara", pulau: "Sulawesi", rtp: 1.16, cagr: 0.90, ikrp: 43.8, kontribusi: 0.9, produksi: 484, status: "Prioritas Sedang" },
  { kode: "75", provinsi: "Gorontalo", pulau: "Sulawesi", rtp: 1.14, cagr: 1.20, ikrp: 42.0, kontribusi: 0.5, produksi: 268, status: "Prioritas Sedang" },
  { kode: "76", provinsi: "Sulawesi Barat", pulau: "Sulawesi", rtp: 1.21, cagr: 0.40, ikrp: 47.3, kontribusi: 0.6, produksi: 322, status: "Prioritas Sedang" },

  // MALUKU & PAPUA
  { kode: "81", provinsi: "Maluku", pulau: "Maluku", rtp: 1.40, cagr: -1.00, ikrp: 61.0, kontribusi: 0.2, produksi: 107, status: "Sangat Rentan" },
  { kode: "82", provinsi: "Maluku Utara", pulau: "Maluku", rtp: 1.45, cagr: -1.50, ikrp: 64.2, kontribusi: 0.1, produksi: 53, status: "Sangat Rentan" },
  { kode: "91", provinsi: "Papua", pulau: "Papua", rtp: 1.35, cagr: 0.10, ikrp: 55.0, kontribusi: 0.2, produksi: 108, status: "Prioritas Tinggi" },
  { kode: "92", provinsi: "Papua Barat", pulau: "Papua", rtp: 1.38, cagr: -0.20, ikrp: 57.1, kontribusi: 0.1, produksi: 54, status: "Prioritas Tinggi" },
  { kode: "93", provinsi: "Papua Selatan", pulau: "Papua", rtp: 1.02, cagr: 3.50, ikrp: 31.0, kontribusi: 0.5, produksi: 268, status: "Potensi Sentra Baru" },
  { kode: "94", provinsi: "Papua Tengah", pulau: "Papua", rtp: 1.42, cagr: -0.50, ikrp: 60.0, kontribusi: 0.05, produksi: 27, status: "Prioritas Tinggi" },
  { kode: "95", provinsi: "Papua Pegunungan", pulau: "Papua", rtp: 1.50, cagr: -1.20, ikrp: 68.5, kontribusi: 0.02, produksi: 10, status: "Sangat Rentan" },
  { kode: "96", provinsi: "Papua Barat Daya", pulau: "Papua", rtp: 1.36, cagr: -0.10, ikrp: 56.4, kontribusi: 0.08, produksi: 43, status: "Prioritas Tinggi" }
];

let rtpChartInstance = null;
let matrixChartInstance = null;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    updateLiveClock();
    setInterval(updateLiveClock, 1000);
    renderKPIs();
    renderOverviewTable(dataProvinsi);
    initRtpChart();
    initMatrixChart();
});

function updateLiveClock() {
    const now = new Date();
    document.getElementById('live-clock').innerText = now.toLocaleTimeString('id-ID');
}

function switchPage(pageId, element) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.nav-menu li').forEach(li => li.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');
    element.classList.add('active');

    const titles = {
        'overview-page': ['Ringkasan Ketahanan Pangan', 'Memetakan Kerentanan Regenerasi Petani & Stabilitas Produksi Padi (38 Provinsi)'],
        'rtp-page': ['Data RTP Petani 38 Provinsi', 'Analisis Rasio Pemuda vs Lansia di Sektor Agrikultur'],
        'prioritas-page': ['Matriks Prioritas RegenFarm', 'Pemetaan Kuadran Berdasarkan Kontribusi Produksi & Kerentanan IKRP'],
        'intervensi-page': ['Program Intervensi Strategis', 'Rekomendasi Kebijakan Spesifik Berbasis Status Wilayah']
    };

    if(titles[pageId]) {
        document.getElementById('page-title').innerText = titles[pageId][0];
        document.getElementById('page-subtitle').innerText = titles[pageId][1];
    }
}

function renderKPIs() {
    const avgRTP = (dataProvinsi.reduce((acc, curr) => acc + curr.rtp, 0) / dataProvinsi.length).toFixed(2);
    const avgIKRP = (dataProvinsi.reduce((acc, curr) => acc + curr.ikrp, 0) / dataProvinsi.length).toFixed(1);
    const totalProduksi = (dataProvinsi.reduce((acc, curr) => acc + curr.produksi, 0) / 1000).toFixed(1);
    const p1Count = dataProvinsi.filter(d => ['Sentra Kritis', 'Sangat Rentan'].includes(d.status)).length;

    document.getElementById('kpi-rtp').innerText = `${avgRTP}x`;
    document.getElementById('kpi-ikrp').innerText = avgIKRP;
    document.getElementById('kpi-produksi').innerText = `${totalProduksi} Jt Ton`;
    document.getElementById('kpi-kritis').innerText = `${p1Count} Wilayah`;
}

function renderOverviewTable(data) {
    const tbody = document.getElementById('overviewTableBody');
    tbody.innerHTML = '';

    data.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-family: monospace; color: #64748b;">${item.kode}</td>
            <td style="font-weight: 700;">${item.provinsi}</td>
            <td style="color: #64748b;">${item.pulau}</td>
            <td style="font-weight: 700; color: ${item.rtp > 1.3 ? '#ef4444' : '#1e293b'};">${item.rtp.toFixed(2)}</td>
            <td>${item.produksi.toLocaleString('id-ID')}</td>
            <td style="color: ${item.cagr < 0 ? '#ef4444' : '#10b981'}; font-weight: 600;">
                ${item.cagr > 0 ? '+' : ''}${item.cagr.toFixed(2)}%
            </td>
            <td>${item.ikrp.toFixed(1)}</td>
            <td>${item.kontribusi.toFixed(2)}%</td>
            <td><span class="badge ${getStatusBadgeClass(item.status)}">${item.status}</span></td>
            <td>
                <button class="btn btn-secondary btn-sm" onclick="openModal('${item.kode}')"><i class="fa-solid fa-eye"></i> Detail</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function getStatusBadgeClass(status) {
    switch (status) {
        case 'Sentra Kritis': return 'badge-kritis';
        case 'Sangat Rentan': return 'badge-rentan';
        case 'Prioritas Tinggi': return 'badge-tinggi';
        case 'Prioritas Sedang': return 'badge-sedang';
        case 'Sentra Utama Stabil': return 'badge-stabil';
        case 'Potensi Sentra Baru': return 'badge-potensi';
        default: return '';
    }
}

function applyFilters() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const pulau = document.getElementById('filterPulau').value;
    const status = document.getElementById('filterStatus').value;

    const filtered = dataProvinsi.filter(d => {
        const matchName = d.provinsi.toLowerCase().includes(query);
        const matchPulau = pulau === 'ALL' || d.pulau === pulau;
        const matchStatus = status === 'ALL' || d.status === status;
        return matchName && matchPulau && matchStatus;
    });

    renderOverviewTable(filtered);
}

// Modal System
function openModal(kode) {
    const data = dataProvinsi.find(d => d.kode === kode);
    if (!data) return;

    document.getElementById('modalTitle').innerText = data.provinsi;
    document.getElementById('modalStatusBadge').innerText = data.status;
    document.getElementById('modalStatusBadge').className = `badge ${getStatusBadgeClass(data.status)}`;
    
    document.getElementById('modalRtp').innerText = `${data.rtp.toFixed(2)}x`;
    document.getElementById('modalProduksi').innerText = `${data.produksi.toLocaleString('id-ID')} Ribu Ton`;
    document.getElementById('modalCagr').innerText = `${data.cagr > 0 ? '+' : ''}${data.cagr.toFixed(2)}%`;
    document.getElementById('modalIkrp').innerText = data.ikrp.toFixed(1);

    // Rekomendasi Dinamis
    let reks = {
        'Sentra Kritis': 'Moratorium penataan ruang LP2B, pembentukan kluster Alsintan modern, dan pemberian subsidi KUR Agropreneur khusus untuk generasi muda.',
        'Sangat Rentan': 'Fokus pada substitusi pangan lokal non-beras, penguatan stok buffer logistik antar-pulau, serta penyediaan asuransi iklim.',
        'Prioritas Tinggi': 'Pelatihan teknis intensif bagi petani muda, pendampingan pemasaran digital, dan optimasi sarana irigasi sekunder.',
        'Sentra Utama Stabil': 'Penguatan integrasi industri pengolahan beras, peningkatan nilai tambah limbah pertanian, dan penetrasi jaringan ekspor.',
        'Potensi Sentra Baru': 'Pembukaan lahan ekologis presisi, penyediaan benih tahan kekeringan, dan penguatan lembaga koperasi tani lokal.'
    };

    document.getElementById('modalRekomendasi').innerText = reks[data.status] || 'Penguatan kapasitas kelembagaan tani dan proteksi pasokan lokal.';

    document.getElementById('detailModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('detailModal').style.display = 'none';
}

// Export Data (CSV & JSON)
function exportData(format) {
    if (format === 'json') {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataProvinsi, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "RegenFarm_Data_38_Provinsi.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    } else if (format === 'csv') {
        let csvContent = "data:text/csv;charset=utf-8,Kode,Provinsi,Pulau,RTP,Produksi_RibuTon,CAGR,IKRP,Kontribusi_Persen,Status\n";
        dataProvinsi.forEach(d => {
            csvContent += `${d.kode},"${d.provinsi}","${d.pulau}",${d.rtp},${d.produksi},${d.cagr},${d.ikrp},${d.kontribusi},"${d.status}"\n`;
        });
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "RegenFarm_Data_38_Provinsi.csv");
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
}

// Chart 1: Bar Chart RTP
function initRtpChart() {
    const ctx = document.getElementById('rtpChart').getContext('2d');
    const sortedData = [...dataProvinsi].sort((a, b) => b.rtp - a.rtp);

    rtpChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedData.map(d => d.provinsi),
            datasets: [{
                label: 'Skor RTP',
                data: sortedData.map(d => d.rtp),
                backgroundColor: sortedData.map(d => d.rtp >= 1.4 ? '#ef4444' : d.rtp >= 1.2 ? '#f97316' : '#10b981'),
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { ticks: { font: { size: 9 }, maxRotation: 90, minRotation: 45 } },
                y: { beginAtZero: true, title: { display: true, text: 'Rasio RTP' } }
            }
        }
    });
}

// Chart 2: Scatter Plot Matrix
function initMatrixChart() {
    const ctx = document.getElementById('matrixChart').getContext('2d');

    const statusGroup = ['Sentra Kritis', 'Prioritas Tinggi', 'Prioritas Sedang', 'Sangat Rentan', 'Sentra Utama Stabil', 'Potensi Sentra Baru'];
    const colorMap = {
        'Sentra Kritis': '#ef4444',
        'Prioritas Tinggi': '#f97316',
        'Prioritas Sedang': '#eab308',
        'Sangat Rentan': '#a855f7',
        'Sentra Utama Stabil': '#10b981',
        'Potensi Sentra Baru': '#14b8a6'
    };

    const datasets = statusGroup.map(st => ({
        label: st,
        data: dataProvinsi.filter(d => d.status === st).map(d => ({ x: d.kontribusi, y: d.ikrp, r: d.rtp * 6, name: d.provinsi })),
        backgroundColor: colorMap[st]
    }));

    matrixChartInstance = new Chart(ctx, {
        type: 'bubble',
        data: { datasets },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(ctx) {
                            const raw = ctx.raw;
                            return `${raw.name}: (Kontribusi: ${raw.x}%, IKRP: ${raw.y})`;
                        }
                    }
                }
            },
            scales: {
                x: { title: { display: true, text: 'Kontribusi Produksi Padi (%)' }, beginAtZero: true },
                y: { title: { display: true, text: 'Indeks Kerentanan Pangan (IKRP)' }, beginAtZero: true }
            }
        }
    });
}