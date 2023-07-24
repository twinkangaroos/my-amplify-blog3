export const schema = {
    "models": {
        "MPrefecture": {
            "name": "MPrefecture",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "prefecture": {
                    "name": "prefecture",
                    "isArray": false,
                    "type": {
                        "enum": "Prefecture"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "prefecture_name": {
                    "name": "prefecture_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sort": {
                    "name": "sort",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "MArea": {
                    "name": "MArea",
                    "isArray": false,
                    "type": {
                        "model": "MArea"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "mPrefectureMAreaId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "mPrefectureMAreaId": {
                    "name": "mPrefectureMAreaId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "MPrefectures",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "MArea": {
            "name": "MArea",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "area": {
                    "name": "area",
                    "isArray": false,
                    "type": {
                        "enum": "Area"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "area_name": {
                    "name": "area_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sort": {
                    "name": "sort",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "MAreas",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "MGroup": {
            "name": "MGroup",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "group_name": {
                    "name": "group_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "admin_flag": {
                    "name": "admin_flag",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "sort": {
                    "name": "sort",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "MGroups",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "MParticularCondition": {
            "name": "MParticularCondition",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "particular_condition": {
                    "name": "particular_condition",
                    "isArray": false,
                    "type": {
                        "enum": "ParticularCondition"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "particular_condition_name": {
                    "name": "particular_condition_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sort": {
                    "name": "sort",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "MParticularConditions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "MPriceRange": {
            "name": "MPriceRange",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "price_range": {
                    "name": "price_range",
                    "isArray": false,
                    "type": {
                        "enum": "PriceRange"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "price_range_name": {
                    "name": "price_range_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sort": {
                    "name": "sort",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "MPriceRanges",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "MTypeHair": {
            "name": "MTypeHair",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "type_hair": {
                    "name": "type_hair",
                    "isArray": false,
                    "type": {
                        "enum": "TypeHair"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "type_hair_name": {
                    "name": "type_hair_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sort": {
                    "name": "sort",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "MTypeHairs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "MNature": {
            "name": "MNature",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "nature": {
                    "name": "nature",
                    "isArray": false,
                    "type": {
                        "enum": "Nature"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "nature_name": {
                    "name": "nature_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sort": {
                    "name": "sort",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "MNatures",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "MType": {
            "name": "MType",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "Type"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "type_name": {
                    "name": "type_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sort": {
                    "name": "sort",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "MTypes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "MShop": {
            "name": "MShop",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "shop_name": {
                    "name": "shop_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "area": {
                    "name": "area",
                    "isArray": false,
                    "type": {
                        "enum": "Area"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "prefecture": {
                    "name": "prefecture",
                    "isArray": false,
                    "type": {
                        "enum": "Prefecture"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "MGroup": {
                    "name": "MGroup",
                    "isArray": false,
                    "type": {
                        "model": "MGroup"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "mShopMGroupId"
                        ]
                    }
                },
                "sort": {
                    "name": "sort",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "mShopMGroupId": {
                    "name": "mShopMGroupId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "MShops",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "MBirthday": {
            "name": "MBirthday",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "birthday": {
                    "name": "birthday",
                    "isArray": false,
                    "type": {
                        "enum": "Birthday"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "birthday_name": {
                    "name": "birthday_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sort": {
                    "name": "sort",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "MBirthdays",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "MGender": {
            "name": "MGender",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "gender": {
                    "name": "gender",
                    "isArray": false,
                    "type": {
                        "enum": "Gender"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "gender_name": {
                    "name": "gender_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sort": {
                    "name": "sort",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "MGenders",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "MSize": {
            "name": "MSize",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "size": {
                    "name": "size",
                    "isArray": false,
                    "type": {
                        "enum": "Size"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "size_name": {
                    "name": "size_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sort": {
                    "name": "sort",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "MSizes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Dog": {
            "name": "Dog",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "size": {
                    "name": "size",
                    "isArray": false,
                    "type": {
                        "enum": "Size"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "Type"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "gender": {
                    "name": "gender",
                    "isArray": false,
                    "type": {
                        "enum": "Gender"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "birthday": {
                    "name": "birthday",
                    "isArray": false,
                    "type": {
                        "enum": "Birthday"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "MShop": {
                    "name": "MShop",
                    "isArray": false,
                    "type": {
                        "model": "MShop"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "dogMShopId"
                        ]
                    }
                },
                "nature": {
                    "name": "nature",
                    "isArray": false,
                    "type": {
                        "enum": "Nature"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "type_hair": {
                    "name": "type_hair",
                    "isArray": false,
                    "type": {
                        "enum": "TypeHair"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "area": {
                    "name": "area",
                    "isArray": false,
                    "type": {
                        "enum": "Area"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "prefecture": {
                    "name": "prefecture",
                    "isArray": false,
                    "type": {
                        "enum": "Prefecture"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "particular_condition": {
                    "name": "particular_condition",
                    "isArray": false,
                    "type": {
                        "enum": "ParticularCondition"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "free_word": {
                    "name": "free_word",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "image_name": {
                    "name": "image_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "publish_status": {
                    "name": "publish_status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "appeal_point": {
                    "name": "appeal_point",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "buy_flag": {
                    "name": "buy_flag",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "price_range": {
                    "name": "price_range",
                    "isArray": false,
                    "type": {
                        "enum": "PriceRange"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "dogMShopId": {
                    "name": "dogMShopId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Dogs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Post": {
            "name": "Post",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "author": {
                    "name": "author",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Posts",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "Prefecture": {
            "name": "Prefecture",
            "values": [
                "A01_HOKKAIDO",
                "A02_AOMORI",
                "A03_IWATE",
                "A04_MIYAGI",
                "A05_AKITA",
                "A06_YAMAGATA",
                "A07_FUKUSHIMA",
                "A08_IBARAKI",
                "A09_TOCHIGI",
                "A10_GUMMA",
                "A11_SAITAMA",
                "A12_CHIBA",
                "A13_TOKYO",
                "A14_KANAGAWA",
                "A15_NIGATA",
                "A16_TOYAMA",
                "A17_ISHIKAWA",
                "A18_FUKUI",
                "A19_YAMANASHI",
                "A20_NAGANO",
                "A21_GIFU",
                "A22_SHIZUOKA",
                "A23_AICHI",
                "A24_MIE",
                "A25_SHIGA",
                "A26_KYOTO",
                "A27_OSAKA",
                "A28_HYOGO",
                "A29_NARA",
                "A30_WAKAYAMA",
                "A31_TOTTORI",
                "A32_SHIMANE",
                "A33_OKAYAMA",
                "A34_HIROSHIMA",
                "A35_YAMAGUCHI",
                "A36_TOKUSHIMA",
                "A37_KAGAWA",
                "A38_EHIME",
                "A39_KOCHI",
                "A40_FUKUOKA",
                "A41_SAGA",
                "A42_NAGASAKI",
                "A43_KUMAMOTO",
                "A44_OITA",
                "A45_MIYAZAKI",
                "A46_KAGOSHIMA",
                "A47_OKINAWA"
            ]
        },
        "Area": {
            "name": "Area",
            "values": [
                "A_TOHOKU",
                "B_KANTO",
                "C_CHUBU",
                "D_KINKI",
                "E_CHUGOKU",
                "F_SHIKOKU",
                "G_KYUSHU"
            ]
        },
        "ParticularCondition": {
            "name": "ParticularCondition",
            "values": [
                "RARE",
                "PEDIGREE",
                "CHAMPION",
                "VIDEO"
            ]
        },
        "PriceRange": {
            "name": "PriceRange",
            "values": [
                "UNDER_50000",
                "UNDER_100000",
                "UNDER_150000",
                "UNDER_200000",
                "UNDER_250000",
                "UNDER_300000",
                "OVER_300000"
            ]
        },
        "TypeHair": {
            "name": "TypeHair",
            "values": [
                "SHORT",
                "LONG",
                "SPECIAL"
            ]
        },
        "Nature": {
            "name": "Nature",
            "values": [
                "SHORT",
                "LONG",
                "SPECIAL"
            ]
        },
        "Type": {
            "name": "Type",
            "values": [
                "AKITAKEN",
                "POODLE",
                "COLLIE",
                "POMERANIAN",
                "GOLDEN_RETRIEVER",
                "SIBERIAN_HUSKY",
                "CHIHUAHUA",
                "STANDARD_DACHSHUND"
            ]
        },
        "Birthday": {
            "name": "Birthday",
            "values": [
                "AFTER_49_90",
                "AFTER_98_180",
                "AFTER_181"
            ]
        },
        "Gender": {
            "name": "Gender",
            "values": [
                "MALE",
                "FEMALE"
            ]
        },
        "Size": {
            "name": "Size",
            "values": [
                "ULTRA_SMALL",
                "SMALL",
                "MEDIUM",
                "LARGE",
                "ULTRA_LARGE"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.3.5",
    "version": "fcc372477e93684e7a24278471c3362b"
};