let mapInstance = null;
let currentMarker = null;

document.addEventListener('DOMContentLoaded', () => {
    initDropdown();
    setupEventListeners();
    updateDashboard(gulfCarriersData[0].id);
});

function initDropdown() {
    const selector = document.getElementById('airline-select');
    gulfCarriersData.forEach(carrier => {
        const option = document.createElement('option');
        option.value = carrier.id;
        option.textContent = carrier.name;
        selector.appendChild(option);
    });
}

function setupEventListeners() {
    const selector = document.getElementById('airline-select');
    selector.addEventListener('change', (e) => {
        updateDashboard(e.target.value);
    });
}

function updateDashboard(carrierId) {
    const carrier = gulfCarriersData.find(c => c.id === carrierId);
    if (!carrier) return;

    document.getElementById('airline-name').textContent = carrier.name;
    document.getElementById('airline-country').textContent = carrier.country;
    
    // Core Logo Setup with fallback logic
    const logoBox = document.getElementById('logo-box');
    logoBox.innerHTML = `<img id="airline-logo" src="${carrier.logoUrl}" alt="${carrier.name} Logo" class="airline-logo">`;
    
    const logoImg = document.getElementById('airline-logo');
    logoImg.onerror = function() {
        const initials = carrier.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        logoBox.innerHTML = `<div class="logo-fallback">${initials}</div>`;
    };

    document.getElementById('country-flag').src = carrier.flagUrl;
    
    // Numbers
    document.getElementById('stat-total-fleet').textContent = carrier.fleetSummary.total;
    document.getElementById('stat-destinations').textContent = carrier.destinationsCount;
    document.getElementById('stat-airbus').textContent = carrier.fleetSummary.airbus;
    document.getElementById('stat-boeing').textContent = carrier.fleetSummary.boeing;
    
    document.getElementById('hub-name').textContent = `${carrier.hubAirport.name} (${carrier.hubAirport.code})`;
    document.getElementById('alliance-name').textContent = carrier.alliance;

    // Load Specific Fleet Row Cards
    const fleetListContainer = document.getElementById('fleet-list');
    fleetListContainer.innerHTML = '';
    
    carrier.specificFleet.forEach(item => {
        const div = document.createElement('div');
        const makeClass = item.model.toLowerCase().includes('airbus') ? 'airbus' : 'boeing';
        div.className = `aircraft-item ${makeClass}`;
        div.innerHTML = `
            <span class="ac-name">${item.model}</span>
            <span class="ac-count">${item.count}</span>
        `;
        fleetListContainer.appendChild(div);
    });

    updateMap(carrier.hubAirport.coordinates, `${carrier.name} Hub: ${carrier.hubAirport.code}`);
}

function updateMap(coords, popupText) {
    if (!mapInstance) {
        mapInstance = L.map('map').setView(coords, 10);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
        }).addTo(mapInstance);
    } else {
        mapInstance.flyTo(coords, 10, { duration: 1.5 });
    }

    if (currentMarker) {
        mapInstance.removeLayer(currentMarker);
    }

    currentMarker = L.marker(coords).addTo(mapInstance)
        .bindPopup(`<strong>${popupText}</strong>`)
        .openPopup();
}