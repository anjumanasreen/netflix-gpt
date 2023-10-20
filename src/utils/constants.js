export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

  export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjMzNjQwMzM3OGE1NWRlMmY1YjExZDcyMmVlNzhmYyIsInN1YiI6IjY1MzBkMTJkYzQzOWMwMDEzODM2MGJiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PwYhkZaLQY8Rs_hypQmqDy0S1EkYw_riWqGRxWjCcYs' 
    }
  };

  export const IMG_CDNURL = "https://image.tmdb.org/t/p/w500/"

  export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
  
  export const SUPPORTED_LANGUAGES = [
    {
      identifier: "en",
      name: "English"
    },
    {
      identifier: "hindi",
      name: "Hindi"
    },
    {
      identifier: "spanish",
      name: "Spanish"
    }
  ]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY