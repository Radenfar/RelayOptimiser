const swimmers = [
    { Swimmer: "Paul Ames", Age: 56, Gender: "M", Fly50: 35.31, Back50: 37.96, Breast50: 38.15, Free50: 30.93 },
    { Swimmer: "Alex Baird", Age: 29, Gender: "M", Fly50: 28.46, Back50: 30.44, Breast50: 39.5, Free50: 26.43 },
    { Swimmer: "Graeme Bennett", Age: 66, Gender: "M", Fly50: 999.99, Back50: 999.99, Breast50: 47.19, Free50: 37.5 },
    { Swimmer: "Amy Carlin", Age: 46, Gender: "W", Fly50: 999.99, Back50: 60.22, Breast50: 61.53, Free50: 47.19 },
    { Swimmer: "Adam Comer", Age: 24, Gender: "M", Fly50: 31.85, Back50: 34, Breast50: 39.18, Free50: 27.53 },
    { Swimmer: "Rob Corne", Age: 68, Gender: "M", Fly50: 48.22, Back50: 50.34, Breast50: 50.22, Free50: 45 },
    { Swimmer: "Barbara Daw", Age: 75, Gender: "W", Fly50: 999.99, Back50: 59, Breast50: 53.99, Free50: 47.63 },
    { Swimmer: "Fayth Doherty", Age: 24, Gender: "W", Fly50: 37.21, Back50: 40, Breast50: 50, Free50: 31.9 },
    { Swimmer: "David Gribble", Age: 48, Gender: "M", Fly50: 31.23, Back50: 999.99, Breast50: 36, Free50: 28.74 },
    { Swimmer: "Lucy Hannah", Age: 55, Gender: "W", Fly50: 999.99, Back50: 999.99, Breast50: 999.99, Free50: 999.99 },
    { Swimmer: "Lucy Happe", Age: 28, Gender: "W", Fly50: 35.5, Back50: 36.52, Breast50: 999.99, Free50: 29.38 },
    { Swimmer: "Thomas James", Age: 34, Gender: "M", Fly50: 28.92, Back50: 31.6, Breast50: 999.99, Free50: 28.5 },
    { Swimmer: "Graham Leach", Age: 89, Gender: "M", Fly50: 55, Back50: 999.99, Breast50: 999.99, Free50: 43.88 },
    { Swimmer: "Hong Lee", Age: 42, Gender: "M", Fly50: 999.99, Back50: 999.99, Breast50: 42.12, Free50: 39 },
    { Swimmer: "Michelle Lockhart", Age: 64, Gender: "W", Fly50: 40.5, Back50: 46, Breast50: 47.28, Free50: 35 },
    { Swimmer: "Eugene Manko", Age: 58, Gender: "M", Fly50: 31.7, Back50: 34, Breast50: 36.46, Free50: 28.27 },
    { Swimmer: "Brenda Martin", Age: 56, Gender: "W", Fly50: 999.99, Back50: 999.99, Breast50: 999.99, Free50: 999.99 },
    { Swimmer: "Graeme Martin", Age: 60, Gender: "M", Fly50: 999.99, Back50: 999.99, Breast50: 999.99, Free50: 999.99 },
    { Swimmer: "Barrett Quinn", Age: 52, Gender: "M", Fly50: 999.99, Back50: 999.99, Breast50: 999.99, Free50: 999.99 },
    { Swimmer: "Ash Raja", Age: 59, Gender: "M", Fly50: 34.8, Back50: 37.81, Breast50: 41.44, Free50: 35 },
    { Swimmer: "Tayla Ranger", Age: 24, Gender: "W", Fly50: 999.99, Back50: 41.52, Breast50: 49.92, Free50: 38.49 },
    { Swimmer: "Ann Rogerson", Age: 70, Gender: "W", Fly50: 999.99, Back50: 999.99, Breast50: 999.99, Free50: 50 },
    { Swimmer: "Shelley Rowland", Age: 54, Gender: "W", Fly50: 32.19, Back50: 36.47, Breast50: 44, Free50: 31.22 },
    { Swimmer: "Reuben Schuitemaker", Age: 29, Gender: "M", Fly50: 36.21, Back50: 38, Breast50: 999.99, Free50: 30.35 },
    { Swimmer: "Kyla Steenhart", Age: 47, Gender: "W", Fly50: 999.99, Back50: 40.02, Breast50: 35.82, Free50: 30.25 },
    { Swimmer: "Clarence Tai", Age: 30, Gender: "M", Fly50: 34.75, Back50: 999.99, Breast50: 41, Free50: 31.25 },
    { Swimmer: "Jeremiah Teo", Age: 31, Gender: "M", Fly50: 33, Back50: 33.5, Breast50: 31.5, Free50: 29 },
    { Swimmer: "Marcus Thieme", Age: 45, Gender: "M", Fly50: 32.86, Back50: 33.86, Breast50: 39.43, Free50: 28.13 },
    { Swimmer: "Edwin Tsang", Age: 30, Gender: "M", Fly50: 32.5, Back50: 34, Breast50: 999.99, Free50: 29 },
    { Swimmer: "Nina Veal", Age: 52, Gender: "W", Fly50: 37.5, Back50: 41.88, Breast50: 40.88, Free50: 32.5 },
    { Swimmer: "Penelope Virtosu", Age: 32, Gender: "W", Fly50: 999.99, Back50: 999.99, Breast50: 999.99, Free50: 999.99 },
    { Swimmer: "Henry Wiseman", Age: 29, Gender: "M", Fly50: 30.37, Back50: 33.96, Breast50: 33.74, Free50: 26 },
    { Swimmer: "Honglei Zhang", Age: 46, Gender: "M", Fly50: 51.15, Back50: 50.03, Breast50: 43.97, Free50: 34.25 }
];


