import gql from 'graphql-tag';

export const GET_HOUSE_UNITS = gql`
  query {
    project(where: {id: "cl4va1ctw46n90foa8j7gvs5d"}) {
      projectName
      projectStatus
      shortDescription
      houseUnitTypes {
        unitLabel
        unitDescription
        noOfFloors
        noOfBedrooms
        noOfBathrooms
        totalArea
        startingPrice
        floorPlan {
          groundFloorPlan {
            id
            url
            mimeType
          }
          firstFloorPlan {
            id
            url
            mimeType
          }
          secondFloorPlan {
            id
            url
            mimeType
          }
          generalImageOne {
            id
            url
            mimeType
          }
        }
      }
    }
  }
`;
