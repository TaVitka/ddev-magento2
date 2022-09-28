var config = {
    map: {
        '*' : {
            subCatSlider: 'Magento_Catalog/js/subCatSlider',
        }
    },
    config : {
      mixins: {
          'Magento_Catalog/js/catalog-add-to-cart': {
              'Magento_Catalog/js/catalog-add-to-cart-mixin' : true
          }
      }
    }
};
