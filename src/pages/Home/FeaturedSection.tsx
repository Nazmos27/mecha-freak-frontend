import React from "react";
import { TProduct, useGetAllProductsQuery } from "../../redux/api/productsApi";
import Loading from "../../components/Loading";
import SectionHeader from "../../components/shared/SectionHeader";
import ProductCard from "../../components/ProductCard";

const FeaturedSection: React.FC = () => {
  const { data, isLoading } = useGetAllProductsQuery({ limit: 6, page: 1 });
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="my-12">
      <SectionHeader
        title="Featured Keyboard"
        description=""
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-6">
        {data?.data?.map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
