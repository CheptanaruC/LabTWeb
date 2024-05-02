import Product from "./Product";

export default interface Smartphone extends Product {
    RAM: number;
    OS: string;
    camera: number;
    
}