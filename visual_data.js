const visualData = [
    {
        chapter: "Solid State",
        visuals: [
            {
                title: "Unit Cell Types (SCC, BCC, FCC)",
                type: "diagram",
                description: "Simple, Body-Centered, and Face-Centered packing efficiency and Z-values.",
                cssClass: "unit-cell"
            },
            {
                title: "Crystal Defects",
                type: "diagram",
                description: "Visualizing Schottkey and Frenkel defects in ionic solids.",
                cssClass: "crystal-defect"
            }
        ]
    },
    {
        chapter: "Solutions",
        visuals: [
            {
                title: "Ideal vs Non-Ideal (Positive Deviation)",
                type: "graph",
                description: "Vapor pressure is higher than predicted by Raoult's Law. Example: Ethanol + Acetone.",
                cssClass: "pos-deviation"
            },
            {
                title: "Boiling Point Elevation Curve",
                type: "graph",
                description: "Graph showing how adding a solute increases the boiling point of the solvent.",
                cssClass: "bp-elevation"
            }
        ]
    },
    {
        chapter: "Electrochemistry",
        visuals: [
            {
                title: "Kohlrausch Law: Strong vs Weak Electrolytes",
                type: "graph",
                description: "Molar conductivity vs square root of concentration. Weak electrolytes show a steep curve.",
                cssClass: "molar-cond"
            },
            {
                title: "Electrochemical Cell (Daniel Cell)",
                type: "diagram",
                description: "Zn/Zn2+ || Cu2+/Cu. Salt bridge, electron flow from Zn to Cu.",
                cssClass: "daniel-cell"
            }
        ]
    },
    {
        chapter: "Chemical Kinetics",
        visuals: [
            {
                title: "Zero Order Kinetics",
                type: "graph",
                description: "[R] vs time is a straight line. Slope = -k. Intercept = [R]0.",
                cssClass: "zero-order"
            },
            {
                title: "First Order Kinetics",
                type: "graph",
                description: "log[R] vs time is a straight line. Slope = -k/2.303.",
                cssClass: "first-order"
            }
        ]
    },
    {
        chapter: "p-Block Elements",
        visuals: [
            {
                title: "Ostwald's Process Layout",
                type: "diagram",
                description: "Catalytic oxidation of ammonia to form Nitric acid (HNO3).",
                cssClass: "ostwald"
            },
            {
                title: "Structures of Xenon Fluorides",
                type: "diagram",
                description: "VSEPR shapes: XeF2 (Linear), XeF4 (Square Planar), XeF6 (Distorted Octahedral).",
                cssClass: "xe-fluorides"
            }
        ]
    },
    {
        chapter: "d & f Block",
        visuals: [
            {
                title: "Atomic Size Trend (3d Series)",
                type: "graph",
                description: "Size decreases till middle (Cr), stays constant, then increases slightly at Zn.",
                cssClass: "atomic-radii"
            }
        ]
    },
    {
        chapter: "Coordination Compounds",
        visuals: [
            {
                title: "Octahedral Field Splitting",
                type: "diagram",
                description: "d-orbitals split into t2g (lower) and eg (higher). Δo energy gap.",
                cssClass: "octahedral"
            }
        ]
    },
    {
        chapter: "Haloalkanes & Haloarenes",
        visuals: [
            {
                title: "C-X Bond Polarity",
                type: "diagram",
                description: "Carbon has partial positive charge, halogen has partial negative. Polarity decreases down the group.",
                cssClass: "cx-bond"
            }
        ]
    },
    {
        chapter: "Alcohols, Phenols & Ethers",
        visuals: [
            {
                title: "Dehydration Mechanism",
                type: "diagram",
                description: "Step-by-step conversion of Ethanol to Ethene using H2SO4 at 443K.",
                cssClass: "alcohol-dehydration"
            },
            {
                title: "Resonance in Phenol",
                type: "diagram",
                description: "How oxygen's lone pair delocalizes over the benzene ring.",
                cssClass: "phenol-resonance"
            }
        ]
    },
    {
        chapter: "Aldehydes & Ketones",
        visuals: [
            {
                title: "Nucleophilic Addition Control",
                type: "diagram",
                description: "Steric and inductive effects on the reactivity of carbonyl group.",
                cssClass: "carbonyl-reactivity"
            }
        ]
    },
    {
        chapter: "Amines",
        visuals: [
            {
                title: "Basicity Trend",
                type: "graph",
                description: "Comparison of pKb values for Ammonia vs Methylamine vs Aniline.",
                cssClass: "amine-basicity"
            }
        ]
    },
    {
        chapter: "Biomolecules",
        visuals: [
            {
                title: "DNA Double Helix Structure",
                type: "diagram",
                description: "Sugar-phosphate backbone with anti-parallel strands and hydrogen bonding.",
                cssClass: "dna-helix"
            }
        ]
    }
];
