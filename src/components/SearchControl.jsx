import L from "leaflet"

L.Control.Search = L.Control.extend({

  options:{
    container: null


  },
    onAdd: function (map) {
      this._map = map
      this._container = L.DomUtil.create('div', 'leaflet-control-search')
      this._input = this._createInput(this.options.textPlaceholder, 'search-input')
      this._tooltip = this._createTooltip('search-tooltip')
      this._cancel = this._createCancel(this.options.textCancel, 'search-cancel')
      this._button = this._createButton(this.options.textPlaceholder, 'search-button')
      this._alert = this._createAlert('search-alert')

      if (this.options.collapsed === false) { this.expand(this.options.collapsed) }

      if (this.options.marker) {
        if (this.options.marker instanceof L.Marker || this.options.marker instanceof L.CircleMarker) { this._markerSearch = this.options.marker } else if (this._isObject(this.options.marker)) { this._markerSearch = new L.Control.Search.Marker([0, 0], this.options.marker) }

        this._markerSearch._isMarkerSearch = true
      }

      this.setLayer(this._layer)

      map.on({
        //    'layeradd': this._onLayerAddRemove,
        //    'layerremove': this._onLayerAddRemove
        resize: this._handleAutoresize
      }, this)
      return this._container
    },
  addTo: function(map){
    if(this.options.container){
      this._container = this.onAdd(map) 
      this._wrapper=L.DomUtil.get(this.options.container)
      this._wrapper.style.position='relative'
      this._wrapper.appendChild(this._container)
    }else{
      L.Control.prototype.addTo.call(this, map)
    }
    return this
  },


})
  