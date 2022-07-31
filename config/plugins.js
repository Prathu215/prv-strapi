module.exports = ({ env }) => ({
   
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME','dudc7dnzv'),
          api_key: env('CLOUDINARY_KEY','379968388158146'),
          api_secret: env('CLOUDINARY_SECRET','DV4MnMKZEDj_Tw1eROc0NPxRsxc'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
   
  });

 