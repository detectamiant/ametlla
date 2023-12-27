var wms_layers = [];

var lyr_Mapatopogrficopirmidetopogrfica_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserveis.icgc.cat/icc_mapesmultibase/utm/wms/service",
    attributions: ' ',
                              params: {
                                "LAYERS": "topo",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Mapa topográfico (pirámide topográfica)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Mapatopogrficopirmidetopogrfica_0, 0]);
var lyr_Ortofotocolor2023provisional_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_provisional",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto color 2023 (provisional)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofotocolor2023provisional_1, 0]);
var format_POSITIUSAmetlladelVallspositius_ametlla_1_2 = new ol.format.GeoJSON();
var features_POSITIUSAmetlladelVallspositius_ametlla_1_2 = format_POSITIUSAmetlladelVallspositius_ametlla_1_2.readFeatures(json_POSITIUSAmetlladelVallspositius_ametlla_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POSITIUSAmetlladelVallspositius_ametlla_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSITIUSAmetlladelVallspositius_ametlla_1_2.addFeatures(features_POSITIUSAmetlladelVallspositius_ametlla_1_2);
var lyr_POSITIUSAmetlladelVallspositius_ametlla_1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POSITIUSAmetlladelVallspositius_ametlla_1_2, 
                style: style_POSITIUSAmetlladelVallspositius_ametlla_1_2,
                interactive: true,
                title: '<img src="styles/legend/POSITIUSAmetlladelVallspositius_ametlla_1_2.png" /> POSITIUS Ametlla del Vallès — positius_ametlla_1'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_Mapatopogrficopirmidetopogrfica_0,lyr_Ortofotocolor2023provisional_1,],
                                title: "Mapas de fondo"});

lyr_Mapatopogrficopirmidetopogrfica_0.setVisible(true);lyr_Ortofotocolor2023provisional_1.setVisible(true);lyr_POSITIUSAmetlladelVallspositius_ametlla_1_2.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_POSITIUSAmetlladelVallspositius_ametlla_1_2];
lyr_POSITIUSAmetlladelVallspositius_ametlla_1_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', });
lyr_POSITIUSAmetlladelVallspositius_ametlla_1_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'area': 'Range', });
lyr_POSITIUSAmetlladelVallspositius_ametlla_1_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', });
lyr_POSITIUSAmetlladelVallspositius_ametlla_1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});