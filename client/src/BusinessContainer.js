import BusinessCard from "./BusinessCard";

function BusinessContainer({businesses, user}) {

  return (
    <div>
      <ul className="cards">
        {businesses.map((business) => (
          <BusinessCard
            key={business.id}
            userId={user?.id}
            business={business}
            businesses={businesses}
          />
        ))}
      </ul>
    </div>
  );
}

export default BusinessContainer;