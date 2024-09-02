type filterByPrice = "lower" | "higher";

export interface ISearchParams {
  category?: string;
  seller_id?: string;
  filterByPrice?: filterByPrice;
  priceRange?: string;
  page?: string;
  limit?: string;
}