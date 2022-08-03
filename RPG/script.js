class Players {
    constructor(id, username, level, experience, experience_pool, inventory = [], item_history = []) {
        this.id = id;
        this.username = username;
        this.level = level;
        this.experience = experience;
        this.experience_pool = experience_pool;
        this.inventory = inventory;
        this.item_history = item_history;
    }
}

class Skills {
    /* 
     *
     * Tiap skill bisa dapat loot
     * cth:
     * 1. fishing = fish yang ada rarity tapi ada chance gagal
     * 2. harvest = ada rarity jg
     * 3. hunting = ada rarity tapi ada chance gagal
     * 
     */
    constructor(id, name, experience_points, cooldown) {
        this.id = id;
        this.name = name;
        this.experience_points = experience_points;
        this.cooldown = cooldown;
    }
}

const unat = new Players(1, "unat", 1, 0, 1000, [], []);

const fishing = new Skills(1, "Fishing", 100, 200);
const harvest = new Skills(2, "Harvest", 50, 150);
const hunting = new Skills(3, "Hunting", 200, 300);
document.getElementById("skill1").innerHTML = fishing.name;
document.getElementById("skill2").innerHTML = harvest.name;
document.getElementById("skill3").innerHTML = hunting.name;

document.getElementById('player').innerHTML = unat.username + "<br> Level: " + unat.level;

// inventory
var inv = 0;
document.getElementById("btn-inventory").innerHTML = "Check Inventory";
document.getElementById('btn-inventory').onclick = function showInventory() {
    console.table(unat.inventory)
    // buat jg UI inventorynya
    // jadi tinggal loop button sebanyak isi inventory nya
    if(inv == 0) {
        for(let i = 0; i < unat.inventory.length; i++) {
            var ele = document.createElement('button')
            ele.appendChild(document.createTextNode(unat.inventory[i]));
            document.getElementById('inventory').appendChild(ele);
            inv++;
        }
    } else {
        for(inv; inv < unat.inventory.length; inv++) {
            var ele = document.createElement('button')
            ele.appendChild(document.createTextNode(unat.inventory[inv]));
            document.getElementById('inventory').appendChild(ele);
        }
    }
};


// inventory ended here

// skill buttons
document.getElementById('skill1').onclick = function do_skill() {
    var skill = document.getElementById('skill1').textContent;
    if(skill == "Fishing") {
        cooldown_progress(fishing.cooldown, fishing.name);
        unat.experience += fishing.experience_points;
        move(fishing.cooldown);
        level_bar(unat.experience, unat.experience_pool);
        refresh();
        setTimeout(() => {
            fish();
        }, fishing.cooldown*100);
    } else if(skill == "Harvest") {
        cooldown_progress(harvest.cooldown, harvest.name);
        unat.experience += harvest.experience_points;
        move(harvest.cooldown);
        level_bar(unat.experience, unat.experience_pool);
        refresh();
    } else if(skill == "Hunting") {
        cooldown_progress(hunting.cooldown, hunting.name);
        unat.experience += hunting.experience_points;
        move(hunting.cooldown);
        level_bar(unat.experience, unat.experience_pool);
        refresh();
    }
};
document.getElementById('skill2').onclick = function do_skill() {
    var skill = document.getElementById('skill2').textContent;
    if(skill == "Fishing") {
        cooldown_progress(fishing.cooldown, fishing.name);
        unat.experience += fishing.experience_points;
        move(fishing.cooldown);
        level_bar(unat.experience, unat.experience_pool);
        refresh();
    } else if(skill == "Harvest") {
        cooldown_progress(harvest.cooldown, harvest.name);
        unat.experience += harvest.experience_points;
        move(harvest.cooldown);
        level_bar(unat.experience, unat.experience_pool);
        refresh();
    } else if(skill == "Hunting") {
        cooldown_progress(hunting.cooldown, hunting.name);
        unat.experience += hunting.experience_points;
        move(hunting.cooldown);
        level_bar(unat.experience, unat.experience_pool);
        refresh();
    }
};
document.getElementById('skill3').onclick = function do_skill() {
    var skill = document.getElementById('skill3').textContent;
    if(skill == "Fishing") {
        cooldown_progress(fishing.cooldown, fishing.name);
        unat.experience += fishing.experience_points;
        move(fishing.cooldown);
        level_bar(unat.experience, unat.experience_pool);
        refresh();
    } else if(skill == "Harvest") {
        cooldown_progress(harvest.cooldown, harvest.name);
        unat.experience += harvest.experience_points;
        move(harvest.cooldown);
        level_bar(unat.experience, unat.experience_pool);
        refresh();
    } else if(skill == "Hunting") {
        cooldown_progress(hunting.cooldown, hunting.name);
        unat.experience += hunting.experience_points;
        move(hunting.cooldown);
        level_bar(unat.experience, unat.experience_pool);
        refresh();
    }
};
// skill buttons ended here

