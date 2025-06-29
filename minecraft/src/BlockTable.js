import { DoubleSide, FrontSide } from "three";
import { shaderMaterial } from "./shaderHelper.js";

export function getBlockTable(loadTexture, rd, rf) {
    return {
        dirt: {
            texture: {
                side: shaderMaterial("shader.vs", "shader.fs", {
                    side: FrontSide,
                    uniforms: {
                        colormap: {
                            value: loadTexture("textures/dirt.png"),
                        },
                        renderDistance: { value: rd },
                        renderFade: { value: rf },
                    },
                }),
            },
            guid: 0,
            buid: 1,
            name: "Dirt",
        },
        stone: {
            texture: {
                side: shaderMaterial("shader.vs", "shader.fs", {
                    side: FrontSide,
                    uniforms: {
                        colormap: {
                            value: loadTexture("textures/stone.png"),
                        },
                        renderDistance: { value: rd },
                        renderFade: { value: rf },
                    },
                }),
            },
            guid: 1,
            buid: 1,
            name: "Stone",
        },
        grass: {
            texture: {
                side: shaderMaterial("shader.vs", "shader.fs", {
                    side: FrontSide,
                    uniforms: {
                        colormap: {
                            value: loadTexture("textures/grass_side.png"),
                        },
                        renderDistance: { value: rd },
                        renderFade: { value: rf },
                    },
                }),
                top: shaderMaterial("shader.vs", "shader.fs", {
                    side: FrontSide,
                    uniforms: {
                        colormap: {
                            value: loadTexture("textures/grass_top_old.jpg"),
                        },
                        renderDistance: { value: rd },
                        renderFade: { value: rf },
                    },
                }),
                bottom: shaderMaterial("shader.vs", "shader.fs", {
                    side: FrontSide,
                    uniforms: {
                        colormap: {
                            value: loadTexture("textures/dirt.png"),
                        },
                        renderDistance: { value: rd },
                        renderFade: { value: rf },
                    },
                }),
            },
            guid: 2,
            buid: 1,
            name: "Grass",
        },
        oak_log: {
            texture: {
                side: shaderMaterial("shader.vs", "shader.fs", {
                    side: FrontSide,
                    uniforms: {
                        colormap: {
                            value: loadTexture("textures/oak_log.png"),
                        },
                        renderDistance: { value: rd },
                        renderFade: { value: rf },
                    },
                }),
                top: shaderMaterial("shader.vs", "shader.fs", {
                    side: FrontSide,
                    uniforms: {
                        colormap: {
                            value: loadTexture("textures/oak_log_top.png"),
                        },
                        renderDistance: { value: rd },
                        renderFade: { value: rf },
                    },
                }),
                bottom: shaderMaterial("shader.vs", "shader.fs", {
                    side: FrontSide,
                    uniforms: {
                        colormap: {
                            value: loadTexture("textures/oak_log_top.png"),
                        },
                        renderDistance: { value: rd },
                        renderFade: { value: rf },
                    },
                }),
            },
            guid: 3,
            buid: 1,
            name: "Oak_Log",
        },
        leaf: {
            texture: {
                side: shaderMaterial("leaf_shader.vs", "leaf_shader.fs", {
                    side: FrontSide,
                    transparent: true,
                    uniforms: {
                        colormap: {
                            value: loadTexture("textures/leaf.png"),
                        },
                        time: { value: 0.0 },
                        renderDistance: { value: rd },
                        renderFade: { value: rf },
                    },
                }),
                top: null,
            },
            guid: 4,
            buid: 1,
            name: "Leaf",
        },
        water: {
            texture: {
                side: shaderMaterial("still_water_shader.vs", "still_water_shader.fs", {
                    side: DoubleSide,
                    uniforms: {
                        colormap: {
                            value: loadTexture("textures/water.png"),
                        },
                        time: { value: 0.0 },
                        envMap: { value: null },
                        level: { value: 0.0 },
                        renderDistance: { value: rd },
                        renderFade: { value: rf },
                    },
                    transparent: true,
                    depthTest: true,
                }),
                top: null,
            },
            guid: 5,
            buid: 1,
            name: "Water",
        },
        slime: {
            texture: {
                side: shaderMaterial("shader.vs", "leaf_shader.fs", {
                    side: FrontSide,
                    transparent: true,
                    uniforms: {
                        colormap: {
                            value: loadTexture("textures/slime.png"),
                        },
                        renderDistance: { value: rd },
                        renderFade: { value: rf },
                    },
                }),
                top: null,
            },
            guid: 6,
            buid: 1,
            name: "Slime",
        },
        sand: {
            texture: {
                side: shaderMaterial("shader.vs", "shader.fs", {
                    side: FrontSide,
                    uniforms: {
                        colormap: {
                            value: loadTexture("textures/sand.png"),
                        },
                        renderDistance: { value: rd },
                        renderFade: { value: rf },
                    },
                }),
                top: null,
            },
            guid: 7,
            buid: 1,
            name: "Sand",
        },
    };
}
