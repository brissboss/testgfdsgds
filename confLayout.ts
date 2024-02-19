export default {
    devMode: false,
    components: {
        zone_1: { size: {cols: 12, md: 6, xl: 12} },
        zone_2: { size: {cols: 12, md: 6, xl: 12} },
        zone_3: { size: {cols: 12, md: 6} },
        zone_4: { size: {cols: 12, sm: 6} },
        zone_5: { size: {cols: 12, sm: 6} },
        zone_6: { size: {cols: 12, sm: 6} },
        zone_7: { size: {cols: 12, sm: 6} },
        zone_8: { size: {cols: 12, xl: 12} },
        zone_9: { size: {cols: 12, xl: 12} },
        zone_10: { size: {cols: 12, md: 6}  }
    },
    layout: [
        {
            id: "block_1",
            size: {cols: 12, xl: 6,},
            components: ["zone_1", "zone_2", "nested_1", "nested_2"],
        },
        {
            id: "block_2",
            size: {cols: 12, xl: 6,},
            components: ["zone_8", "zone_9"],
        }
    ],
    nested: {
        'nested_1': {
            id: "nested_1",
            size: {cols: 12, md: 6, xl: 12},
            components: ["zone_3", "zone_10"],
        },
        'nested_2': {
            id: "nested_2",
            size: {cols: 12, md: 6, xl: 12},
            components: ["zone_4", "zone_5", "zone_6", "zone_7"],
        },
    }
}
