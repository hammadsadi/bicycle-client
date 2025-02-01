/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

export const bicycleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get All Bicycle
    getAllBicycle: builder.query({
      query: () => ({
        url: "/bicycle",
        method: "GET",
      }),
      //   transformResponse: (response: TReduxResponse<TAcademicSemester[]>) => {
      //     return {
      //       data: response?.data,
      //       meta: response?.meta,
      //     };
      //   },
    }),
    getSingleBicycle: builder.query({
      query: (arg) => ({
        url: `/bicycle/${arg}`,
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return {
          data: response?.data,
        };
      },
    }),
    // Create New Academic Faculty
    // addAcademicFaculty: builder.mutation({
    //   query: (data) => ({
    //     url: "/academic-faculties/create-academic-faculty",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
  }),
});

export const { useGetAllBicycleQuery, useGetSingleBicycleQuery } = bicycleApi;
