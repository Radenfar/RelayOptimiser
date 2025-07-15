import pulp

# Swimmer data
swimmers = [
    {"Swimmer": "Paul Ames", "Age": 56, "Gender": "M", "Fly50": 35.31, "Back50": 37.96, "Breast50": 38.15, "Free50": 30.93},
    {"Swimmer": "Alex Baird", "Age": 29, "Gender": "M", "Fly50": 28.46, "Back50": 30.44, "Breast50": 39.5,  "Free50": 26.43},
    {"Swimmer": "Graeme Bennett", "Age": 66, "Gender": "M", "Fly50": 999.99, "Back50": 999.99, "Breast50": 47.19, "Free50": 37.5},
    {"Swimmer": "Amy Carlin", "Age": 46, "Gender": "W", "Fly50": 999.99, "Back50": 60.22, "Breast50": 61.53, "Free50": 47.19},
    {"Swimmer": "Adam Comer", "Age": 24, "Gender": "M", "Fly50": 31.85, "Back50": 34,    "Breast50": 39.18, "Free50": 27.53},
    {"Swimmer": "Rob Corne", "Age": 68, "Gender": "M", "Fly50": 48.22, "Back50": 50.34, "Breast50": 50.22, "Free50": 45},
    {"Swimmer": "Barbara Daw", "Age": 75, "Gender": "W", "Fly50": 999.99, "Back50": 59,    "Breast50": 53.99, "Free50": 47.63},
    {"Swimmer": "Fayth Doherty", "Age": 24, "Gender": "W", "Fly50": 37.21, "Back50": 40,    "Breast50": 50,    "Free50": 31.9},
    {"Swimmer": "David Gribble", "Age": 48, "Gender": "M", "Fly50": 31.23, "Back50": 999.99, "Breast50": 36,    "Free50": 28.74},
    {"Swimmer": "Lucy Hannah", "Age": 55, "Gender": "W", "Fly50": 999.99, "Back50": 999.99, "Breast50": 999.99, "Free50": 999.99},
    {"Swimmer": "Lucy Happe", "Age": 28, "Gender": "W", "Fly50": 35.5,  "Back50": 36.52, "Breast50": 999.99, "Free50": 29.38},
    {"Swimmer": "Thomas James","Age": 34, "Gender": "M", "Fly50": 28.92, "Back50": 31.6,  "Breast50": 999.99, "Free50": 28.5},
    {"Swimmer": "Graham Leach","Age": 89, "Gender": "M", "Fly50": 55,    "Back50": 999.99, "Breast50": 999.99, "Free50": 43.88},
    {"Swimmer": "Hong Lee",   "Age": 42, "Gender": "M", "Fly50": 999.99, "Back50": 999.99, "Breast50": 42.12, "Free50": 39},
    {"Swimmer": "Michelle Lockhart","Age": 64, "Gender": "W", "Fly50": 40.5,  "Back50": 46,    "Breast50": 47.28, "Free50": 35},
    {"Swimmer": "Eugene Manko","Age": 58, "Gender": "M", "Fly50": 31.7,  "Back50": 34,    "Breast50": 36.46, "Free50": 28.27},
    {"Swimmer": "Brenda Martin","Age": 56, "Gender": "W", "Fly50": 999.99, "Back50": 999.99, "Breast50": 999.99, "Free50": 999.99},
    {"Swimmer": "Graeme Martin","Age": 60, "Gender": "M", "Fly50": 999.99, "Back50": 999.99, "Breast50": 999.99, "Free50": 999.99},
    {"Swimmer": "Barrett Quinn","Age": 52, "Gender": "M", "Fly50": 999.99, "Back50": 999.99, "Breast50": 999.99, "Free50": 999.99},
    {"Swimmer": "Ash Raja",    "Age": 59, "Gender": "M", "Fly50": 34.8,  "Back50": 37.81, "Breast50": 41.44, "Free50": 35},
    {"Swimmer": "Tayla Ranger","Age": 24, "Gender": "W", "Fly50": 999.99, "Back50": 41.52, "Breast50": 49.92, "Free50": 38.49},
    {"Swimmer": "Ann Rogerson","Age": 70, "Gender": "W", "Fly50": 999.99, "Back50": 999.99, "Breast50": 999.99, "Free50": 50},
    {"Swimmer": "Shelley Rowland","Age": 54, "Gender": "W", "Fly50": 32.19, "Back50": 36.47, "Breast50": 44,    "Free50": 31.22},
    {"Swimmer": "Reuben Schuitemaker","Age": 29, "Gender": "M", "Fly50": 36.21, "Back50": 38,    "Breast50": 999.99, "Free50": 30.35},
    {"Swimmer": "Kyla Steenhart","Age": 47, "Gender": "W", "Fly50": 999.99, "Back50": 40.02, "Breast50": 35.82, "Free50": 30.25},
    {"Swimmer": "Clarence Tai","Age": 30, "Gender": "M", "Fly50": 34.75, "Back50": 999.99, "Breast50": 41,    "Free50": 31.25},
    {"Swimmer": "Jeremiah Teo","Age": 31, "Gender": "M", "Fly50": 33,    "Back50": 33.5,  "Breast50": 31.5,  "Free50": 29},
    {"Swimmer": "Marcus Thieme","Age": 45, "Gender": "M", "Fly50": 32.86, "Back50": 33.86, "Breast50": 39.43, "Free50": 28.13},
    {"Swimmer": "Edwin Tsang","Age": 30, "Gender": "M", "Fly50": 32.5,  "Back50": 34,    "Breast50": 999.99, "Free50": 29},
    {"Swimmer": "Nina Veal",  "Age": 52, "Gender": "W", "Fly50": 37.5,  "Back50": 41.88, "Breast50": 40.88, "Free50": 32.5},
    {"Swimmer": "Penelope Virtosu","Age": 32, "Gender": "W", "Fly50": 999.99, "Back50": 999.99, "Breast50": 999.99, "Free50": 999.99},
    {"Swimmer": "Henry Wiseman","Age": 29, "Gender": "M", "Fly50": 30.37, "Back50": 33.96, "Breast50": 33.74, "Free50": 26},
    {"Swimmer": "Honglei Zhang","Age": 46, "Gender": "M", "Fly50": 51.15, "Back50": 50.03, "Breast50": 43.97, "Free50": 34.25}
]

