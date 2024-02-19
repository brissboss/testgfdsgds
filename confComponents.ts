export default {
    zone_1: {
        component: 'CardTitleProject',
        props: {
            name: {
                type: "function",
                objectName: "project",
                method: "getName",
            },
            price: {
                type: "function",
                objectName: "project",
                method: "getPrice",
            },
            id: {
                type: "function",
                objectName: "project",
                method: "getId",
            }
        }
    },
    zone_2: {
        component: 'CardActiveSet',
        props: {
            project: {
                type: "params",
                objectName: "project",
            }
        }
    },
    zone_3: {
        component: 'CardStatisticsBalance',
        props: {
            title: {
                type: "static",
                content: "Balance",
            },
            balance: {
                type: "function",
                objectName: "project",
                method: "getBalance",
            },
            maxTokens: {
                type: "function",
                objectName: "project",
                method: "getTotalSupply",
            },
            tokenPrice: {
                type: "function",
                objectName: "project",
                method: "getPrice",
            }
        }
    },
    zone_4: {
        component: 'CardStatistics',
        props: {
            title: {
                type: "static",
                content: "Investissement médian",
            },
            stats: {
                type: "static",
                content: 10000,
            }
        }
    },
    zone_5: {
        component: 'CardStatisticsTokens',
        props: {
            title: {
                type: "static",
                content: "Tokens disponibles",
            },
            tokenAvailable: {
                type: "function",
                objectName: "project",
                method: "getAvailableSupply",
            },
            tokenTotal: {
                type: "function",
                objectName: "project",
                method: "getTotalSupply",
            }
        }
    },
    zone_6: {
        component: 'CardStatistics',
        props: {
            title: {
                type: "static",
                content: "Investissement moyen",
            },
            stats: {
                type: "static",
                content: 32400,
            }
        }
    },
    zone_7: {
        component: 'CardStatistics',
        props: {
            title: {
                type: "static",
                content: "Nombre d'investisseurs",
            },
            stats: {
                type: "function",
                objectName: "orders",
                method: "getTotalInvestor",
            },
            info: {
                type: "static",
                content: true,
            },
            infoText: {
                type: "static",
                content: "Les commandes en attente de paiement ou annulées ne sont pas comptabilisées",
            },
            noCurrency: {
                type: "static",
                content: true,
            }
        }
    },
    zone_8: {
        component: 'CardStatisticsOrderEvolution',
        props: {
            title: {
                type: "static",
                content: "Evolution des commandes",
            },
            project: {
                type: "params",
                objectName: "project",
            },
            orders: {
                type: "params",
                objectName: "orders",
            }
        }
    },
    zone_9: {
        component: 'TabProjectView',
        props: {
            tabs: {
                type: "static",
                content: [
                    {
                        title: "Commandes",
                        icon: 'ri-shopping-basket-2-line',
                        tab: "orders",
                    },
                    {
                        title: "Clients",
                        icon: 'ri-user-2-line',
                        tab: "customer",
                    },
                ]
            },
            project: {
                type: "params",
                objectName: "project",
            },
            orders: {
                type: "params",
                objectName: "orders",
            },
        }
    },
    zone_10: {
        component: 'CardEmpty',
        props: {}
    }
}
