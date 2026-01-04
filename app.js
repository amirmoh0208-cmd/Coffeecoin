const STORAGE_KEY = "coffeecoin_demo_v1";

function loadState(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(raw) return JSON.parse(raw);
  // default demo state
  return {
    customers: {
      "AMIR": { name: "Amir", balance: 2 },
      "SARA": { name: "Sara", balance: 4 }
    },
    rules: { earnPerPurchase: 1, redeemCost: 5 },
    tx: informingSeedTx()
  };
}

function saveState(state){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function informingSeedTx(){
  return [{
    id: crypto.randomUUID(),
    time: new Date().toISOString(),
    type: "INIT",
    customerId: "SARA",
    delta: 4,
    note: "Seed demo data"
  },{
    id: crypto.randomUUID(),
    time: new Date().toISOString(),
    type: "INIT",
    customerId: "AMIR",
    delta: 2,
    note: "Seed demo data"
  }];
}

function showToast(msg){
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(()=> el.classList.add("show"), 10);
  setTimeout(()=>{
    el.classList.remove("show");
    setTimeout(()=> el.remove(), 300);
  }, 2200);
}

function formatTime(iso){
  const d = new Date(iso);
  return d.toLocaleString();
}

function resetDemo(){
  localStorage.removeItem(STORAGE_KEY);
}