/**
 * Logs a swimmer object in a formatted line.
 * @param {Object} swim_obj - Swimmer object
 */
function log_swimmer_object(swim_obj) {
    console.log(
        `${swim_obj.Swimmer} | Age: ${swim_obj.Age} | Gender: ${swim_obj.Gender} | Times: Fly = ${swim_obj.Fly50}s, Back = ${swim_obj.Back50}s, Breast = ${swim_obj.Breast50}s, Free = ${swim_obj.Free50}s.`
    );
}


/**
 * Logs a generic medley relay (Back, Breast, Fly, Free) with timing.
 * @param {Object} relay_team - Mapping stroke to swimmer
 */
function log_relay(relay_team) {
    let total = 0;
    [["Back","Back50"],["Breast","Breast50"],["Fly","Fly50"],["Free","Free50"]]
        .forEach(([stroke,key],i) => {
            const s = relay_team[stroke];
            console.log(`${i+1}. ${stroke}: ${s.Swimmer} | Age: ${s.Age} | Gender: ${s.Gender} | Time: ${s[key]}s`);
            total += s[key];
        });
    const m = Math.floor(total/60);
    const sec = (total%60).toFixed(2);
    console.log(`Estimated time: ${m}:${sec}`);
    console.log("");
}


/**
 * Logs a freestyle relay (array of swimmers with Free50 times).
 * @param {Array<Object>} relay_arr - Array of swimmer objects
 */
function log_monahan(relay_arr) {
    let total = 0;
    relay_arr.forEach((s, idx) => {
        console.log(
            `${idx+1}. ${s.Swimmer} | Age: ${s.Age} | Gender: ${s.Gender} | ` +
            `Time: ${s.Free50}s`
        );
        total += s.Free50;
    });
    const minutes = Math.floor(total / 60);
    const seconds = (total % 60).toFixed(2);
    console.log(`Estimated time: ${minutes}:${seconds}`);
    console.log("");
}


/**
 * Logs a fly relay (array of swimmers with Fly50 times).
 * @param {Array<Object>} relay_arr - Array of swimmer objects
 */
function log_stewart(relay_arr) {
    let total = 0;
    relay_arr.forEach((s, idx) => {
        console.log(
            `${idx+1}. ${s.Swimmer} | Age: ${s.Age} | Gender: ${s.Gender} | ` +
            `Time: ${s.Fly50}s`
        );
        total += s.Fly50;
    });
    const minutes = Math.floor(total / 60);
    const seconds = (total % 60).toFixed(2);
    console.log(`Estimated time: ${minutes}:${seconds}`);
    console.log("");
}


/**
 * Returns the top-n fastest swimmers for a given stroke and gender.
 * Defaults to the global `swimmers` if no pool is provided.
 * @param {number} n
 * @param {'Fly'|'Back'|'Breast'|'Free'} stroke
 * @param {'M'|'W'} gender
 * @param {Array<Object>} [pool=swimmers]
 * @returns {Array<Object>}
 */
