(function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var L0 = Kotlin.Long.ZERO;
  var L1 = Kotlin.Long.ONE;
  var sorted = Kotlin.kotlin.collections.sorted_exjks8$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var equals = Kotlin.equals;
  var Exception = Kotlin.kotlin.Exception;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var toString = Kotlin.toString;
  var throwCCE = Kotlin.throwCCE;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var sort = Kotlin.kotlin.collections.sort_4wi501$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$;
  BenchmarkType.prototype = Object.create(Enum.prototype);
  BenchmarkType.prototype.constructor = BenchmarkType;
  function BlasBenchmarkResult(commit, device, datapoints) {
    this.commit_qvr37v$_0 = commit;
    this.device_gsxkcq$_0 = device;
    this.datapoints_wqx9up$_0 = datapoints;
    this.benchmark_1z15zf$_0 = BenchmarkType$Blas_getInstance();
    this.summaryValues_kzgd4w$_0 = lazy(BlasBenchmarkResult$summaryValues$lambda(this));
  }
  function ConversionBenchmarkResult(commit, device, datapoints) {
    this.commit_788dgb$_0 = commit;
    this.device_hb1wbg$_0 = device;
    this.datapoints_atpz3v$_0 = datapoints;
    this.benchmark_pld5t1$_0 = BenchmarkType$Conversion_getInstance();
    this.summaryValues_81o97e$_0 = lazy(ConversionBenchmarkResult$summaryValues$lambda(this));
  }
  function MatrixDatapoint() {
  }
  MatrixDatapoint.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'MatrixDatapoint', interfaces: [Datapoint]};
  function MatrixBenchmarkResult() {
  }
  MatrixBenchmarkResult.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'MatrixBenchmarkResult', interfaces: [BenchmarkResult]};
  function PreconditionerBenchmarkResult(commit, device, datapoints) {
    this.commit_nu4gms$_0 = commit;
    this.device_draxrn$_0 = device;
    this.datapoints_iy5xvu$_0 = datapoints;
    this.benchmark_g5zck4$_0 = BenchmarkType$Preconditioner_getInstance();
    this.summaryValues_5839ah$_0 = lazy(PreconditionerBenchmarkResult$summaryValues$lambda(this));
  }
  function SolverBenchmarkResult(commit, device, datapoints) {
    this.commit_416oou$_0 = commit;
    this.device_e407jz$_0 = device;
    this.datapoints_fy4bvc$_0 = datapoints;
    this.benchmark_2ijioy$_0 = BenchmarkType$Solver_getInstance();
    this.summaryValues_cn5pux$_0 = lazy(SolverBenchmarkResult$summaryValues$lambda(this));
  }
  function Format(name, time, completed, storage, maxRelativeNorm2) {
    if (storage === void 0)
      storage = L0;
    if (maxRelativeNorm2 === void 0)
      maxRelativeNorm2 = 0.0;
    this.name = name;
    this.time = time;
    this.completed = completed;
    this.storage = storage;
    this.maxRelativeNorm2 = maxRelativeNorm2;
  }
  Format.$metadata$ = {kind: Kind_CLASS, simpleName: 'Format', interfaces: []};
  Format.prototype.component1 = function () {
    return this.name;
  };
  Format.prototype.component2 = function () {
    return this.time;
  };
  Format.prototype.component3 = function () {
    return this.completed;
  };
  Format.prototype.component4 = function () {
    return this.storage;
  };
  Format.prototype.component5 = function () {
    return this.maxRelativeNorm2;
  };
  Format.prototype.copy_f8e8g6$ = function (name, time, completed, storage, maxRelativeNorm2) {
    return new Format(name === void 0 ? this.name : name, time === void 0 ? this.time : time, completed === void 0 ? this.completed : completed, storage === void 0 ? this.storage : storage, maxRelativeNorm2 === void 0 ? this.maxRelativeNorm2 : maxRelativeNorm2);
  };
  Format.prototype.toString = function () {
    return 'Format(name=' + Kotlin.toString(this.name) + (', time=' + Kotlin.toString(this.time)) + (', completed=' + Kotlin.toString(this.completed)) + (', storage=' + Kotlin.toString(this.storage)) + (', maxRelativeNorm2=' + Kotlin.toString(this.maxRelativeNorm2)) + ')';
  };
  Format.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    result = result * 31 + Kotlin.hashCode(this.completed) | 0;
    result = result * 31 + Kotlin.hashCode(this.storage) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxRelativeNorm2) | 0;
    return result;
  };
  Format.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.time, other.time) && Kotlin.equals(this.completed, other.completed) && Kotlin.equals(this.storage, other.storage) && Kotlin.equals(this.maxRelativeNorm2, other.maxRelativeNorm2)))));
  };
  function SpmvDatapoint(name, rows, columns, nonzeros, formats) {
    this.name_pbzutf$_0 = name;
    this.rows_peg6r9$_0 = rows;
    this.columns_sxqwnd$_0 = columns;
    this.nonzeros_vlq9ow$_0 = nonzeros;
    this.formats = formats;
  }
  Object.defineProperty(SpmvDatapoint.prototype, 'name', {get: function () {
    return this.name_pbzutf$_0;
  }});
  Object.defineProperty(SpmvDatapoint.prototype, 'rows', {get: function () {
    return this.rows_peg6r9$_0;
  }});
  Object.defineProperty(SpmvDatapoint.prototype, 'columns', {get: function () {
    return this.columns_sxqwnd$_0;
  }});
  Object.defineProperty(SpmvDatapoint.prototype, 'nonzeros', {get: function () {
    return this.nonzeros_vlq9ow$_0;
  }});
  SpmvDatapoint.$metadata$ = {kind: Kind_CLASS, simpleName: 'SpmvDatapoint', interfaces: [MatrixDatapoint]};
  SpmvDatapoint.prototype.component1 = function () {
    return this.name;
  };
  SpmvDatapoint.prototype.component2 = function () {
    return this.rows;
  };
  SpmvDatapoint.prototype.component3 = function () {
    return this.columns;
  };
  SpmvDatapoint.prototype.component4 = function () {
    return this.nonzeros;
  };
  SpmvDatapoint.prototype.component5 = function () {
    return this.formats;
  };
  SpmvDatapoint.prototype.copy_jh8xyr$ = function (name, rows, columns, nonzeros, formats) {
    return new SpmvDatapoint(name === void 0 ? this.name : name, rows === void 0 ? this.rows : rows, columns === void 0 ? this.columns : columns, nonzeros === void 0 ? this.nonzeros : nonzeros, formats === void 0 ? this.formats : formats);
  };
  SpmvDatapoint.prototype.toString = function () {
    return 'SpmvDatapoint(name=' + Kotlin.toString(this.name) + (', rows=' + Kotlin.toString(this.rows)) + (', columns=' + Kotlin.toString(this.columns)) + (', nonzeros=' + Kotlin.toString(this.nonzeros)) + (', formats=' + Kotlin.toString(this.formats)) + ')';
  };
  SpmvDatapoint.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.rows) | 0;
    result = result * 31 + Kotlin.hashCode(this.columns) | 0;
    result = result * 31 + Kotlin.hashCode(this.nonzeros) | 0;
    result = result * 31 + Kotlin.hashCode(this.formats) | 0;
    return result;
  };
  SpmvDatapoint.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.rows, other.rows) && Kotlin.equals(this.columns, other.columns) && Kotlin.equals(this.nonzeros, other.nonzeros) && Kotlin.equals(this.formats, other.formats)))));
  };
  function SpmvBenchmarkResult(commit, device, datapoints) {
    this.commit_rz3f2t$_0 = commit;
    this.device_hw9w7o$_0 = device;
    this.datapoints_ljvep7$_0 = datapoints;
    this.benchmark_mvbtpn$_0 = BenchmarkType$Spmv_getInstance();
    this.summaryValues_phct6y$_0 = lazy(SpmvBenchmarkResult$summaryValues$lambda(this));
  }
  Object.defineProperty(SpmvBenchmarkResult.prototype, 'commit', {get: function () {
    return this.commit_rz3f2t$_0;
  }});
  Object.defineProperty(SpmvBenchmarkResult.prototype, 'device', {get: function () {
    return this.device_hw9w7o$_0;
  }});
  Object.defineProperty(SpmvBenchmarkResult.prototype, 'datapoints', {get: function () {
    return this.datapoints_ljvep7$_0;
  }});
  Object.defineProperty(SpmvBenchmarkResult.prototype, 'benchmark', {configurable: true, get: function () {
    return this.benchmark_mvbtpn$_0;
  }});
  Object.defineProperty(SpmvBenchmarkResult.prototype, 'summaryValues', {configurable: true, get: function () {
    return this.summaryValues_phct6y$_0.value;
  }});
  SpmvBenchmarkResult.prototype.calcBandwidths_0 = function () {
    var tmp$, tmp$_0;
    var bandwidths = LinkedHashMap_init();
    tmp$ = this.datapoints.iterator();
    while (tmp$.hasNext()) {
      var datapoint = tmp$.next();
      tmp$_0 = datapoint.formats.iterator();
      while (tmp$_0.hasNext()) {
        var format = tmp$_0.next();
        if (!format.completed)
          continue;
        var key = format.name;
        var tmp$_1;
        var value = bandwidths.get_11rb$(key);
        if (value == null) {
          var answer = ArrayList_init();
          bandwidths.put_xwzc9p$(key, answer);
          tmp$_1 = answer;
        } else {
          tmp$_1 = value;
        }
        tmp$_1.add_11rb$(datapoint.nonzeros.toNumber() / format.time);
      }
    }
    return bandwidths;
  };
  function SpmvBenchmarkResult$summaryValues$lambda(this$SpmvBenchmarkResult) {
    return function () {
      var $receiver = this$SpmvBenchmarkResult.calcBandwidths_0();
      var destination = LinkedHashMap_init_0(mapCapacity($receiver.size));
      var tmp$;
      tmp$ = $receiver.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0 = destination.put_xwzc9p$;
        var tmp$_1 = element.key;
        var values = element.value;
        tmp$_0.call(destination, tmp$_1, sorted(values).get_za3lpa$(values.size / 2 | 0));
      }
      return destination;
    };
  }
  SpmvBenchmarkResult.$metadata$ = {kind: Kind_CLASS, simpleName: 'SpmvBenchmarkResult', interfaces: [MatrixBenchmarkResult]};
  SpmvBenchmarkResult.prototype.component1 = function () {
    return this.commit;
  };
  SpmvBenchmarkResult.prototype.component2 = function () {
    return this.device;
  };
  SpmvBenchmarkResult.prototype.component3 = function () {
    return this.datapoints;
  };
  SpmvBenchmarkResult.prototype.copy_8gk032$ = function (commit, device, datapoints) {
    return new SpmvBenchmarkResult(commit === void 0 ? this.commit : commit, device === void 0 ? this.device : device, datapoints === void 0 ? this.datapoints : datapoints);
  };
  SpmvBenchmarkResult.prototype.toString = function () {
    return 'SpmvBenchmarkResult(commit=' + Kotlin.toString(this.commit) + (', device=' + Kotlin.toString(this.device)) + (', datapoints=' + Kotlin.toString(this.datapoints)) + ')';
  };
  SpmvBenchmarkResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.commit) | 0;
    result = result * 31 + Kotlin.hashCode(this.device) | 0;
    result = result * 31 + Kotlin.hashCode(this.datapoints) | 0;
    return result;
  };
  SpmvBenchmarkResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.commit, other.commit) && Kotlin.equals(this.device, other.device) && Kotlin.equals(this.datapoints, other.datapoints)))));
  };
  function Datapoint() {
  }
  Datapoint.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Datapoint', interfaces: []};
  function BenchmarkResult() {
  }
  Object.defineProperty(BenchmarkResult.prototype, 'identifier', {configurable: true, get: function () {
    return this.commit.sha.substring(0, 7) + '-' + this.device.name;
  }});
  BenchmarkResult.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'BenchmarkResult', interfaces: []};
  function BenchmarkType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BenchmarkType_initFields() {
    BenchmarkType_initFields = function () {
    };
    BenchmarkType$Spmv_instance = new BenchmarkType('Spmv', 0);
    BenchmarkType$Solver_instance = new BenchmarkType('Solver', 1);
    BenchmarkType$Preconditioner_instance = new BenchmarkType('Preconditioner', 2);
    BenchmarkType$Conversion_instance = new BenchmarkType('Conversion', 3);
    BenchmarkType$Blas_instance = new BenchmarkType('Blas', 4);
  }
  var BenchmarkType$Spmv_instance;
  function BenchmarkType$Spmv_getInstance() {
    BenchmarkType_initFields();
    return BenchmarkType$Spmv_instance;
  }
  var BenchmarkType$Solver_instance;
  function BenchmarkType$Solver_getInstance() {
    BenchmarkType_initFields();
    return BenchmarkType$Solver_instance;
  }
  var BenchmarkType$Preconditioner_instance;
  function BenchmarkType$Preconditioner_getInstance() {
    BenchmarkType_initFields();
    return BenchmarkType$Preconditioner_instance;
  }
  var BenchmarkType$Conversion_instance;
  function BenchmarkType$Conversion_getInstance() {
    BenchmarkType_initFields();
    return BenchmarkType$Conversion_instance;
  }
  var BenchmarkType$Blas_instance;
  function BenchmarkType$Blas_getInstance() {
    BenchmarkType_initFields();
    return BenchmarkType$Blas_instance;
  }
  BenchmarkType.$metadata$ = {kind: Kind_CLASS, simpleName: 'BenchmarkType', interfaces: [Enum]};
  function BenchmarkType$values() {
    return [BenchmarkType$Spmv_getInstance(), BenchmarkType$Solver_getInstance(), BenchmarkType$Preconditioner_getInstance(), BenchmarkType$Conversion_getInstance(), BenchmarkType$Blas_getInstance()];
  }
  BenchmarkType.values = BenchmarkType$values;
  function BenchmarkType$valueOf(name) {
    switch (name) {
      case 'Spmv':
        return BenchmarkType$Spmv_getInstance();
      case 'Solver':
        return BenchmarkType$Solver_getInstance();
      case 'Preconditioner':
        return BenchmarkType$Preconditioner_getInstance();
      case 'Conversion':
        return BenchmarkType$Conversion_getInstance();
      case 'Blas':
        return BenchmarkType$Blas_getInstance();
      default:throwISE('No enum constant com.parkview.parkview.git.BenchmarkType.' + name);
    }
  }
  BenchmarkType.valueOf_61zpoe$ = BenchmarkType$valueOf;
  function Commit(sha, message, date, author) {
    if (message === void 0)
      message = '';
    if (date === void 0)
      date = new Date();
    if (author === void 0)
      author = '';
    this.sha = sha;
    this.message = message;
    this.date = date;
    this.author = author;
    this.devices_0 = ArrayList_init();
  }
  Object.defineProperty(Commit.prototype, 'availableDevices', {configurable: true, get: function () {
    return copyToArray(this.devices_0);
  }});
  Commit.prototype.addDevice_2l8sov$ = function (device) {
    if (!this.devices_0.contains_11rb$(device))
      this.devices_0.add_11rb$(device);
  };
  Commit.prototype.equals = function (other) {
    if (Kotlin.isType(other, Commit) && equals(other.sha, this.sha))
      return true;
    return this === other;
  };
  Commit.$metadata$ = {kind: Kind_CLASS, simpleName: 'Commit', interfaces: []};
  Commit.prototype.component1 = function () {
    return this.sha;
  };
  Commit.prototype.component2 = function () {
    return this.message;
  };
  Commit.prototype.component3 = function () {
    return this.date;
  };
  Commit.prototype.component4 = function () {
    return this.author;
  };
  Commit.prototype.copy_gstagc$ = function (sha, message, date, author) {
    return new Commit(sha === void 0 ? this.sha : sha, message === void 0 ? this.message : message, date === void 0 ? this.date : date, author === void 0 ? this.author : author);
  };
  Commit.prototype.toString = function () {
    return 'Commit(sha=' + Kotlin.toString(this.sha) + (', message=' + Kotlin.toString(this.message)) + (', date=' + Kotlin.toString(this.date)) + (', author=' + Kotlin.toString(this.author)) + ')';
  };
  Commit.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.sha) | 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.author) | 0;
    return result;
  };
  function Device(name) {
    this.name = name;
  }
  Device.$metadata$ = {kind: Kind_CLASS, simpleName: 'Device', interfaces: []};
  Device.prototype.component1 = function () {
    return this.name;
  };
  Device.prototype.copy_61zpoe$ = function (name) {
    return new Device(name === void 0 ? this.name : name);
  };
  Device.prototype.toString = function () {
    return 'Device(name=' + Kotlin.toString(this.name) + ')';
  };
  Device.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  Device.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  var AvailablePlots_instance = null;
  var PlotType$Companion_instance = null;
  var PlotOptions_instance = null;
  var BlasOptions_instance = null;
  var MatrixOptions_instance = null;
  var DUMMY_BRANCH;
  var DUMMY_DEVICE;
  var DUMMY_COMMIT;
  var SPMV_DUMMY_RESULT;
  var package$com = _.com || (_.com = {});
  var package$parkview = package$com.parkview || (package$com.parkview = {});
  var package$parkview_0 = package$parkview.parkview || (package$parkview.parkview = {});
  var package$benchmark = package$parkview_0.benchmark || (package$parkview_0.benchmark = {});
  package$benchmark.BlasBenchmarkResult = BlasBenchmarkResult;
  package$benchmark.ConversionBenchmarkResult = ConversionBenchmarkResult;
  package$benchmark.MatrixDatapoint = MatrixDatapoint;
  package$benchmark.MatrixBenchmarkResult = MatrixBenchmarkResult;
  package$benchmark.PreconditionerBenchmarkResult = PreconditionerBenchmarkResult;
  package$benchmark.SolverBenchmarkResult = SolverBenchmarkResult;
  package$benchmark.Format = Format;
  package$benchmark.SpmvDatapoint = SpmvDatapoint;
  package$benchmark.SpmvBenchmarkResult = SpmvBenchmarkResult;
  var package$git = package$parkview_0.git || (package$parkview_0.git = {});
  package$git.Datapoint = Datapoint;
  package$git.BenchmarkResult = BenchmarkResult;
  Object.defineProperty(BenchmarkType, 'Spmv', {get: BenchmarkType$Spmv_getInstance});
  Object.defineProperty(BenchmarkType, 'Solver', {get: BenchmarkType$Solver_getInstance});
  Object.defineProperty(BenchmarkType, 'Preconditioner', {get: BenchmarkType$Preconditioner_getInstance});
  Object.defineProperty(BenchmarkType, 'Conversion', {get: BenchmarkType$Conversion_getInstance});
  Object.defineProperty(BenchmarkType, 'Blas', {get: BenchmarkType$Blas_getInstance});
  package$git.BenchmarkType = BenchmarkType;
  package$git.Commit = Commit;
  package$git.Device = Device;
  Object.defineProperty(BlasBenchmarkResult.prototype, 'identifier', Object.getOwnPropertyDescriptor(BenchmarkResult.prototype, 'identifier'));
  Object.defineProperty(MatrixBenchmarkResult.prototype, 'identifier', Object.getOwnPropertyDescriptor(BenchmarkResult.prototype, 'identifier'));
  Object.defineProperty(ConversionBenchmarkResult.prototype, 'identifier', Object.getOwnPropertyDescriptor(MatrixBenchmarkResult.prototype, 'identifier'));
  Object.defineProperty(PreconditionerBenchmarkResult.prototype, 'identifier', Object.getOwnPropertyDescriptor(MatrixBenchmarkResult.prototype, 'identifier'));
  Object.defineProperty(SolverBenchmarkResult.prototype, 'identifier', Object.getOwnPropertyDescriptor(MatrixBenchmarkResult.prototype, 'identifier'));
  Object.defineProperty(SpmvBenchmarkResult.prototype, 'identifier', Object.getOwnPropertyDescriptor(MatrixBenchmarkResult.prototype, 'identifier'));
  DUMMY_BRANCH = 'test';
  DUMMY_DEVICE = new Device('meter');
  DUMMY_COMMIT = new Commit('peter');
  var tmp$ = DUMMY_COMMIT;
  var tmp$_0 = DUMMY_DEVICE;
  var $receiver = new IntRange(1, 5);
  var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
  var tmp$_1;
  tmp$_1 = $receiver.iterator();
  while (tmp$_1.hasNext()) {
    var item = tmp$_1.next();
    destination.add_11rb$(new SpmvDatapoint('Datapoint_' + item, Kotlin.Long.fromInt(item).multiply(Kotlin.Long.fromInt(10)), Kotlin.Long.fromInt(item).multiply(Kotlin.Long.fromInt(10)), Kotlin.Long.fromInt(item).multiply(Kotlin.Long.fromInt(10)), listOf_0(new Format('format_name', 1.0, true, L1, 1.0))));
  }
  SPMV_DUMMY_RESULT = new SpmvBenchmarkResult(tmp$, tmp$_0, destination);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=parkview.js.map
