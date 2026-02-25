const visualData = [
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
            },
            {
                title: "Activation Energy Profile",
                type: "graph",
                description: "Reactants -> Transition State -> Products. Peak is Activation Energy (Ea).",
                cssClass: "act-energy"
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
            },
            {
                title: "Melting Point Trend",
                type: "graph",
                description: "Peaks at Cr, Mo, W due to max number of unpaired d-electrons.",
                cssClass: "melting-point"
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
            },
            {
                title: "Tetrahedral Field Splitting",
                type: "diagram",
                description: "d-orbitals split into e (lower) and t2 (higher). Reverse of octahedral.",
                cssClass: "tetrahedral"
            }
        ]
    },
    {
        chapter: "Organic Mechanisms (SN1/SN2)",
        visuals: [
            {
                title: "SN2 Transition State",
                type: "diagram",
                description: "Single step. Nucleophile attacks while leaving group stays attached. Inversion happens.",
                cssClass: "sn2-transition"
            },
            {
                title: "SN1 Energy Profile",
                type: "graph",
                description: "Two-step reaction. Carbocation intermediate is formed. Two peaks.",
                cssClass: "sn1-profile"
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
            },
            {
                title: "Optical Activity (Enantiomers)",
                type: "diagram",
                description: "Non-superimposable mirror images. Chiral center carbon with four different groups.",
                cssClass: "optical"
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
            },
            {
                title: "Hemiacetal Formation",
                type: "diagram",
                description: "Step-by-step alcohol addition to aldehyde under acidic conditions.",
                cssClass: "hemiacetal"
            }
        ]
    },
    {
        chapter: "Biomolecules",
        visuals: [
            {
                title: "Primary vs Secondary Protein Structure",
                type: "diagram",
                description: "Amino acid sequence vs Alpha-helix/Beta-pleated sheet folding.",
                cssClass: "protein-struct"
            },
            {
                title: "DNA Double Helix Structure",
                type: "diagram",
                description: "Sugar-phosphate backbone with anti-parallel strands and hydrogen bonding.",
                cssClass: "dna-helix"
            }
        ]
    }
];