// progress bar
function move(cd) {
    var i = 0;
    if(i == 0) {
        i = 1;
        var elem = document.getElementById("cooldown-bar");
        var width = 1;
        var id = setInterval(frame, cd);
        function frame() {
            if(width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}
// progress bar ended here

// cooldown progress
function cooldown_progress(cd, name) {
    document.getElementById("skill1").disabled = true;
    document.getElementById("skill2").disabled = true;
    document.getElementById("skill3").disabled = true;
    setTimeout(function() {
        document.getElementById("skill1").disabled = false;
        document.getElementById("skill2").disabled = false;
        document.getElementById("skill3").disabled = false;
        // window.alert(name + " sudah selesai. Skill yang lain sudah bisa digunakan.")
    }, cd*100)
}
// cooldown progress ended here

// level bar
function level_bar(unat_exp, unat_pool) {
    var elem = document.getElementById("current-experience");
    elem.style.width = (unat_exp/unat_pool) * 100 + "%";
}
// level bar ended here

// skills
function fish() {
    // chance ketika mancing
    var chance = Math.floor(Math.random() * 100);
    if(chance == 100) {
        unat.inventory.push("Gold Arowana")
        unat.item_history.push("Gold Arowana")
        window.alert("Selamat anda mendapatkan ikan Gold Arowana!");
    } else if(chance > 95) {
        var chance_2 = Math.floor(Math.random() * 10);
        if (chance_2 > 8) {
            unat.inventory.push("100gr of Gold")
            unat.item_history.push("100gr of Gold")
            window.alert("Selamat anda mendapatkan 100gr of Gold!!!");
        } else {
            unat.inventory.push("Arowana")
            unat.item_history.push("Arowana")
            window.alert("Selamat anda mendapatkan ikan Arowana!");
        }
    } else if(chance > 80) {
        var chance_2 = Math.floor(Math.random() * 10);
        if (chance_2 > 8) {
            unat.inventory.push("Yellow Fin Tuna")
            unat.item_history.push("Yellow Fin Tuna")
            window.alert("Selamat anda mendapatkan ikan Yellow Fin Tuna!");
        } else {
            unat.inventory.push("Snapper")
            unat.item_history.push("Snapper")
            window.alert("Selamat anda mendapatkan ikan Snapper!"); 
        }
    } else if(chance > 50) {
        var chance_2 = Math.floor(Math.random() * 10);
        if (chance_2 > 8) {
            unat.inventory.push("Water breathing duck??")
            unat.item_history.push("Water breathing duck??")
            window.alert("Selamat anda mendapatkan Water breathing duck??!");
        } else {
            unat.inventory.push("Catfish")
            unat.item_history.push("Catfish")
        window.alert("Selamat anda mendapatkan ikan Catfish!");
        }
    } else {
        var chance_2 = Math.floor(Math.random() * 10);
        if(chance_2 > 9) {
            unat.inventory.push("Broken SEIKO Watch")
            unat.item_history.push("Broken SEIKO Watch")
            window.alert("Selamat anda mendapatkan Broken SEIKO Watch!");
        } else if(chance_2 > 6) {
            unat.inventory.push("Bottle")
            unat.item_history.push("Bottle")
            window.alert("Selamat anda mendapatkan Bottle!");
        } else if(chance_2 > 3) {
            unat.inventory.push("Dead Mouse")
            unat.item_history.push("Dead Mouse")
            window.alert("Selamat anda mendapatkan Dead Mouse!");
        } else if(chance_2 > 0) {
            unat.inventory.push("Boots")
            unat.item_history.push("Boots")
            window.alert("Selamat anda mendapatkan Boots!");
        }
    }
}
function harv() {
    // pake seed?
    // harus ada sistem inventory dulu
}
function hunt() {
    // pilih hunt apa?
    // habis itu ada chance berhasilnya
}
//skills ended her

// sistem achievement

// Why are you collecting the deads ?!?!
var deadmouse_counter = 0;
// Doing the good deeds to the sea. Nice
var trash_counter = 0;
// What a catch!! WOW!
var goldarowana_counter = 0;
// Gold Expert
var gold_counter = 0;
// I got myself a car!
var arowana_counter = 0;
// I'll make myself a sushi!
// Sushi Master!!!
var tuna_counter = 0;
// Congratulations You just catch a Pokemon!!
// Pokemon Master!
var waterbreathingduck_counter = 0;
// Good time to fish huh?
var seikowatch_counter = 0;
function achievements() {
    for(let i = 0; i < unat.item_history.length; i++) {
        if(unat.item_history[i] == "Gold Arowana") {
            goldarowana_counter++;
        } else if(unat.item_history[i] == "100gr of Gold") {
            gold_counter++;
        } else if(unat.item_history[i] == "Boots" || unat.item_history[i] == "Bottle") {
            trash_counter++;
        } else if(unat.item_history[i] == "Yellow Fin Tuna") {
            tuna_counter++;
        } else if(unat.item_history[i] == "Water breathing duck??") {
            waterbreathingduck_counter++;
        } else if(unat.item_history[i] == "Broken SEIKO Watch") {
            seikowatch_counter++;
        } else if(unat.item_history[i] == "Dead Mouse") {
            deadmouse_counter++;
        }
        console.log("deadmouse" + deadmouse_counter)
        console.log("trash" + trash_counter)
        console.log("gold aro" + goldarowana_counter)
        console.log("gold" + gold_counter)
        console.log("aro" + arowana_counter)
        console.log("tuna" + tuna_counter)
        console.log("pokemon" + waterbreathingduck_counter)
        console.log("seiko" + seikowatch_counter)
    }
    
    if(goldarowana_counter == 1) {
        console.log("What a catch!! WOW!")
    } else if(gold_counter == 1) {
        console.log("Gold Expert")
    } else if(trash_counter == 2) {
        console.log("Doing the good deeds to the sea. Nice")
    } else if(tuna_counter == 1) {
        console.log("I'll make myself a sushi!")
    } else if(tuna_counter == 10) {
        console.log("Sushi Master!!!")
    } else if(waterbreathingduck_counter == 1) {
        console.log("Congratulations You just catch a Pokemon!!")
    } else if(waterbreathingduck_counter == 10) {
        console.log("Pokemon Master!")
    } else if(seikowatch_counter == 1) {
        console.log("Good time to fish huh?")
    } else if(deadmouse_counter == 2) {
        console.log("Why are you collecting the deads ?!?!")
    }
}

// sistem achievement ended here

function refresh() {
    if(unat.experience >= unat.experience_pool) {
        let exp_sisa = unat.experience - unat.experience_pool;
        unat.level += 1;
        unat.experience = exp_sisa;
        if(unat.level > 10) {
            unat.experience_pool += unat.level * 350;
        } else if(unat.level > 5) {
            unat.experience_pool += unat.level * 150;
        } else if(unat.level > 2) {
            unat.experience_pool += unat.level * 125;
        } else {
            unat.experience_pool += unat.level * 75;
        }
    }
    achievements();
    level_bar(unat.experience, unat.experience_pool);
    console.table(unat);
    document.getElementById('player').innerHTML = unat.username + "<br> Level: " + unat.level;    
}
