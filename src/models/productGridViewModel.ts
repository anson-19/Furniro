export class ProductGridViewModel {
  constructor(
    public id: number,
    public ProductImage: string,
    public imgAlt: string,
    public Name: string,
    public Description: string,
    public Price: string,
    public discountPrice: string
  ) { }
}
