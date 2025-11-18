const prod4 = document.getElementById('prod4');
const prod5_5 = document.getElementById('prod5.5');
const prod8 = document.getElementById('prod8');
const calculateBtn = document.getElementById('calculateBtn');

const plastiquePech4 = document.getElementById('plastique-pech4');
const plastiqueProm5_5 = document.getElementById('plastique-prom5.5');
const plastiqueStan8 = document.getElementById('plastique-stan8');
const totalPlastique = document.getElementById('total-plastique');

const boisPech4 = document.getElementById('bois-pech4');
const boisProm5_5 = document.getElementById('bois-prom5.5');
const boisStan8 = document.getElementById('bois-stan8');
const totalBois = document.getElementById('total-bois');

const heureMoulPech4 = document.getElementById('heure-moul-pech4');
const heureMoulProm5_5 = document.getElementById('heure-moul-prom5.5');
const heureMoulStan8 = document.getElementById('heure-moul-stan8');
const totalHeureMoul = document.getElementById('total-heure-moul');
const totalHeureMoulMachine = document.getElementById('total-heure-moul-machine');

const heureFiniPech4 = document.getElementById('heure-fini-pech4');
const heureFiniProm5_5 = document.getElementById('heure-fini-prom5.5');
const heureFiniStan8 = document.getElementById('heure-fini-stan8');
const totalHeureFini = document.getElementById('total-heure-fini');
const totalHeureFiniMachine = document.getElementById('total-heure-fini-machine');

calculateBtn.addEventListener('click', () => {
    plastiquePech4.textContent = (prod4.value * 0.2).toFixed(2);
    plastiqueProm5_5.textContent = (prod5_5.value * 0.4).toFixed(2);
    plastiqueStan8.textContent = (prod8.value * 1).toFixed(2);
    totalPlastique.textContent = (parseFloat(plastiquePech4.textContent) + parseFloat(plastiqueProm5_5.textContent) + parseFloat(plastiqueStan8.textContent)).toFixed(2);

    boisPech4.textContent = (prod4.value * 0.1).toFixed(2);
    boisProm5_5.textContent = (prod5_5.value * 0.2).toFixed(2);
    boisStan8.textContent = (prod8.value * 0.5).toFixed(2);
    totalBois.textContent = (parseFloat(boisPech4.textContent) + parseFloat(boisProm5_5.textContent) + parseFloat(boisStan8.textContent)).toFixed(2);

    heureMoulPech4.textContent = (prod4.value * 8).toFixed(2);
    heureMoulProm5_5.textContent = (prod5_5.value * 12).toFixed(2);
    heureMoulStan8.textContent = (prod8.value * 28).toFixed(2);
    const totalMoul = parseFloat(heureMoulPech4.textContent) + parseFloat(heureMoulProm5_5.textContent) + parseFloat(heureMoulStan8.textContent);
    totalHeureMoul.textContent = totalMoul.toFixed(2);
    totalHeureMoulMachine.textContent = (totalMoul / 12).toFixed(2);

    heureFiniPech4.textContent = (prod4.value * 10).toFixed(2);
    heureFiniProm5_5.textContent = (prod5_5.value * 14).toFixed(2);
    heureFiniStan8.textContent = (prod8.value * 28).toFixed(2);
    const totalFini = parseFloat(heureFiniPech4.textContent) + parseFloat(heureFiniProm5_5.textContent) + parseFloat(heureFiniStan8.textContent);
    totalHeureFini.textContent = totalFini.toFixed(2);
    totalHeureFiniMachine.textContent = (totalFini / 12).toFixed(2);
});