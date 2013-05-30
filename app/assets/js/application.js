(function() {
  $(function() {
    var AB, AeatherBeats;

    AeatherBeats = (function() {
      function AeatherBeats() {
        this.stage = new createjs.Stage('pointGraph');
        this.stage_width = this.stage.canvas.width;
        this.stage_height = this.stage.canvas.height;
        this.stage.autoClear = true;
        this.graphView = new graph.Graph(this, this.stage_width, this.stage_height);
        this.graphView.addEventListener('graphUpdate', this);
      }

      AeatherBeats.prototype.handleEvent = function(e) {
        console.log(e.type);
        if (e.type === 'graphUpdate') {
          return this.onGraphUpdate();
        }
      };

      AeatherBeats.prototype.onGraphUpdate = function() {
        return this.render();
      };

      AeatherBeats.prototype.render = function() {
        console.log("render");
        this.stage.removeAllChildren();
        this.stage.clear();
        this.stage.addChild(this.graphView.getContainer());
        return this.stage.update();
      };

      return AeatherBeats;

    })();
    AB = new AeatherBeats();
    return AB.render();
  });

}).call(this);
