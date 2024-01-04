import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { GET_LISTING_BY_ID } from '../../graphql/queries';

const PropertyPage = () => {
  const router = useRouter();
  const params = router.query.params as string[];
  if (!params) return <div>Loading...</div>; // Handle loading state

  const address = decodeURIComponent(params.slice(0, -1).join(" "));
  const raPid = parseInt(params[params.length - 1], 10);

  const { loading, error, data } = useQuery(GET_LISTING_BY_ID, {
    variables: { raPid },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const propertyDetails = data.propertyByRaPid;
  var city = data.propertyByRaPid.city;
  city = city.charAt(0) + city.substring(1).toLowerCase();
  return (

    <div className="container mx-auto p-4">
      
      <div className="grid md:grid-cols-2 gap-4 text-black">
        <div className="bg-white p-4 shadow rounded">
          <h1 className='text-2xl'>Address:</h1>
          <h1 className="text-l font-bold mb-4">{data.propertyByRaPid.streetNumber} {data.propertyByRaPid.streetDirPrefix} {data.propertyByRaPid.streetName} {data.propertyByRaPid.streetSuffix} {data.propertyByRaPid.unitNumber} {city}, {data.propertyByRaPid.postalCode}, IL</h1>
          <h2 className="text-xl font-semibold">Details</h2>
          <p>Type: {data.propertyByRaPid.propertyType}</p>
          <p>MLS Status: {data.propertyByRaPid.mlsStatus}</p>
          <p>Price: ${data.propertyByRaPid.listPrice?.toLocaleString()}</p>
          <p>Bedrooms: {data.propertyByRaPid.bedroomsTotal}</p>
          <p>Bathrooms: {data.propertyByRaPid.bathroomsFull + (data.propertyByRaPid.bathroomsHalf * 0.5)}</p>
          <p>Living Area: {data.propertyByRaPid.livingArea} sqft</p>
          <p>Lot Size: {data.propertyByRaPid.lotSizeDimensions}</p>
          <p>Year Built: {data.propertyByRaPid.yearBuilt}</p>
          <p>Total Bedrooms: {data.propertyByRaPid.bedroomsTotal}</p>
          <p>Total Full Bathrooms: {data.propertyByRaPid.bathroomsFull}</p>
          <p>Total Half Bathrooms: {data.propertyByRaPid.bathroomsHalf}</p>
          <p>Total Half Bathrooms: {data.propertyByRaPid.bathroomsHalf}</p>
          <p>Garage Spaces: {data.propertyByRaPid.garageSpaces}</p>
          {/* ... more details ... */}
        </div>

        <div className="bg-white p-4 shadow rounded text-black">
          <h2 className="text-xl font-semibold">Location</h2>
          <p>City: {data.propertyByRaPid.city}</p>
          <p>County: {data.propertyByRaPid.countyOrParish}</p>
          <p>Zip Code: {data.propertyByRaPid.postalCode}</p>
          <p>School Districts: {data.propertyByRaPid.elementarySchoolDistrict}, {data.propertyByRaPid.middleOrJuniorSchoolDistrict}, {data.propertyByRaPid.highSchoolDistrict}</p>
          <p>Elementary school: {data.propertyByRaPid.elementarySchool}</p>
          <p>Middle / Jr. High school: {data.propertyByRaPid.middleOrJuniorSchool}</p>
          <p>High school: {data.propertyByRaPid.highSchool}</p>
          <p>Source: MRED as distributed by MLS GRID, MLS#: {data.propertyByRaPid.listingId}</p>
          {/* ... more location details ... */}
        </div>
      </div>

      <div className="bg-white p-4 shadow rounded mt-4 text-black">
        <h2 className="text-xl font-semibold text-black">Public Remarks</h2>
        <p>{data.propertyByRaPid.publicRemarks}</p>
      </div>

      {/* Additional sections as needed */}
    </div>
  );
};

export default PropertyPage;
