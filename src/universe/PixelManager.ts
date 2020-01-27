import * as forces from "./forces";
import ParticleForce from "./ParticleForce";
import Particle from "./Particle";

interface PixelHoleOptions {
    pixelX: number; 
    pixelY: number; 
    scale: number; 
    imageWidth: number; 
    imageHeight: number; 
    canvasWidth: number; 
    canvasHeight: number;
}

class PixelManager {

    pixelX: number; 
    pixelY: number; 
    scale: number; 
    imageWidth: number; 
    imageHeight: number; 
    canvasWidth: number; 
    canvasHeight: number;

    constructor(options: PixelHoleOptions) {
        this.pixelX = options.pixelX 
        this.pixelY = options.pixelY 
        this.scale = options.scale
        this.imageWidth = options.imageWidth
        this.imageHeight = options.imageHeight
        this.canvasWidth = options.canvasWidth
        this.canvasHeight = options.canvasHeight
    }

    setScale = (scale: number) => {
        this.scale = scale
    }

    setCanvasWidth = (width: number) => {
        this.canvasWidth = width
    }

    setCanvasHeight = (height: number) => {
        this.canvasHeight = height
    }

    getParticleForce = (): ParticleForce => (particle: Particle) => {
        const x = this.pixelX * this.scale + (this.canvasWidth / 2) - (this.imageWidth * this.scale / 2);
        const y = this.pixelY * this.scale + (this.canvasHeight / 2) - (this.imageHeight * this.scale / 2);
        return forces.blackHole(x, y)(particle)
    }
}

export default PixelManager