# Define relay events: two teams (A, B) for each relay type
events = [
    ("Ted Stewart A", ["Fly"] * 6),
    ("Ted Stewart B", ["Fly"] * 6),
    ("Joan Monahan A", ["Free"] * 4),
    ("Joan Monahan B", ["Free"] * 4),
    ("Men's Medley A", ["Back", "Breast", "Fly", "Free"]),
    ("Men's Medley B", ["Back", "Breast", "Fly", "Free"]),
    ("Women's Medley A", ["Back", "Breast", "Fly", "Free"]),
    ("Women's Medley B", ["Back", "Breast", "Fly", "Free"]),
]

# Initialize optimization problem
prob = pulp.LpProblem("Relay_Global_Optimization", pulp.LpMinimize)

# Decision variables: x[(swimmer_name, event_name, leg_index)] ∈ {0,1}
x = {}
for s in swimmers:
    name = s['Swimmer']
    for event_name, legs in events:
        for idx, stroke in enumerate(legs):
            var = pulp.LpVariable(f"x_{name}_{event_name}_{idx}", 0, 1, pulp.LpBinary)
            x[(name, event_name, idx)] = var

# Objective: minimize total time across all legs
prob += pulp.lpSum(
    x[(s['Swimmer'], e_name, idx)] * s[f"{stroke}50"]
    for s in swimmers
    for e_name, legs in events
    for idx, stroke in enumerate(legs)
)

# Constraint: exactly one swimmer per event leg
for event_name, legs in events:
    for idx, stroke in enumerate(legs):
        prob += pulp.lpSum(
            x[(s['Swimmer'], event_name, idx)] for s in swimmers
        ) == 1, f"OneSwimmer_{event_name}_{idx}"

# Constraint: each swimmer can swim at most one leg total
for s in swimmers:
    prob += pulp.lpSum(
        x[(s['Swimmer'], e_name, idx)]
        for e_name, legs in events
        for idx in range(len(legs))
    ) <= 1, f"OneRelayPer_{s['Swimmer']}"

# Solve the ILP
action = prob.solve(pulp.PULP_CBC_CMD(msg=0))

# Extract and print results
results = {}
for (name, event_name, idx), var in x.items():
    if var.value() == 1:
        results.setdefault(event_name, []).append((idx, name))

# Display sorted teams and times
for event_name, legs in events:
    team = sorted(results[event_name], key=lambda x: x[0])
    total = 0
    print(f"\n{event_name}:")
    for idx, swimmer_name in team:
        # find swimmer record
        s = next(sw for sw in swimmers if sw['Swimmer'] == swimmer_name)
        stroke = legs[idx]
        time = s[f"{stroke}50"]
        total += time
        print(f"  Leg {idx+1} ({stroke}): {swimmer_name} — {time}s")
    minutes = int(total // 60)
    seconds = total % 60
    print(f"  Total Estimated Time: {minutes}:{seconds:.2f}")

print("\nOptimization Status:", pulp.LpStatus[prob.status])