function get_n_fastest(n, stroke, gender, pool = swimmers) {
    const key = `${stroke}50`;
    return pool
        .filter(s => s.Gender === gender)
        .filter(s => s[key] !== undefined)
        .sort((a, b) => a[key] - b[key])
        .slice(0, n);
}


/**
 * Finds the optimal 6-person Ted Stewart relay team:
 * - 3 Men, 3 Women
 * - Minimizes combined Fly50
 * @param {Array<Object>} [pool=swimmers]
 * @returns {Array<Object>}
 */
function optimal_stewart(pool = swimmers) {
    const men = get_n_fastest(3, 'Fly', 'M', pool);
    const women = get_n_fastest(3, 'Fly', 'W', pool);
    return men.concat(women);
}


/**
 * Finds the optimal 4-person Joan Monahan relay team:
 * - 2 Men, 2 Women
 * - Total age >= 200
 * - Minimizes combined Free50
 * @param {Array<Object>} [pool=swimmers]
 * @returns {Array<Object>}
 */
function optimal_monahan(pool = swimmers) {
    const men = pool.filter(s => s.Gender === 'M');
    const women = pool.filter(s => s.Gender === 'W');
    let best = { team: [], time: Infinity };
    for (let i=0; i<men.length; i++) {
        for (let j=i+1; j<men.length; j++) {
            for (let k=0; k<women.length; k++) {
                for (let l=k+1; l<women.length; l++) {
                    const team = [men[i], men[j], women[k], women[l]];
                    const ageSum = team.reduce((sum,s) => sum+s.Age, 0);
                    if (ageSum < 200) continue;
                    const timeSum = team.reduce((sum,s) => sum+s.Free50, 0);
                    if (timeSum < best.time) best = { team, time: timeSum };
                }
            }
        }
    }
    return best.team;
}


/**
 * Finds the optimal 4x50 medley relay for a given gender:
 * - 1 Back, 1 Breast, 1 Fly, 1 Free
 * - Minimizes combined stroke times
 * @param {'M'|'W'} gender
 * @param {Array<Object>} [pool=swimmers]
 * @returns {Object}
 */
function optimal_medley(gender, pool = swimmers) {
    const roster = pool.filter(s => s.Gender === gender);
    let best = { combo: null, time: Infinity };
    for (const b of roster) {
        for (const br of roster) {
            if (br === b) continue;
            for (const f of roster) {
                if (f === b || f === br) continue;
                for (const fr of roster) {
                    if (fr===b || fr===br || fr===f) continue;
                    const timeSum = b.Back50 + br.Breast50 + f.Fly50 + fr.Free50;
                    if (timeSum < best.time) best = {
                        combo: { Back: b, Breast: br, Fly: f, Free: fr },
                        time: timeSum
                    };
                }
            }
        }
    }
    return best.combo;
}


/**
 * Selects the best team from `pool` by calling `relayFn`, returning an array of swimmers.
 */
function pickBest(relayFn,pool){
    const raw = relayFn(pool);
    const arr = Array.isArray(raw)?raw:Object.values(raw);
    return {raw,arr};
}


/**
 * Builds A, B, C squads for any relay function.
 * @param {Function} relayFn - One of the optimiser functions
 * @param {string} label - Relay name for logging
 * @param {Array<Object>} roster - Base pool
 */
function pickABC(relayFn,label,roster){
    let pool=roster.slice();
    console.log(`\n${label} Relay Teams:\n------------------------------------------`);
    ['A','B','C'].forEach(sq=>{
        const {raw,arr} = pickBest(relayFn,pool);
        console.log(`${label} Team ${sq}:`);
        if(label==='Ted Stewart') log_stewart(arr);
        else if(label==='Joan Monahan') log_monahan(arr);
        else log_relay(raw);
        // remove selected
        const names=new Set(arr.map(s=>s.Swimmer));
        pool=pool.filter(s=>!names.has(s.Swimmer));
    });
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------> MAIN ROUTINE
pickABC(optimal_stewart, 'Ted Stewart', swimmers);
pickABC(optimal_monahan, 'Joan Monahan', swimmers);
pickABC(pool=>optimal_medley('M',pool), "Men's Medley", swimmers);
pickABC(pool=>optimal_medley('W',pool), "Women's Medley", swimmers);
