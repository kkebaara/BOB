import BusinessCard from "./BusinessCard";

function BusinessContainer({businesses}) {

  return (
    <div>
      <ul className="cards">
        {businesses.map((business) => (
          <BusinessCard
            key={business.id}
            business={business}
            businesses={businesses}
          />
        ))}
      </ul>
    </div>
  );
}

export default BusinessContainer;