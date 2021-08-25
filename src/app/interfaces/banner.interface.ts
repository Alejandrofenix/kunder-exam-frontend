
export interface Banner {
 product: Product;
}

export interface Product {
 show:               boolean;
 type:               string;
 backgroundImg:      string;
 buttonText:         string;
 link:               string;
 productId:          string;
 productImg:         string;
 productName:        string;
 productDescription: string;
}

// Converts JSON strings to/from your types
export class Convert {
 public static toBanner(json: string): Banner {
     return JSON.parse(json);
 }

 public static bannerToJson(value: Banner): string {
     return JSON.stringify(value);
 }
}
