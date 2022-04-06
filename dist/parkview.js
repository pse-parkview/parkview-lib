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
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var first = Kotlin.kotlin.collections.first_us0mfu$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var toString = Kotlin.toString;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var asSequence = Kotlin.kotlin.collections.asSequence_us0mfu$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var flatten = Kotlin.kotlin.sequences.flatten_d9bjs1$;
  var minOrNull = Kotlin.kotlin.sequences.minOrNull_gtzq52$;
  var maxOrNull = Kotlin.kotlin.sequences.maxOrNull_gtzq52$;
  var filter = Kotlin.kotlin.sequences.filter_euau3h$;
  var Sequence = Kotlin.kotlin.sequences.Sequence;
  var throwCCE = Kotlin.throwCCE;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var first_0 = Kotlin.kotlin.collections.first_2p1efm$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var minOrNull_0 = Kotlin.kotlin.collections.minOrNull_l63kqw$;
  var sort = Kotlin.kotlin.collections.sort_4wi501$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$;
  var zip_0 = Kotlin.kotlin.collections.zip_r9t3v7$;
  var Pair = Kotlin.kotlin.Pair;
  var toList_0 = Kotlin.kotlin.collections.toList_abgq59$;
  var toList_1 = Kotlin.kotlin.collections.toList_us0mfu$;
  var flatten_0 = Kotlin.kotlin.collections.flatten_u0ad8z$;
  MissingBenchmarkResultException.prototype = Object.create(Exception.prototype);
  MissingBenchmarkResultException.prototype.constructor = MissingBenchmarkResultException;
  BenchmarkType.prototype = Object.create(Enum.prototype);
  BenchmarkType.prototype.constructor = BenchmarkType;
  RepositoryException.prototype = Object.create(Exception.prototype);
  RepositoryException.prototype.constructor = RepositoryException;
  DynamicOption.prototype = Object.create(PlotOption.prototype);
  DynamicOption.prototype.constructor = DynamicOption;
  DynamicCategoricalOption.prototype = Object.create(DynamicOption.prototype);
  DynamicCategoricalOption.prototype.constructor = DynamicCategoricalOption;
  DynamicNumericalOption.prototype = Object.create(DynamicOption.prototype);
  DynamicNumericalOption.prototype.constructor = DynamicNumericalOption;
  CategoricalOption.prototype = Object.create(PlotOption.prototype);
  CategoricalOption.prototype.constructor = CategoricalOption;
  NumericalOption.prototype = Object.create(PlotOption.prototype);
  NumericalOption.prototype.constructor = NumericalOption;
  InvalidPlotTransformException.prototype = Object.create(Exception.prototype);
  InvalidPlotTransformException.prototype.constructor = InvalidPlotTransformException;
  InvalidPlotConfigValueException.prototype = Object.create(Exception.prototype);
  InvalidPlotConfigValueException.prototype.constructor = InvalidPlotConfigValueException;
  InvalidPlotConfigNameException.prototype = Object.create(Exception.prototype);
  InvalidPlotConfigNameException.prototype.constructor = InvalidPlotConfigNameException;
  PlotOptions$comparison$ObjectLiteral.prototype = Object.create(DynamicCategoricalOption.prototype);
  PlotOptions$comparison$ObjectLiteral.prototype.constructor = PlotOptions$comparison$ObjectLiteral;
  BlasOptions$minN$ObjectLiteral.prototype = Object.create(DynamicNumericalOption.prototype);
  BlasOptions$minN$ObjectLiteral.prototype.constructor = BlasOptions$minN$ObjectLiteral;
  BlasOptions$maxN$ObjectLiteral.prototype = Object.create(DynamicNumericalOption.prototype);
  BlasOptions$maxN$ObjectLiteral.prototype.constructor = BlasOptions$maxN$ObjectLiteral;
  BlasOptions$minR$ObjectLiteral.prototype = Object.create(DynamicNumericalOption.prototype);
  BlasOptions$minR$ObjectLiteral.prototype.constructor = BlasOptions$minR$ObjectLiteral;
  BlasOptions$maxR$ObjectLiteral.prototype = Object.create(DynamicNumericalOption.prototype);
  BlasOptions$maxR$ObjectLiteral.prototype.constructor = BlasOptions$maxR$ObjectLiteral;
  BlasOptions$minM$ObjectLiteral.prototype = Object.create(DynamicNumericalOption.prototype);
  BlasOptions$minM$ObjectLiteral.prototype.constructor = BlasOptions$minM$ObjectLiteral;
  BlasOptions$maxM$ObjectLiteral.prototype = Object.create(DynamicNumericalOption.prototype);
  BlasOptions$maxM$ObjectLiteral.prototype.constructor = BlasOptions$maxM$ObjectLiteral;
  BlasOptions$minK$ObjectLiteral.prototype = Object.create(DynamicNumericalOption.prototype);
  BlasOptions$minK$ObjectLiteral.prototype.constructor = BlasOptions$minK$ObjectLiteral;
  BlasOptions$maxK$ObjectLiteral.prototype = Object.create(DynamicNumericalOption.prototype);
  BlasOptions$maxK$ObjectLiteral.prototype.constructor = BlasOptions$maxK$ObjectLiteral;
  BlasSpeedupTransform.prototype = Object.create(BlasPlotTransform.prototype);
  BlasSpeedupTransform.prototype.constructor = BlasSpeedupTransform;
  SingleBlasPlot.prototype = Object.create(BlasPlotTransform.prototype);
  SingleBlasPlot.prototype.constructor = SingleBlasPlot;
  MatrixOptions$matrix$ObjectLiteral.prototype = Object.create(DynamicCategoricalOption.prototype);
  MatrixOptions$matrix$ObjectLiteral.prototype.constructor = MatrixOptions$matrix$ObjectLiteral;
  MatrixOptions$minRows$ObjectLiteral.prototype = Object.create(DynamicNumericalOption.prototype);
  MatrixOptions$minRows$ObjectLiteral.prototype.constructor = MatrixOptions$minRows$ObjectLiteral;
  MatrixOptions$maxRows$ObjectLiteral.prototype = Object.create(DynamicNumericalOption.prototype);
  MatrixOptions$maxRows$ObjectLiteral.prototype.constructor = MatrixOptions$maxRows$ObjectLiteral;
  MatrixOptions$minColumns$ObjectLiteral.prototype = Object.create(DynamicNumericalOption.prototype);
  MatrixOptions$minColumns$ObjectLiteral.prototype.constructor = MatrixOptions$minColumns$ObjectLiteral;
  MatrixOptions$maxColumns$ObjectLiteral.prototype = Object.create(DynamicNumericalOption.prototype);
  MatrixOptions$maxColumns$ObjectLiteral.prototype.constructor = MatrixOptions$maxColumns$ObjectLiteral;
  MatrixOptions$minNonzeros$ObjectLiteral.prototype = Object.create(DynamicNumericalOption.prototype);
  MatrixOptions$minNonzeros$ObjectLiteral.prototype.constructor = MatrixOptions$minNonzeros$ObjectLiteral;
  MatrixOptions$maxNonzeros$ObjectLiteral.prototype = Object.create(DynamicNumericalOption.prototype);
  MatrixOptions$maxNonzeros$ObjectLiteral.prototype.constructor = MatrixOptions$maxNonzeros$ObjectLiteral;
  ConversionPlotTransform.prototype = Object.create(MatrixPlotTransform.prototype);
  ConversionPlotTransform.prototype.constructor = ConversionPlotTransform;
  ConversionSingleScatterPlot.prototype = Object.create(ConversionPlotTransform.prototype);
  ConversionSingleScatterPlot.prototype.constructor = ConversionSingleScatterPlot;
  ConversionSpeedupPlot.prototype = Object.create(ConversionPlotTransform.prototype);
  ConversionSpeedupPlot.prototype.constructor = ConversionSpeedupPlot;
  PreconditionerPlotTransform.prototype = Object.create(MatrixPlotTransform.prototype);
  PreconditionerPlotTransform.prototype.constructor = PreconditionerPlotTransform;
  PreconditionerOverview.prototype = Object.create(PreconditionerPlotTransform.prototype);
  PreconditionerOverview.prototype.constructor = PreconditionerOverview;
  SolverPlotTransform.prototype = Object.create(MatrixPlotTransform.prototype);
  SolverPlotTransform.prototype.constructor = SolverPlotTransform;
  SolverConvergencePlot.prototype = Object.create(SolverPlotTransform.prototype);
  SolverConvergencePlot.prototype.constructor = SolverConvergencePlot;
  SolverRuntimeBreakdown.prototype = Object.create(SolverPlotTransform.prototype);
  SolverRuntimeBreakdown.prototype.constructor = SolverRuntimeBreakdown;
  SpmvPerformanceProfile$maxXOption$ObjectLiteral.prototype = Object.create(DynamicNumericalOption.prototype);
  SpmvPerformanceProfile$maxXOption$ObjectLiteral.prototype.constructor = SpmvPerformanceProfile$maxXOption$ObjectLiteral;
  SpmvPlotTransform.prototype = Object.create(MatrixPlotTransform.prototype);
  SpmvPlotTransform.prototype.constructor = SpmvPlotTransform;
  SpmvPerformanceProfile.prototype = Object.create(SpmvPlotTransform.prototype);
  SpmvPerformanceProfile.prototype.constructor = SpmvPerformanceProfile;
  SpmvSingleScatterPlot.prototype = Object.create(SpmvPlotTransform.prototype);
  SpmvSingleScatterPlot.prototype.constructor = SpmvSingleScatterPlot;
  SpmvSpeedupPlot.prototype = Object.create(SpmvPlotTransform.prototype);
  SpmvSpeedupPlot.prototype.constructor = SpmvSpeedupPlot;
  function AppConfig(database, gitApi, performanceTracker) {
    if (performanceTracker === void 0)
      performanceTracker = new PerformanceTrackerConfig();
    this.database = database;
    this.gitApi = gitApi;
    this.performanceTracker = performanceTracker;
  }
  AppConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AppConfig',
    interfaces: []
  };
  AppConfig.prototype.component1 = function () {
    return this.database;
  };
  AppConfig.prototype.component2 = function () {
    return this.gitApi;
  };
  AppConfig.prototype.component3 = function () {
    return this.performanceTracker;
  };
  AppConfig.prototype.copy_fky70q$ = function (database, gitApi, performanceTracker) {
    return new AppConfig(database === void 0 ? this.database : database, gitApi === void 0 ? this.gitApi : gitApi, performanceTracker === void 0 ? this.performanceTracker : performanceTracker);
  };
  AppConfig.prototype.toString = function () {
    return 'AppConfig(database=' + Kotlin.toString(this.database) + (', gitApi=' + Kotlin.toString(this.gitApi)) + (', performanceTracker=' + Kotlin.toString(this.performanceTracker)) + ')';
  };
  AppConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.database) | 0;
    result = result * 31 + Kotlin.hashCode(this.gitApi) | 0;
    result = result * 31 + Kotlin.hashCode(this.performanceTracker) | 0;
    return result;
  };
  AppConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.database, other.database) && Kotlin.equals(this.gitApi, other.gitApi) && Kotlin.equals(this.performanceTracker, other.performanceTracker)))));
  };
  function GitApiConfig(maxCached, branchLifetime, shaLifetime, branchListLifetime, repoName, owner, firstCommitSha, username, token) {
    if (username === void 0)
      username = '';
    if (token === void 0)
      token = '';
    this.maxCached = maxCached;
    this.branchLifetime = branchLifetime;
    this.shaLifetime = shaLifetime;
    this.branchListLifetime = branchListLifetime;
    this.repoName = repoName;
    this.owner = owner;
    this.firstCommitSha = firstCommitSha;
    this.username = username;
    this.token = token;
  }
  GitApiConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GitApiConfig',
    interfaces: []
  };
  GitApiConfig.prototype.component1 = function () {
    return this.maxCached;
  };
  GitApiConfig.prototype.component2 = function () {
    return this.branchLifetime;
  };
  GitApiConfig.prototype.component3 = function () {
    return this.shaLifetime;
  };
  GitApiConfig.prototype.component4 = function () {
    return this.branchListLifetime;
  };
  GitApiConfig.prototype.component5 = function () {
    return this.repoName;
  };
  GitApiConfig.prototype.component6 = function () {
    return this.owner;
  };
  GitApiConfig.prototype.component7 = function () {
    return this.firstCommitSha;
  };
  GitApiConfig.prototype.component8 = function () {
    return this.username;
  };
  GitApiConfig.prototype.component9 = function () {
    return this.token;
  };
  GitApiConfig.prototype.copy_bd8q6e$ = function (maxCached, branchLifetime, shaLifetime, branchListLifetime, repoName, owner, firstCommitSha, username, token) {
    return new GitApiConfig(maxCached === void 0 ? this.maxCached : maxCached, branchLifetime === void 0 ? this.branchLifetime : branchLifetime, shaLifetime === void 0 ? this.shaLifetime : shaLifetime, branchListLifetime === void 0 ? this.branchListLifetime : branchListLifetime, repoName === void 0 ? this.repoName : repoName, owner === void 0 ? this.owner : owner, firstCommitSha === void 0 ? this.firstCommitSha : firstCommitSha, username === void 0 ? this.username : username, token === void 0 ? this.token : token);
  };
  GitApiConfig.prototype.toString = function () {
    return 'GitApiConfig(maxCached=' + Kotlin.toString(this.maxCached) + (', branchLifetime=' + Kotlin.toString(this.branchLifetime)) + (', shaLifetime=' + Kotlin.toString(this.shaLifetime)) + (', branchListLifetime=' + Kotlin.toString(this.branchListLifetime)) + (', repoName=' + Kotlin.toString(this.repoName)) + (', owner=' + Kotlin.toString(this.owner)) + (', firstCommitSha=' + Kotlin.toString(this.firstCommitSha)) + (', username=' + Kotlin.toString(this.username)) + (', token=' + Kotlin.toString(this.token)) + ')';
  };
  GitApiConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.maxCached) | 0;
    result = result * 31 + Kotlin.hashCode(this.branchLifetime) | 0;
    result = result * 31 + Kotlin.hashCode(this.shaLifetime) | 0;
    result = result * 31 + Kotlin.hashCode(this.branchListLifetime) | 0;
    result = result * 31 + Kotlin.hashCode(this.repoName) | 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    result = result * 31 + Kotlin.hashCode(this.firstCommitSha) | 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    result = result * 31 + Kotlin.hashCode(this.token) | 0;
    return result;
  };
  GitApiConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.maxCached, other.maxCached) && Kotlin.equals(this.branchLifetime, other.branchLifetime) && Kotlin.equals(this.shaLifetime, other.shaLifetime) && Kotlin.equals(this.branchListLifetime, other.branchListLifetime) && Kotlin.equals(this.repoName, other.repoName) && Kotlin.equals(this.owner, other.owner) && Kotlin.equals(this.firstCommitSha, other.firstCommitSha) && Kotlin.equals(this.username, other.username) && Kotlin.equals(this.token, other.token)))));
  };
  function DatabaseConfig(datasource, maxCached, embedded) {
    if (embedded === void 0)
      embedded = false;
    this.datasource = datasource;
    this.maxCached = maxCached;
    this.embedded = embedded;
  }
  DatabaseConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DatabaseConfig',
    interfaces: []
  };
  DatabaseConfig.prototype.component1 = function () {
    return this.datasource;
  };
  DatabaseConfig.prototype.component2 = function () {
    return this.maxCached;
  };
  DatabaseConfig.prototype.component3 = function () {
    return this.embedded;
  };
  DatabaseConfig.prototype.copy_861i8d$ = function (datasource, maxCached, embedded) {
    return new DatabaseConfig(datasource === void 0 ? this.datasource : datasource, maxCached === void 0 ? this.maxCached : maxCached, embedded === void 0 ? this.embedded : embedded);
  };
  DatabaseConfig.prototype.toString = function () {
    return 'DatabaseConfig(datasource=' + Kotlin.toString(this.datasource) + (', maxCached=' + Kotlin.toString(this.maxCached)) + (', embedded=' + Kotlin.toString(this.embedded)) + ')';
  };
  DatabaseConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.datasource) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxCached) | 0;
    result = result * 31 + Kotlin.hashCode(this.embedded) | 0;
    return result;
  };
  DatabaseConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.datasource, other.datasource) && Kotlin.equals(this.maxCached, other.maxCached) && Kotlin.equals(this.embedded, other.embedded)))));
  };
  function DataSourceConfig(jdbcUrl, username, password) {
    this.jdbcUrl = jdbcUrl;
    this.username = username;
    this.password = password;
  }
  DataSourceConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataSourceConfig',
    interfaces: []
  };
  DataSourceConfig.prototype.component1 = function () {
    return this.jdbcUrl;
  };
  DataSourceConfig.prototype.component2 = function () {
    return this.username;
  };
  DataSourceConfig.prototype.component3 = function () {
    return this.password;
  };
  DataSourceConfig.prototype.copy_6hosri$ = function (jdbcUrl, username, password) {
    return new DataSourceConfig(jdbcUrl === void 0 ? this.jdbcUrl : jdbcUrl, username === void 0 ? this.username : username, password === void 0 ? this.password : password);
  };
  DataSourceConfig.prototype.toString = function () {
    return 'DataSourceConfig(jdbcUrl=' + Kotlin.toString(this.jdbcUrl) + (', username=' + Kotlin.toString(this.username)) + (', password=' + Kotlin.toString(this.password)) + ')';
  };
  DataSourceConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.jdbcUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    result = result * 31 + Kotlin.hashCode(this.password) | 0;
    return result;
  };
  DataSourceConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.jdbcUrl, other.jdbcUrl) && Kotlin.equals(this.username, other.username) && Kotlin.equals(this.password, other.password)))));
  };
  function PerformanceTrackerConfig(commentHookEnabled) {
    if (commentHookEnabled === void 0)
      commentHookEnabled = false;
    this.commentHookEnabled = commentHookEnabled;
  }
  PerformanceTrackerConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PerformanceTrackerConfig',
    interfaces: []
  };
  PerformanceTrackerConfig.prototype.component1 = function () {
    return this.commentHookEnabled;
  };
  PerformanceTrackerConfig.prototype.copy_6taknv$ = function (commentHookEnabled) {
    return new PerformanceTrackerConfig(commentHookEnabled === void 0 ? this.commentHookEnabled : commentHookEnabled);
  };
  PerformanceTrackerConfig.prototype.toString = function () {
    return 'PerformanceTrackerConfig(commentHookEnabled=' + Kotlin.toString(this.commentHookEnabled) + ')';
  };
  PerformanceTrackerConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.commentHookEnabled) | 0;
    return result;
  };
  PerformanceTrackerConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.commentHookEnabled, other.commentHookEnabled))));
  };
  function BenchmarkJsonParser() {
  }
  BenchmarkJsonParser.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BenchmarkJsonParser',
    interfaces: []
  };
  function Operation(name, time, flops, bandwidth, completed, repetitions) {
    if (repetitions === void 0)
      repetitions = L0;
    this.name = name;
    this.time = time;
    this.flops = flops;
    this.bandwidth = bandwidth;
    this.completed = completed;
    this.repetitions = repetitions;
  }
  Operation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Operation',
    interfaces: []
  };
  Operation.prototype.component1 = function () {
    return this.name;
  };
  Operation.prototype.component2 = function () {
    return this.time;
  };
  Operation.prototype.component3 = function () {
    return this.flops;
  };
  Operation.prototype.component4 = function () {
    return this.bandwidth;
  };
  Operation.prototype.component5 = function () {
    return this.completed;
  };
  Operation.prototype.component6 = function () {
    return this.repetitions;
  };
  Operation.prototype.copy_22pxhs$ = function (name, time, flops, bandwidth, completed, repetitions) {
    return new Operation(name === void 0 ? this.name : name, time === void 0 ? this.time : time, flops === void 0 ? this.flops : flops, bandwidth === void 0 ? this.bandwidth : bandwidth, completed === void 0 ? this.completed : completed, repetitions === void 0 ? this.repetitions : repetitions);
  };
  Operation.prototype.toString = function () {
    return 'Operation(name=' + Kotlin.toString(this.name) + (', time=' + Kotlin.toString(this.time)) + (', flops=' + Kotlin.toString(this.flops)) + (', bandwidth=' + Kotlin.toString(this.bandwidth)) + (', completed=' + Kotlin.toString(this.completed)) + (', repetitions=' + Kotlin.toString(this.repetitions)) + ')';
  };
  Operation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    result = result * 31 + Kotlin.hashCode(this.flops) | 0;
    result = result * 31 + Kotlin.hashCode(this.bandwidth) | 0;
    result = result * 31 + Kotlin.hashCode(this.completed) | 0;
    result = result * 31 + Kotlin.hashCode(this.repetitions) | 0;
    return result;
  };
  Operation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.time, other.time) && Kotlin.equals(this.flops, other.flops) && Kotlin.equals(this.bandwidth, other.bandwidth) && Kotlin.equals(this.completed, other.completed) && Kotlin.equals(this.repetitions, other.repetitions)))));
  };
  function BlasDatapoint(n, r, m, k, operations) {
    if (r === void 0)
      r = L1;
    if (m === void 0)
      m = n;
    if (k === void 0)
      k = n;
    this.n = n;
    this.r = r;
    this.m = m;
    this.k = k;
    this.operations = operations;
  }
  BlasDatapoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlasDatapoint',
    interfaces: [Datapoint]
  };
  BlasDatapoint.prototype.component1 = function () {
    return this.n;
  };
  BlasDatapoint.prototype.component2 = function () {
    return this.r;
  };
  BlasDatapoint.prototype.component3 = function () {
    return this.m;
  };
  BlasDatapoint.prototype.component4 = function () {
    return this.k;
  };
  BlasDatapoint.prototype.component5 = function () {
    return this.operations;
  };
  BlasDatapoint.prototype.copy_tn383g$ = function (n, r, m, k, operations) {
    return new BlasDatapoint(n === void 0 ? this.n : n, r === void 0 ? this.r : r, m === void 0 ? this.m : m, k === void 0 ? this.k : k, operations === void 0 ? this.operations : operations);
  };
  BlasDatapoint.prototype.toString = function () {
    return 'BlasDatapoint(n=' + Kotlin.toString(this.n) + (', r=' + Kotlin.toString(this.r)) + (', m=' + Kotlin.toString(this.m)) + (', k=' + Kotlin.toString(this.k)) + (', operations=' + Kotlin.toString(this.operations)) + ')';
  };
  BlasDatapoint.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.n) | 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    result = result * 31 + Kotlin.hashCode(this.m) | 0;
    result = result * 31 + Kotlin.hashCode(this.k) | 0;
    result = result * 31 + Kotlin.hashCode(this.operations) | 0;
    return result;
  };
  BlasDatapoint.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.n, other.n) && Kotlin.equals(this.r, other.r) && Kotlin.equals(this.m, other.m) && Kotlin.equals(this.k, other.k) && Kotlin.equals(this.operations, other.operations)))));
  };
  function BlasBenchmarkResult(commit, device, datapoints) {
    this.commit_qvr37v$_0 = commit;
    this.device_gsxkcq$_0 = device;
    this.datapoints_wqx9up$_0 = datapoints;
    this.benchmark_1z15zf$_0 = BenchmarkType$Blas_getInstance();
    this.summaryValues_kzgd4w$_0 = lazy(BlasBenchmarkResult$summaryValues$lambda(this));
  }
  Object.defineProperty(BlasBenchmarkResult.prototype, 'commit', {
    get: function () {
      return this.commit_qvr37v$_0;
    }
  });
  Object.defineProperty(BlasBenchmarkResult.prototype, 'device', {
    get: function () {
      return this.device_gsxkcq$_0;
    }
  });
  Object.defineProperty(BlasBenchmarkResult.prototype, 'datapoints', {
    get: function () {
      return this.datapoints_wqx9up$_0;
    }
  });
  Object.defineProperty(BlasBenchmarkResult.prototype, 'benchmark', {
    configurable: true,
    get: function () {
      return this.benchmark_1z15zf$_0;
    }
  });
  Object.defineProperty(BlasBenchmarkResult.prototype, 'summaryValues', {
    configurable: true,
    get: function () {
      return this.summaryValues_kzgd4w$_0.value;
    }
  });
  BlasBenchmarkResult.prototype.calcBandwidths_0 = function () {
    var tmp$, tmp$_0;
    var bandwidths = LinkedHashMap_init();
    tmp$ = this.datapoints.iterator();
    while (tmp$.hasNext()) {
      var datapoint = tmp$.next();
      tmp$_0 = datapoint.operations.iterator();
      while (tmp$_0.hasNext()) {
        var operation = tmp$_0.next();
        if (!operation.completed)
          continue;
        var key = operation.name;
        var tmp$_1;
        var value = bandwidths.get_11rb$(key);
        if (value == null) {
          var answer = ArrayList_init();
          bandwidths.put_xwzc9p$(key, answer);
          tmp$_1 = answer;
        } else {
          tmp$_1 = value;
        }
        tmp$_1.add_11rb$(operation.bandwidth);
      }
    }
    return bandwidths;
  };
  function BlasBenchmarkResult$summaryValues$lambda(this$BlasBenchmarkResult) {
    return function () {
      var $receiver = this$BlasBenchmarkResult.calcBandwidths_0();
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
  BlasBenchmarkResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlasBenchmarkResult',
    interfaces: [BenchmarkResult]
  };
  BlasBenchmarkResult.prototype.component1 = function () {
    return this.commit;
  };
  BlasBenchmarkResult.prototype.component2 = function () {
    return this.device;
  };
  BlasBenchmarkResult.prototype.component3 = function () {
    return this.datapoints;
  };
  BlasBenchmarkResult.prototype.copy_kg8qas$ = function (commit, device, datapoints) {
    return new BlasBenchmarkResult(commit === void 0 ? this.commit : commit, device === void 0 ? this.device : device, datapoints === void 0 ? this.datapoints : datapoints);
  };
  BlasBenchmarkResult.prototype.toString = function () {
    return 'BlasBenchmarkResult(commit=' + Kotlin.toString(this.commit) + (', device=' + Kotlin.toString(this.device)) + (', datapoints=' + Kotlin.toString(this.datapoints)) + ')';
  };
  BlasBenchmarkResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.commit) | 0;
    result = result * 31 + Kotlin.hashCode(this.device) | 0;
    result = result * 31 + Kotlin.hashCode(this.datapoints) | 0;
    return result;
  };
  BlasBenchmarkResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.commit, other.commit) && Kotlin.equals(this.device, other.device) && Kotlin.equals(this.datapoints, other.datapoints)))));
  };
  function Component(name, runtime) {
    this.name = name;
    this.runtime = runtime;
  }
  Component.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Component',
    interfaces: []
  };
  Component.prototype.component1 = function () {
    return this.name;
  };
  Component.prototype.component2 = function () {
    return this.runtime;
  };
  Component.prototype.copy_io5o9c$ = function (name, runtime) {
    return new Component(name === void 0 ? this.name : name, runtime === void 0 ? this.runtime : runtime);
  };
  Component.prototype.toString = function () {
    return 'Component(name=' + Kotlin.toString(this.name) + (', runtime=' + Kotlin.toString(this.runtime)) + ')';
  };
  Component.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.runtime) | 0;
    return result;
  };
  Component.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.runtime, other.runtime)))));
  };
  function Conversion(name, time, completed) {
    this.name = name;
    this.time = time;
    this.completed = completed;
  }
  Conversion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Conversion',
    interfaces: []
  };
  Conversion.prototype.component1 = function () {
    return this.name;
  };
  Conversion.prototype.component2 = function () {
    return this.time;
  };
  Conversion.prototype.component3 = function () {
    return this.completed;
  };
  Conversion.prototype.copy_1truf$ = function (name, time, completed) {
    return new Conversion(name === void 0 ? this.name : name, time === void 0 ? this.time : time, completed === void 0 ? this.completed : completed);
  };
  Conversion.prototype.toString = function () {
    return 'Conversion(name=' + Kotlin.toString(this.name) + (', time=' + Kotlin.toString(this.time)) + (', completed=' + Kotlin.toString(this.completed)) + ')';
  };
  Conversion.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    result = result * 31 + Kotlin.hashCode(this.completed) | 0;
    return result;
  };
  Conversion.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.time, other.time) && Kotlin.equals(this.completed, other.completed)))));
  };
  function ConversionDatapoint(name, rows, columns, nonzeros, conversions) {
    this.name_7z53wt$_0 = name;
    this.rows_7woryz$_0 = rows;
    this.columns_aruq3d$_0 = columns;
    this.nonzeros_y96zpc$_0 = nonzeros;
    this.conversions = conversions;
  }
  Object.defineProperty(ConversionDatapoint.prototype, 'name', {
    get: function () {
      return this.name_7z53wt$_0;
    }
  });
  Object.defineProperty(ConversionDatapoint.prototype, 'rows', {
    get: function () {
      return this.rows_7woryz$_0;
    }
  });
  Object.defineProperty(ConversionDatapoint.prototype, 'columns', {
    get: function () {
      return this.columns_aruq3d$_0;
    }
  });
  Object.defineProperty(ConversionDatapoint.prototype, 'nonzeros', {
    get: function () {
      return this.nonzeros_y96zpc$_0;
    }
  });
  ConversionDatapoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConversionDatapoint',
    interfaces: [MatrixDatapoint]
  };
  ConversionDatapoint.prototype.component1 = function () {
    return this.name;
  };
  ConversionDatapoint.prototype.component2 = function () {
    return this.rows;
  };
  ConversionDatapoint.prototype.component3 = function () {
    return this.columns;
  };
  ConversionDatapoint.prototype.component4 = function () {
    return this.nonzeros;
  };
  ConversionDatapoint.prototype.component5 = function () {
    return this.conversions;
  };
  ConversionDatapoint.prototype.copy_8r7w0e$ = function (name, rows, columns, nonzeros, conversions) {
    return new ConversionDatapoint(name === void 0 ? this.name : name, rows === void 0 ? this.rows : rows, columns === void 0 ? this.columns : columns, nonzeros === void 0 ? this.nonzeros : nonzeros, conversions === void 0 ? this.conversions : conversions);
  };
  ConversionDatapoint.prototype.toString = function () {
    return 'ConversionDatapoint(name=' + Kotlin.toString(this.name) + (', rows=' + Kotlin.toString(this.rows)) + (', columns=' + Kotlin.toString(this.columns)) + (', nonzeros=' + Kotlin.toString(this.nonzeros)) + (', conversions=' + Kotlin.toString(this.conversions)) + ')';
  };
  ConversionDatapoint.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.rows) | 0;
    result = result * 31 + Kotlin.hashCode(this.columns) | 0;
    result = result * 31 + Kotlin.hashCode(this.nonzeros) | 0;
    result = result * 31 + Kotlin.hashCode(this.conversions) | 0;
    return result;
  };
  ConversionDatapoint.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.rows, other.rows) && Kotlin.equals(this.columns, other.columns) && Kotlin.equals(this.nonzeros, other.nonzeros) && Kotlin.equals(this.conversions, other.conversions)))));
  };
  function ConversionBenchmarkResult(commit, device, datapoints) {
    this.commit_788dgb$_0 = commit;
    this.device_hb1wbg$_0 = device;
    this.datapoints_atpz3v$_0 = datapoints;
    this.benchmark_pld5t1$_0 = BenchmarkType$Conversion_getInstance();
    this.summaryValues_81o97e$_0 = lazy(ConversionBenchmarkResult$summaryValues$lambda(this));
  }
  Object.defineProperty(ConversionBenchmarkResult.prototype, 'commit', {
    get: function () {
      return this.commit_788dgb$_0;
    }
  });
  Object.defineProperty(ConversionBenchmarkResult.prototype, 'device', {
    get: function () {
      return this.device_hb1wbg$_0;
    }
  });
  Object.defineProperty(ConversionBenchmarkResult.prototype, 'datapoints', {
    get: function () {
      return this.datapoints_atpz3v$_0;
    }
  });
  Object.defineProperty(ConversionBenchmarkResult.prototype, 'benchmark', {
    configurable: true,
    get: function () {
      return this.benchmark_pld5t1$_0;
    }
  });
  Object.defineProperty(ConversionBenchmarkResult.prototype, 'summaryValues', {
    configurable: true,
    get: function () {
      return this.summaryValues_81o97e$_0.value;
    }
  });
  ConversionBenchmarkResult.prototype.calcBandwidths_0 = function () {
    var tmp$, tmp$_0;
    var bandwidths = LinkedHashMap_init();
    tmp$ = this.datapoints.iterator();
    while (tmp$.hasNext()) {
      var datapoint = tmp$.next();
      tmp$_0 = datapoint.conversions.iterator();
      while (tmp$_0.hasNext()) {
        var conversion = tmp$_0.next();
        if (!conversion.completed)
          continue;
        var key = conversion.name;
        var tmp$_1;
        var value = bandwidths.get_11rb$(key);
        if (value == null) {
          var answer = ArrayList_init();
          bandwidths.put_xwzc9p$(key, answer);
          tmp$_1 = answer;
        } else {
          tmp$_1 = value;
        }
        tmp$_1.add_11rb$(datapoint.nonzeros.toNumber() / conversion.time);
      }
    }
    return bandwidths;
  };
  function ConversionBenchmarkResult$summaryValues$lambda(this$ConversionBenchmarkResult) {
    return function () {
      var $receiver = this$ConversionBenchmarkResult.calcBandwidths_0();
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
  ConversionBenchmarkResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConversionBenchmarkResult',
    interfaces: [MatrixBenchmarkResult]
  };
  ConversionBenchmarkResult.prototype.component1 = function () {
    return this.commit;
  };
  ConversionBenchmarkResult.prototype.component2 = function () {
    return this.device;
  };
  ConversionBenchmarkResult.prototype.component3 = function () {
    return this.datapoints;
  };
  ConversionBenchmarkResult.prototype.copy_2ct45e$ = function (commit, device, datapoints) {
    return new ConversionBenchmarkResult(commit === void 0 ? this.commit : commit, device === void 0 ? this.device : device, datapoints === void 0 ? this.datapoints : datapoints);
  };
  ConversionBenchmarkResult.prototype.toString = function () {
    return 'ConversionBenchmarkResult(commit=' + Kotlin.toString(this.commit) + (', device=' + Kotlin.toString(this.device)) + (', datapoints=' + Kotlin.toString(this.datapoints)) + ')';
  };
  ConversionBenchmarkResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.commit) | 0;
    result = result * 31 + Kotlin.hashCode(this.device) | 0;
    result = result * 31 + Kotlin.hashCode(this.datapoints) | 0;
    return result;
  };
  ConversionBenchmarkResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.commit, other.commit) && Kotlin.equals(this.device, other.device) && Kotlin.equals(this.datapoints, other.datapoints)))));
  };
  function MatrixDatapoint() {
  }
  MatrixDatapoint.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MatrixDatapoint',
    interfaces: [Datapoint]
  };
  function MatrixBenchmarkResult() {
  }
  MatrixBenchmarkResult.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MatrixBenchmarkResult',
    interfaces: [BenchmarkResult]
  };
  function PreconditionerDatapoint(name, rows, columns, nonzeros, preconditioners) {
    this.name_9vi2xo$_0 = name;
    this.rows_9t1qzu$_0 = rows;
    this.columns_ipwv5k$_0 = columns;
    this.nonzeros_p5hkpb$_0 = nonzeros;
    this.preconditioners = preconditioners;
  }
  Object.defineProperty(PreconditionerDatapoint.prototype, 'name', {
    get: function () {
      return this.name_9vi2xo$_0;
    }
  });
  Object.defineProperty(PreconditionerDatapoint.prototype, 'rows', {
    get: function () {
      return this.rows_9t1qzu$_0;
    }
  });
  Object.defineProperty(PreconditionerDatapoint.prototype, 'columns', {
    get: function () {
      return this.columns_ipwv5k$_0;
    }
  });
  Object.defineProperty(PreconditionerDatapoint.prototype, 'nonzeros', {
    get: function () {
      return this.nonzeros_p5hkpb$_0;
    }
  });
  PreconditionerDatapoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PreconditionerDatapoint',
    interfaces: [MatrixDatapoint]
  };
  PreconditionerDatapoint.prototype.component1 = function () {
    return this.name;
  };
  PreconditionerDatapoint.prototype.component2 = function () {
    return this.rows;
  };
  PreconditionerDatapoint.prototype.component3 = function () {
    return this.columns;
  };
  PreconditionerDatapoint.prototype.component4 = function () {
    return this.nonzeros;
  };
  PreconditionerDatapoint.prototype.component5 = function () {
    return this.preconditioners;
  };
  PreconditionerDatapoint.prototype.copy_syletb$ = function (name, rows, columns, nonzeros, preconditioners) {
    return new PreconditionerDatapoint(name === void 0 ? this.name : name, rows === void 0 ? this.rows : rows, columns === void 0 ? this.columns : columns, nonzeros === void 0 ? this.nonzeros : nonzeros, preconditioners === void 0 ? this.preconditioners : preconditioners);
  };
  PreconditionerDatapoint.prototype.toString = function () {
    return 'PreconditionerDatapoint(name=' + Kotlin.toString(this.name) + (', rows=' + Kotlin.toString(this.rows)) + (', columns=' + Kotlin.toString(this.columns)) + (', nonzeros=' + Kotlin.toString(this.nonzeros)) + (', preconditioners=' + Kotlin.toString(this.preconditioners)) + ')';
  };
  PreconditionerDatapoint.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.rows) | 0;
    result = result * 31 + Kotlin.hashCode(this.columns) | 0;
    result = result * 31 + Kotlin.hashCode(this.nonzeros) | 0;
    result = result * 31 + Kotlin.hashCode(this.preconditioners) | 0;
    return result;
  };
  PreconditionerDatapoint.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.rows, other.rows) && Kotlin.equals(this.columns, other.columns) && Kotlin.equals(this.nonzeros, other.nonzeros) && Kotlin.equals(this.preconditioners, other.preconditioners)))));
  };
  function Preconditioner(name, generateComponents, generateTime, applyComponents, applyTime, completed) {
    this.name = name;
    this.generateComponents = generateComponents;
    this.generateTime = generateTime;
    this.applyComponents = applyComponents;
    this.applyTime = applyTime;
    this.completed = completed;
  }
  Preconditioner.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Preconditioner',
    interfaces: []
  };
  Preconditioner.prototype.component1 = function () {
    return this.name;
  };
  Preconditioner.prototype.component2 = function () {
    return this.generateComponents;
  };
  Preconditioner.prototype.component3 = function () {
    return this.generateTime;
  };
  Preconditioner.prototype.component4 = function () {
    return this.applyComponents;
  };
  Preconditioner.prototype.component5 = function () {
    return this.applyTime;
  };
  Preconditioner.prototype.component6 = function () {
    return this.completed;
  };
  Preconditioner.prototype.copy_r8hnc7$ = function (name, generateComponents, generateTime, applyComponents, applyTime, completed) {
    return new Preconditioner(name === void 0 ? this.name : name, generateComponents === void 0 ? this.generateComponents : generateComponents, generateTime === void 0 ? this.generateTime : generateTime, applyComponents === void 0 ? this.applyComponents : applyComponents, applyTime === void 0 ? this.applyTime : applyTime, completed === void 0 ? this.completed : completed);
  };
  Preconditioner.prototype.toString = function () {
    return 'Preconditioner(name=' + Kotlin.toString(this.name) + (', generateComponents=' + Kotlin.toString(this.generateComponents)) + (', generateTime=' + Kotlin.toString(this.generateTime)) + (', applyComponents=' + Kotlin.toString(this.applyComponents)) + (', applyTime=' + Kotlin.toString(this.applyTime)) + (', completed=' + Kotlin.toString(this.completed)) + ')';
  };
  Preconditioner.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.generateComponents) | 0;
    result = result * 31 + Kotlin.hashCode(this.generateTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.applyComponents) | 0;
    result = result * 31 + Kotlin.hashCode(this.applyTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.completed) | 0;
    return result;
  };
  Preconditioner.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.generateComponents, other.generateComponents) && Kotlin.equals(this.generateTime, other.generateTime) && Kotlin.equals(this.applyComponents, other.applyComponents) && Kotlin.equals(this.applyTime, other.applyTime) && Kotlin.equals(this.completed, other.completed)))));
  };
  function PreconditionerBenchmarkResult(commit, device, datapoints) {
    this.commit_nu4gms$_0 = commit;
    this.device_draxrn$_0 = device;
    this.datapoints_iy5xvu$_0 = datapoints;
    this.benchmark_g5zck4$_0 = BenchmarkType$Preconditioner_getInstance();
    this.summaryValues_5839ah$_0 = lazy(PreconditionerBenchmarkResult$summaryValues$lambda(this));
  }
  Object.defineProperty(PreconditionerBenchmarkResult.prototype, 'commit', {
    get: function () {
      return this.commit_nu4gms$_0;
    }
  });
  Object.defineProperty(PreconditionerBenchmarkResult.prototype, 'device', {
    get: function () {
      return this.device_draxrn$_0;
    }
  });
  Object.defineProperty(PreconditionerBenchmarkResult.prototype, 'datapoints', {
    get: function () {
      return this.datapoints_iy5xvu$_0;
    }
  });
  Object.defineProperty(PreconditionerBenchmarkResult.prototype, 'benchmark', {
    configurable: true,
    get: function () {
      return this.benchmark_g5zck4$_0;
    }
  });
  Object.defineProperty(PreconditionerBenchmarkResult.prototype, 'summaryValues', {
    configurable: true,
    get: function () {
      return this.summaryValues_5839ah$_0.value;
    }
  });
  PreconditionerBenchmarkResult.prototype.getGenerateTimes_0 = function () {
    var tmp$, tmp$_0;
    var times = LinkedHashMap_init();
    tmp$ = this.datapoints.iterator();
    while (tmp$.hasNext()) {
      var datapoint = tmp$.next();
      tmp$_0 = datapoint.preconditioners.iterator();
      while (tmp$_0.hasNext()) {
        var preconditioner = tmp$_0.next();
        if (!preconditioner.completed)
          continue;
        var key = preconditioner.name;
        var tmp$_1;
        var value = times.get_11rb$(key);
        if (value == null) {
          var answer = ArrayList_init();
          times.put_xwzc9p$(key, answer);
          tmp$_1 = answer;
        } else {
          tmp$_1 = value;
        }
        tmp$_1.add_11rb$(preconditioner.generateTime);
      }
    }
    return times;
  };
  function PreconditionerBenchmarkResult$summaryValues$lambda(this$PreconditionerBenchmarkResult) {
    return function () {
      var $receiver = this$PreconditionerBenchmarkResult.getGenerateTimes_0();
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
  PreconditionerBenchmarkResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PreconditionerBenchmarkResult',
    interfaces: [MatrixBenchmarkResult]
  };
  PreconditionerBenchmarkResult.prototype.component1 = function () {
    return this.commit;
  };
  PreconditionerBenchmarkResult.prototype.component2 = function () {
    return this.device;
  };
  PreconditionerBenchmarkResult.prototype.component3 = function () {
    return this.datapoints;
  };
  PreconditionerBenchmarkResult.prototype.copy_f9gqz7$ = function (commit, device, datapoints) {
    return new PreconditionerBenchmarkResult(commit === void 0 ? this.commit : commit, device === void 0 ? this.device : device, datapoints === void 0 ? this.datapoints : datapoints);
  };
  PreconditionerBenchmarkResult.prototype.toString = function () {
    return 'PreconditionerBenchmarkResult(commit=' + Kotlin.toString(this.commit) + (', device=' + Kotlin.toString(this.device)) + (', datapoints=' + Kotlin.toString(this.datapoints)) + ')';
  };
  PreconditionerBenchmarkResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.commit) | 0;
    result = result * 31 + Kotlin.hashCode(this.device) | 0;
    result = result * 31 + Kotlin.hashCode(this.datapoints) | 0;
    return result;
  };
  PreconditionerBenchmarkResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.commit, other.commit) && Kotlin.equals(this.device, other.device) && Kotlin.equals(this.datapoints, other.datapoints)))));
  };
  function Solver(name, recurrentResiduals, trueResiduals, implicitResiduals, iterationTimestamps, rhsNorm, residualNorm, completed, generateComponents, generateTotalTime, applyComponents, applyTotalTime, applyIterations) {
    if (recurrentResiduals === void 0)
      recurrentResiduals = emptyList();
    if (trueResiduals === void 0)
      trueResiduals = emptyList();
    if (implicitResiduals === void 0)
      implicitResiduals = emptyList();
    if (iterationTimestamps === void 0)
      iterationTimestamps = emptyList();
    if (rhsNorm === void 0)
      rhsNorm = 0.0;
    if (residualNorm === void 0)
      residualNorm = 0.0;
    this.name = name;
    this.recurrentResiduals = recurrentResiduals;
    this.trueResiduals = trueResiduals;
    this.implicitResiduals = implicitResiduals;
    this.iterationTimestamps = iterationTimestamps;
    this.rhsNorm = rhsNorm;
    this.residualNorm = residualNorm;
    this.completed = completed;
    this.generateComponents = generateComponents;
    this.generateTotalTime = generateTotalTime;
    this.applyComponents = applyComponents;
    this.applyTotalTime = applyTotalTime;
    this.applyIterations = applyIterations;
  }
  Solver.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Solver',
    interfaces: []
  };
  Solver.prototype.component1 = function () {
    return this.name;
  };
  Solver.prototype.component2 = function () {
    return this.recurrentResiduals;
  };
  Solver.prototype.component3 = function () {
    return this.trueResiduals;
  };
  Solver.prototype.component4 = function () {
    return this.implicitResiduals;
  };
  Solver.prototype.component5 = function () {
    return this.iterationTimestamps;
  };
  Solver.prototype.component6 = function () {
    return this.rhsNorm;
  };
  Solver.prototype.component7 = function () {
    return this.residualNorm;
  };
  Solver.prototype.component8 = function () {
    return this.completed;
  };
  Solver.prototype.component9 = function () {
    return this.generateComponents;
  };
  Solver.prototype.component10 = function () {
    return this.generateTotalTime;
  };
  Solver.prototype.component11 = function () {
    return this.applyComponents;
  };
  Solver.prototype.component12 = function () {
    return this.applyTotalTime;
  };
  Solver.prototype.component13 = function () {
    return this.applyIterations;
  };
  Solver.prototype.copy_wa7e6i$ = function (name, recurrentResiduals, trueResiduals, implicitResiduals, iterationTimestamps, rhsNorm, residualNorm, completed, generateComponents, generateTotalTime, applyComponents, applyTotalTime, applyIterations) {
    return new Solver(name === void 0 ? this.name : name, recurrentResiduals === void 0 ? this.recurrentResiduals : recurrentResiduals, trueResiduals === void 0 ? this.trueResiduals : trueResiduals, implicitResiduals === void 0 ? this.implicitResiduals : implicitResiduals, iterationTimestamps === void 0 ? this.iterationTimestamps : iterationTimestamps, rhsNorm === void 0 ? this.rhsNorm : rhsNorm, residualNorm === void 0 ? this.residualNorm : residualNorm, completed === void 0 ? this.completed : completed, generateComponents === void 0 ? this.generateComponents : generateComponents, generateTotalTime === void 0 ? this.generateTotalTime : generateTotalTime, applyComponents === void 0 ? this.applyComponents : applyComponents, applyTotalTime === void 0 ? this.applyTotalTime : applyTotalTime, applyIterations === void 0 ? this.applyIterations : applyIterations);
  };
  Solver.prototype.toString = function () {
    return 'Solver(name=' + Kotlin.toString(this.name) + (', recurrentResiduals=' + Kotlin.toString(this.recurrentResiduals)) + (', trueResiduals=' + Kotlin.toString(this.trueResiduals)) + (', implicitResiduals=' + Kotlin.toString(this.implicitResiduals)) + (', iterationTimestamps=' + Kotlin.toString(this.iterationTimestamps)) + (', rhsNorm=' + Kotlin.toString(this.rhsNorm)) + (', residualNorm=' + Kotlin.toString(this.residualNorm)) + (', completed=' + Kotlin.toString(this.completed)) + (', generateComponents=' + Kotlin.toString(this.generateComponents)) + (', generateTotalTime=' + Kotlin.toString(this.generateTotalTime)) + (', applyComponents=' + Kotlin.toString(this.applyComponents)) + (', applyTotalTime=' + Kotlin.toString(this.applyTotalTime)) + (', applyIterations=' + Kotlin.toString(this.applyIterations)) + ')';
  };
  Solver.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.recurrentResiduals) | 0;
    result = result * 31 + Kotlin.hashCode(this.trueResiduals) | 0;
    result = result * 31 + Kotlin.hashCode(this.implicitResiduals) | 0;
    result = result * 31 + Kotlin.hashCode(this.iterationTimestamps) | 0;
    result = result * 31 + Kotlin.hashCode(this.rhsNorm) | 0;
    result = result * 31 + Kotlin.hashCode(this.residualNorm) | 0;
    result = result * 31 + Kotlin.hashCode(this.completed) | 0;
    result = result * 31 + Kotlin.hashCode(this.generateComponents) | 0;
    result = result * 31 + Kotlin.hashCode(this.generateTotalTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.applyComponents) | 0;
    result = result * 31 + Kotlin.hashCode(this.applyTotalTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.applyIterations) | 0;
    return result;
  };
  Solver.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.recurrentResiduals, other.recurrentResiduals) && Kotlin.equals(this.trueResiduals, other.trueResiduals) && Kotlin.equals(this.implicitResiduals, other.implicitResiduals) && Kotlin.equals(this.iterationTimestamps, other.iterationTimestamps) && Kotlin.equals(this.rhsNorm, other.rhsNorm) && Kotlin.equals(this.residualNorm, other.residualNorm) && Kotlin.equals(this.completed, other.completed) && Kotlin.equals(this.generateComponents, other.generateComponents) && Kotlin.equals(this.generateTotalTime, other.generateTotalTime) && Kotlin.equals(this.applyComponents, other.applyComponents) && Kotlin.equals(this.applyTotalTime, other.applyTotalTime) && Kotlin.equals(this.applyIterations, other.applyIterations)))));
  };
  function SolverDatapoint(name, rows, columns, nonzeros, optimal, solvers) {
    this.name_rwjnme$_0 = name;
    this.rows_ryzzk8$_0 = rows;
    this.columns_ppmje2$_0 = columns;
    this.nonzeros_st9a3h$_0 = nonzeros;
    this.optimal = optimal;
    this.solvers = solvers;
  }
  Object.defineProperty(SolverDatapoint.prototype, 'name', {
    get: function () {
      return this.name_rwjnme$_0;
    }
  });
  Object.defineProperty(SolverDatapoint.prototype, 'rows', {
    get: function () {
      return this.rows_ryzzk8$_0;
    }
  });
  Object.defineProperty(SolverDatapoint.prototype, 'columns', {
    get: function () {
      return this.columns_ppmje2$_0;
    }
  });
  Object.defineProperty(SolverDatapoint.prototype, 'nonzeros', {
    get: function () {
      return this.nonzeros_st9a3h$_0;
    }
  });
  SolverDatapoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SolverDatapoint',
    interfaces: [MatrixDatapoint]
  };
  SolverDatapoint.prototype.component1 = function () {
    return this.name;
  };
  SolverDatapoint.prototype.component2 = function () {
    return this.rows;
  };
  SolverDatapoint.prototype.component3 = function () {
    return this.columns;
  };
  SolverDatapoint.prototype.component4 = function () {
    return this.nonzeros;
  };
  SolverDatapoint.prototype.component5 = function () {
    return this.optimal;
  };
  SolverDatapoint.prototype.component6 = function () {
    return this.solvers;
  };
  SolverDatapoint.prototype.copy_xkvu01$ = function (name, rows, columns, nonzeros, optimal, solvers) {
    return new SolverDatapoint(name === void 0 ? this.name : name, rows === void 0 ? this.rows : rows, columns === void 0 ? this.columns : columns, nonzeros === void 0 ? this.nonzeros : nonzeros, optimal === void 0 ? this.optimal : optimal, solvers === void 0 ? this.solvers : solvers);
  };
  SolverDatapoint.prototype.toString = function () {
    return 'SolverDatapoint(name=' + Kotlin.toString(this.name) + (', rows=' + Kotlin.toString(this.rows)) + (', columns=' + Kotlin.toString(this.columns)) + (', nonzeros=' + Kotlin.toString(this.nonzeros)) + (', optimal=' + Kotlin.toString(this.optimal)) + (', solvers=' + Kotlin.toString(this.solvers)) + ')';
  };
  SolverDatapoint.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.rows) | 0;
    result = result * 31 + Kotlin.hashCode(this.columns) | 0;
    result = result * 31 + Kotlin.hashCode(this.nonzeros) | 0;
    result = result * 31 + Kotlin.hashCode(this.optimal) | 0;
    result = result * 31 + Kotlin.hashCode(this.solvers) | 0;
    return result;
  };
  SolverDatapoint.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.rows, other.rows) && Kotlin.equals(this.columns, other.columns) && Kotlin.equals(this.nonzeros, other.nonzeros) && Kotlin.equals(this.optimal, other.optimal) && Kotlin.equals(this.solvers, other.solvers)))));
  };
  function SolverBenchmarkResult(commit, device, datapoints) {
    this.commit_416oou$_0 = commit;
    this.device_e407jz$_0 = device;
    this.datapoints_fy4bvc$_0 = datapoints;
    this.benchmark_2ijioy$_0 = BenchmarkType$Solver_getInstance();
    this.summaryValues_cn5pux$_0 = lazy(SolverBenchmarkResult$summaryValues$lambda(this));
  }
  Object.defineProperty(SolverBenchmarkResult.prototype, 'commit', {
    get: function () {
      return this.commit_416oou$_0;
    }
  });
  Object.defineProperty(SolverBenchmarkResult.prototype, 'device', {
    get: function () {
      return this.device_e407jz$_0;
    }
  });
  Object.defineProperty(SolverBenchmarkResult.prototype, 'datapoints', {
    get: function () {
      return this.datapoints_fy4bvc$_0;
    }
  });
  Object.defineProperty(SolverBenchmarkResult.prototype, 'benchmark', {
    configurable: true,
    get: function () {
      return this.benchmark_2ijioy$_0;
    }
  });
  Object.defineProperty(SolverBenchmarkResult.prototype, 'summaryValues', {
    configurable: true,
    get: function () {
      return this.summaryValues_cn5pux$_0.value;
    }
  });
  SolverBenchmarkResult.prototype.calcBandwidths_0 = function () {
    var tmp$, tmp$_0;
    var bandwidths = LinkedHashMap_init();
    tmp$ = this.datapoints.iterator();
    while (tmp$.hasNext()) {
      var datapoint = tmp$.next();
      tmp$_0 = datapoint.solvers.iterator();
      while (tmp$_0.hasNext()) {
        var solver = tmp$_0.next();
        if (!solver.completed)
          continue;
        var key = solver.name;
        var tmp$_1;
        var value = bandwidths.get_11rb$(key);
        if (value == null) {
          var answer = ArrayList_init();
          bandwidths.put_xwzc9p$(key, answer);
          tmp$_1 = answer;
        } else {
          tmp$_1 = value;
        }
        tmp$_1.add_11rb$(solver.applyIterations.toNumber());
      }
    }
    return bandwidths;
  };
  function SolverBenchmarkResult$summaryValues$lambda(this$SolverBenchmarkResult) {
    return function () {
      var $receiver = this$SolverBenchmarkResult.calcBandwidths_0();
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
  SolverBenchmarkResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SolverBenchmarkResult',
    interfaces: [MatrixBenchmarkResult]
  };
  SolverBenchmarkResult.prototype.component1 = function () {
    return this.commit;
  };
  SolverBenchmarkResult.prototype.component2 = function () {
    return this.device;
  };
  SolverBenchmarkResult.prototype.component3 = function () {
    return this.datapoints;
  };
  SolverBenchmarkResult.prototype.copy_5d90mz$ = function (commit, device, datapoints) {
    return new SolverBenchmarkResult(commit === void 0 ? this.commit : commit, device === void 0 ? this.device : device, datapoints === void 0 ? this.datapoints : datapoints);
  };
  SolverBenchmarkResult.prototype.toString = function () {
    return 'SolverBenchmarkResult(commit=' + Kotlin.toString(this.commit) + (', device=' + Kotlin.toString(this.device)) + (', datapoints=' + Kotlin.toString(this.datapoints)) + ')';
  };
  SolverBenchmarkResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.commit) | 0;
    result = result * 31 + Kotlin.hashCode(this.device) | 0;
    result = result * 31 + Kotlin.hashCode(this.datapoints) | 0;
    return result;
  };
  SolverBenchmarkResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.commit, other.commit) && Kotlin.equals(this.device, other.device) && Kotlin.equals(this.datapoints, other.datapoints)))));
  };
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
  Format.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Format',
    interfaces: []
  };
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
  Object.defineProperty(SpmvDatapoint.prototype, 'name', {
    get: function () {
      return this.name_pbzutf$_0;
    }
  });
  Object.defineProperty(SpmvDatapoint.prototype, 'rows', {
    get: function () {
      return this.rows_peg6r9$_0;
    }
  });
  Object.defineProperty(SpmvDatapoint.prototype, 'columns', {
    get: function () {
      return this.columns_sxqwnd$_0;
    }
  });
  Object.defineProperty(SpmvDatapoint.prototype, 'nonzeros', {
    get: function () {
      return this.nonzeros_vlq9ow$_0;
    }
  });
  SpmvDatapoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpmvDatapoint',
    interfaces: [MatrixDatapoint]
  };
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
  Object.defineProperty(SpmvBenchmarkResult.prototype, 'commit', {
    get: function () {
      return this.commit_rz3f2t$_0;
    }
  });
  Object.defineProperty(SpmvBenchmarkResult.prototype, 'device', {
    get: function () {
      return this.device_hw9w7o$_0;
    }
  });
  Object.defineProperty(SpmvBenchmarkResult.prototype, 'datapoints', {
    get: function () {
      return this.datapoints_ljvep7$_0;
    }
  });
  Object.defineProperty(SpmvBenchmarkResult.prototype, 'benchmark', {
    configurable: true,
    get: function () {
      return this.benchmark_mvbtpn$_0;
    }
  });
  Object.defineProperty(SpmvBenchmarkResult.prototype, 'summaryValues', {
    configurable: true,
    get: function () {
      return this.summaryValues_phct6y$_0.value;
    }
  });
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
  SpmvBenchmarkResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpmvBenchmarkResult',
    interfaces: [MatrixBenchmarkResult]
  };
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
  function AnnotatingRepositoryHandler(repHandler, databaseHandler) {
    this.repHandler_0 = repHandler;
    this.databaseHandler_0 = databaseHandler;
  }
  AnnotatingRepositoryHandler.prototype.fetchGitHistoryByBranch_4ula2a$ = function (branch, page, benchmarkType) {
    var $receiver = this.repHandler_0.fetchGitHistoryByBranch_4ula2a$(branch, page, benchmarkType);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0 = item.copy_gstagc$();
      var tmp$_1;
      tmp$_1 = this.databaseHandler_0.getAvailableDevicesForCommit_rp894y$($receiver_0, benchmarkType).iterator();
      while (tmp$_1.hasNext()) {
        var device = tmp$_1.next();
        $receiver_0.addDevice_2l8sov$(device);
      }
      tmp$_0.call(destination, $receiver_0);
    }
    return destination;
  };
  AnnotatingRepositoryHandler.prototype.fetchGitHistoryBySha_4ula2a$ = function (rev, page, benchmarkType) {
    var $receiver = this.repHandler_0.fetchGitHistoryBySha_4ula2a$(rev, page, benchmarkType);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0 = item.copy_gstagc$();
      var tmp$_1;
      tmp$_1 = this.databaseHandler_0.getAvailableDevicesForCommit_rp894y$($receiver_0, benchmarkType).iterator();
      while (tmp$_1.hasNext()) {
        var device = tmp$_1.next();
        $receiver_0.addDevice_2l8sov$(device);
      }
      tmp$_0.call(destination, $receiver_0);
    }
    return destination;
  };
  AnnotatingRepositoryHandler.prototype.getAvailableBranches = function () {
    return this.repHandler_0.getAvailableBranches();
  };
  AnnotatingRepositoryHandler.prototype.getNumberOfPages_61zpoe$ = function (branch) {
    return this.repHandler_0.getNumberOfPages_61zpoe$(branch);
  };
  AnnotatingRepositoryHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnnotatingRepositoryHandler',
    interfaces: [RepositoryHandler]
  };
  function AvailableCacheEntry(commit, device, benchmark, available) {
    this.commit = commit;
    this.device = device;
    this.benchmark = benchmark;
    this.available = available;
  }
  AvailableCacheEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AvailableCacheEntry',
    interfaces: []
  };
  AvailableCacheEntry.prototype.component1 = function () {
    return this.commit;
  };
  AvailableCacheEntry.prototype.component2 = function () {
    return this.device;
  };
  AvailableCacheEntry.prototype.component3 = function () {
    return this.benchmark;
  };
  AvailableCacheEntry.prototype.component4 = function () {
    return this.available;
  };
  AvailableCacheEntry.prototype.copy_jmszie$ = function (commit, device, benchmark, available) {
    return new AvailableCacheEntry(commit === void 0 ? this.commit : commit, device === void 0 ? this.device : device, benchmark === void 0 ? this.benchmark : benchmark, available === void 0 ? this.available : available);
  };
  AvailableCacheEntry.prototype.toString = function () {
    return 'AvailableCacheEntry(commit=' + Kotlin.toString(this.commit) + (', device=' + Kotlin.toString(this.device)) + (', benchmark=' + Kotlin.toString(this.benchmark)) + (', available=' + Kotlin.toString(this.available)) + ')';
  };
  AvailableCacheEntry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.commit) | 0;
    result = result * 31 + Kotlin.hashCode(this.device) | 0;
    result = result * 31 + Kotlin.hashCode(this.benchmark) | 0;
    result = result * 31 + Kotlin.hashCode(this.available) | 0;
    return result;
  };
  AvailableCacheEntry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.commit, other.commit) && Kotlin.equals(this.device, other.device) && Kotlin.equals(this.benchmark, other.benchmark) && Kotlin.equals(this.available, other.available)))));
  };
  function DeviceCacheEntry(commit, benchmark, devices) {
    this.commit = commit;
    this.benchmark = benchmark;
    this.devices = devices;
  }
  DeviceCacheEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeviceCacheEntry',
    interfaces: []
  };
  DeviceCacheEntry.prototype.component1 = function () {
    return this.commit;
  };
  DeviceCacheEntry.prototype.component2 = function () {
    return this.benchmark;
  };
  DeviceCacheEntry.prototype.component3 = function () {
    return this.devices;
  };
  DeviceCacheEntry.prototype.copy_h5zu4q$ = function (commit, benchmark, devices) {
    return new DeviceCacheEntry(commit === void 0 ? this.commit : commit, benchmark === void 0 ? this.benchmark : benchmark, devices === void 0 ? this.devices : devices);
  };
  DeviceCacheEntry.prototype.toString = function () {
    return 'DeviceCacheEntry(commit=' + Kotlin.toString(this.commit) + (', benchmark=' + Kotlin.toString(this.benchmark)) + (', devices=' + Kotlin.toString(this.devices)) + ')';
  };
  DeviceCacheEntry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.commit) | 0;
    result = result * 31 + Kotlin.hashCode(this.benchmark) | 0;
    result = result * 31 + Kotlin.hashCode(this.devices) | 0;
    return result;
  };
  DeviceCacheEntry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.commit, other.commit) && Kotlin.equals(this.benchmark, other.benchmark) && Kotlin.equals(this.devices, other.devices)))));
  };
  function CachingDatabaseHandler(databaseHandler, maxCached) {
    if (maxCached === void 0)
      maxCached = 10;
    this.databaseHandler_0 = databaseHandler;
    this.maxCached_0 = maxCached;
    this.resultCache_0 = ArrayList_init();
    this.availableCache_0 = ArrayList_init();
    this.deviceCache_0 = ArrayList_init();
  }
  CachingDatabaseHandler.prototype.insertBenchmarkResults_j6m42o$ = function (results) {
    this.resultCache_0.clear();
    this.databaseHandler_0.insertBenchmarkResults_j6m42o$(results);
  };
  CachingDatabaseHandler.prototype.fetchBenchmarkResult_75dvv7$ = function (commit, device, benchmark) {
    var $receiver = this.resultCache_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0;
        if (equals(element.commit.sha, commit.sha) & ((tmp$_0 = element.device) != null ? tmp$_0.equals(device) : null) && element.benchmark === benchmark) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    var cached = firstOrNull$result;
    if (cached == null) {
      var result = this.databaseHandler_0.fetchBenchmarkResult_75dvv7$(commit, device, benchmark);
      this.addToResultCache_0(result);
      return result;
    }this.resultCache_0.remove_11rb$(cached);
    this.resultCache_0.add_11rb$(cached);
    return cached;
  };
  CachingDatabaseHandler.prototype.hasDataAvailable_75dvv7$ = function (commit, device, benchmark) {
    var $receiver = this.availableCache_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0;
        if (equals(element.commit.sha, commit.sha) & ((tmp$_0 = element.device) != null ? tmp$_0.equals(device) : null) & element.benchmark === benchmark) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    var cached = firstOrNull$result;
    if (cached == null) {
      var result = this.databaseHandler_0.hasDataAvailable_75dvv7$(commit, device, benchmark);
      var cacheEntry = new AvailableCacheEntry(commit, device, benchmark, result);
      this.addToAvailableCache_0(cacheEntry);
      return result;
    }this.availableCache_0.remove_11rb$(cached);
    this.availableCache_0.add_11rb$(cached);
    return cached.available;
  };
  CachingDatabaseHandler.prototype.getAvailableDevicesForCommit_rp894y$ = function (commit, benchmark) {
    var $receiver = this.deviceCache_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.commit.sha, commit.sha) & element.benchmark === benchmark) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    var cached = firstOrNull$result;
    if (cached == null) {
      var devices = this.databaseHandler_0.getAvailableDevicesForCommit_rp894y$(commit, benchmark);
      var cacheEntry = new DeviceCacheEntry(commit, benchmark, devices);
      this.addToDeviceCache_0(cacheEntry);
      return devices;
    }this.deviceCache_0.remove_11rb$(cached);
    this.deviceCache_0.add_11rb$(cached);
    return cached.devices;
  };
  CachingDatabaseHandler.prototype.addToResultCache_0 = function (result) {
    this.resultCache_0.add_11rb$(result);
    if (this.resultCache_0.size > this.maxCached_0) {
      this.resultCache_0.removeAt_za3lpa$(0);
    }};
  CachingDatabaseHandler.prototype.addToAvailableCache_0 = function (entry) {
    this.availableCache_0.add_11rb$(entry);
    if (this.availableCache_0.size > this.maxCached_0) {
      this.availableCache_0.removeAt_za3lpa$(0);
    }};
  CachingDatabaseHandler.prototype.addToDeviceCache_0 = function (entry) {
    this.deviceCache_0.add_11rb$(entry);
    if (this.deviceCache_0.size > this.maxCached_0) {
      this.deviceCache_0.removeAt_za3lpa$(0);
    }};
  CachingDatabaseHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CachingDatabaseHandler',
    interfaces: [DatabaseHandler]
  };
  function DatabaseHandler() {
  }
  DatabaseHandler.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DatabaseHandler',
    interfaces: []
  };
  function MissingBenchmarkResultException(commit, device, benchmark) {
    Exception_init('Error, the benchmark result for ' + benchmark + ' on ' + ('commit ' + commit.sha + ' using device ' + device.name + ' could not be found.'), this);
    this.name = 'MissingBenchmarkResultException';
  }
  MissingBenchmarkResultException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MissingBenchmarkResultException',
    interfaces: [Exception]
  };
  function Datapoint() {
  }
  Datapoint.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Datapoint',
    interfaces: []
  };
  function BenchmarkResult() {
  }
  Object.defineProperty(BenchmarkResult.prototype, 'identifier', {
    configurable: true,
    get: function () {
      return this.commit.sha.substring(0, 7) + '-' + this.device.name;
    }
  });
  BenchmarkResult.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BenchmarkResult',
    interfaces: []
  };
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
  BenchmarkType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BenchmarkType',
    interfaces: [Enum]
  };
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
  function CachedBranch(name, benchmark, fetchDate, pages, numberPages) {
    this.name = name;
    this.benchmark = benchmark;
    this.fetchDate = fetchDate;
    this.pages = pages;
    this.numberPages = numberPages;
  }
  CachedBranch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CachedBranch',
    interfaces: []
  };
  CachedBranch.prototype.component1 = function () {
    return this.name;
  };
  CachedBranch.prototype.component2 = function () {
    return this.benchmark;
  };
  CachedBranch.prototype.component3 = function () {
    return this.fetchDate;
  };
  CachedBranch.prototype.component4 = function () {
    return this.pages;
  };
  CachedBranch.prototype.component5 = function () {
    return this.numberPages;
  };
  CachedBranch.prototype.copy_h50dzp$ = function (name, benchmark, fetchDate, pages, numberPages) {
    return new CachedBranch(name === void 0 ? this.name : name, benchmark === void 0 ? this.benchmark : benchmark, fetchDate === void 0 ? this.fetchDate : fetchDate, pages === void 0 ? this.pages : pages, numberPages === void 0 ? this.numberPages : numberPages);
  };
  CachedBranch.prototype.toString = function () {
    return 'CachedBranch(name=' + Kotlin.toString(this.name) + (', benchmark=' + Kotlin.toString(this.benchmark)) + (', fetchDate=' + Kotlin.toString(this.fetchDate)) + (', pages=' + Kotlin.toString(this.pages)) + (', numberPages=' + Kotlin.toString(this.numberPages)) + ')';
  };
  CachedBranch.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.benchmark) | 0;
    result = result * 31 + Kotlin.hashCode(this.fetchDate) | 0;
    result = result * 31 + Kotlin.hashCode(this.pages) | 0;
    result = result * 31 + Kotlin.hashCode(this.numberPages) | 0;
    return result;
  };
  CachedBranch.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.benchmark, other.benchmark) && Kotlin.equals(this.fetchDate, other.fetchDate) && Kotlin.equals(this.pages, other.pages) && Kotlin.equals(this.numberPages, other.numberPages)))));
  };
  function CachedSha(name, benchmark, fetchDate, pages) {
    this.name = name;
    this.benchmark = benchmark;
    this.fetchDate = fetchDate;
    this.pages = pages;
  }
  CachedSha.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CachedSha',
    interfaces: []
  };
  CachedSha.prototype.component1 = function () {
    return this.name;
  };
  CachedSha.prototype.component2 = function () {
    return this.benchmark;
  };
  CachedSha.prototype.component3 = function () {
    return this.fetchDate;
  };
  CachedSha.prototype.component4 = function () {
    return this.pages;
  };
  CachedSha.prototype.copy_cgof43$ = function (name, benchmark, fetchDate, pages) {
    return new CachedSha(name === void 0 ? this.name : name, benchmark === void 0 ? this.benchmark : benchmark, fetchDate === void 0 ? this.fetchDate : fetchDate, pages === void 0 ? this.pages : pages);
  };
  CachedSha.prototype.toString = function () {
    return 'CachedSha(name=' + Kotlin.toString(this.name) + (', benchmark=' + Kotlin.toString(this.benchmark)) + (', fetchDate=' + Kotlin.toString(this.fetchDate)) + (', pages=' + Kotlin.toString(this.pages)) + ')';
  };
  CachedSha.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.benchmark) | 0;
    result = result * 31 + Kotlin.hashCode(this.fetchDate) | 0;
    result = result * 31 + Kotlin.hashCode(this.pages) | 0;
    return result;
  };
  CachedSha.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.benchmark, other.benchmark) && Kotlin.equals(this.fetchDate, other.fetchDate) && Kotlin.equals(this.pages, other.pages)))));
  };
  function CachingRepositoryHandler(handler, maxCached, branchLifetime, branchListLifetime, shaLifetime) {
    if (maxCached === void 0)
      maxCached = 20;
    if (branchLifetime === void 0)
      branchLifetime = 5;
    if (branchListLifetime === void 0)
      branchListLifetime = 5;
    if (shaLifetime === void 0)
      shaLifetime = 2;
    this.handler_0 = handler;
    this.maxCached_0 = maxCached;
    this.branchLifetime_0 = branchLifetime;
    this.branchListLifetime_0 = branchListLifetime;
    this.shaLifetime_0 = shaLifetime;
    this.branchCache_0 = ArrayList_init();
    this.shaCache_0 = ArrayList_init();
    this.availableBranches_0 = this.handler_0.getAvailableBranches();
    this.availableBranchesFetchDate_0 = new Date();
  }
  CachingRepositoryHandler.prototype.fetchGitHistoryByBranch_4ula2a$ = function (branch, page, benchmarkType) {
    var $receiver = this.getOrPutCache_0(branch, benchmarkType, page).pages;
    var tmp$;
    var value = $receiver.get_11rb$(page);
    if (value == null) {
      var answer = this.handler_0.fetchGitHistoryByBranch_4ula2a$(branch, page, benchmarkType);
      $receiver.put_xwzc9p$(page, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    return tmp$;
  };
  CachingRepositoryHandler.prototype.fetchGitHistoryBySha_4ula2a$ = function (rev, page, benchmarkType) {
    var $receiver = this.shaCache_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.name, rev) & element.benchmark === benchmarkType) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    var wantedSha = firstOrNull$result;
    if (wantedSha == null) {
      var newBranch = this.handler_0.fetchGitHistoryByBranch_4ula2a$(rev, page, benchmarkType);
      this.addToShaCache_0(new CachedSha(rev, benchmarkType, new Date(), mutableMapOf([to(page, newBranch)])));
      return newBranch;
    }if (((new Date()).getTime() - wantedSha.fetchDate.getTime()) / 60000 > this.shaLifetime_0) {
      var newBranch_0 = this.handler_0.fetchGitHistoryByBranch_4ula2a$(rev, page, benchmarkType);
      this.shaCache_0.remove_11rb$(wantedSha);
      this.addToShaCache_0(new CachedSha(rev, benchmarkType, new Date(), mutableMapOf([to(page, newBranch_0)])));
      return newBranch_0;
    }this.shaCache_0.remove_11rb$(wantedSha);
    this.shaCache_0.add_11rb$(wantedSha);
    var $receiver_0 = wantedSha.pages;
    var tmp$_0;
    var value = $receiver_0.get_11rb$(page);
    if (value == null) {
      var answer = this.handler_0.fetchGitHistoryByBranch_4ula2a$(rev, page, benchmarkType);
      $receiver_0.put_xwzc9p$(page, answer);
      tmp$_0 = answer;
    } else {
      tmp$_0 = value;
    }
    return tmp$_0;
  };
  CachingRepositoryHandler.prototype.getAvailableBranches = function () {
    if (((new Date()).getTime() - this.availableBranchesFetchDate_0.getTime()) / 60000 > this.branchListLifetime_0) {
      this.availableBranches_0 = this.handler_0.getAvailableBranches();
      this.availableBranchesFetchDate_0 = new Date();
    }return this.availableBranches_0;
  };
  CachingRepositoryHandler.prototype.getNumberOfPages_61zpoe$ = function (branch) {
    return this.getOrPutCache_0(branch).numberPages;
  };
  CachingRepositoryHandler.prototype.getOrPutCache_0 = function (branch, benchmarkType, page) {
    if (benchmarkType === void 0)
      benchmarkType = first(BenchmarkType$values());
    if (page === void 0)
      page = 1;
    var $receiver = this.branchCache_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.name, branch) & element.benchmark === benchmarkType) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    var wantedBranch = firstOrNull$result;
    if (wantedBranch == null) {
      var newBranch = new CachedBranch(branch, benchmarkType, new Date(), mutableMapOf([to(page, this.handler_0.fetchGitHistoryByBranch_4ula2a$(branch, page, benchmarkType))]), this.handler_0.getNumberOfPages_61zpoe$(branch));
      this.addToBranchCache_0(newBranch);
      return newBranch;
    }if (((new Date()).getTime() - wantedBranch.fetchDate.getTime()) / 60000 > this.branchLifetime_0) {
      this.branchCache_0.remove_11rb$(wantedBranch);
      var newBranch_0 = new CachedBranch(branch, benchmarkType, new Date(), mutableMapOf([to(page, this.handler_0.fetchGitHistoryByBranch_4ula2a$(branch, page, benchmarkType))]), this.handler_0.getNumberOfPages_61zpoe$(branch));
      this.addToBranchCache_0(newBranch_0);
      return newBranch_0;
    }this.branchCache_0.remove_11rb$(wantedBranch);
    this.branchCache_0.add_11rb$(wantedBranch);
    return wantedBranch;
  };
  CachingRepositoryHandler.prototype.addToBranchCache_0 = function (branch) {
    this.branchCache_0.add_11rb$(branch);
    if (this.branchCache_0.size > this.maxCached_0) {
      this.branchCache_0.removeAt_za3lpa$(0);
    }};
  CachingRepositoryHandler.prototype.addToShaCache_0 = function (sha) {
    this.shaCache_0.add_11rb$(sha);
    if (this.shaCache_0.size > this.maxCached_0) {
      this.shaCache_0.removeAt_za3lpa$(0);
    }};
  CachingRepositoryHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CachingRepositoryHandler',
    interfaces: [RepositoryHandler]
  };
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
  Object.defineProperty(Commit.prototype, 'availableDevices', {
    configurable: true,
    get: function () {
      return copyToArray(this.devices_0);
    }
  });
  Commit.prototype.addDevice_2l8sov$ = function (device) {
    if (!this.devices_0.contains_11rb$(device))
      this.devices_0.add_11rb$(device);
  };
  Commit.prototype.equals = function (other) {
    if (Kotlin.isType(other, Commit) && equals(other.sha, this.sha))
      return true;
    return this === other;
  };
  Commit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Commit',
    interfaces: []
  };
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
  Device.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Device',
    interfaces: []
  };
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
  function RepositoryException(message) {
    Exception_init(message, this);
    this.name = 'RepositoryException';
  }
  RepositoryException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RepositoryException',
    interfaces: [Exception]
  };
  function RepositoryHandler() {
  }
  RepositoryHandler.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RepositoryHandler',
    interfaces: []
  };
  function AvailablePlots() {
    AvailablePlots_instance = this;
    this.spmvPlots_0 = listOf([new SpmvSingleScatterPlot(), new SpmvSpeedupPlot(), new SpmvPerformanceProfile()]);
    this.blasPlots_0 = listOf([new SingleBlasPlot(), new BlasSpeedupTransform()]);
    this.preconditionerPlots_0 = listOf_0(new PreconditionerOverview());
    this.conversionPlots_0 = listOf([new ConversionSingleScatterPlot(), new ConversionSpeedupPlot()]);
    this.solverPlots_0 = listOf([new SolverConvergencePlot(), new SolverRuntimeBreakdown()]);
  }
  AvailablePlots.prototype.getPlotByName_7uiexs$ = function (plotName, benchmarkType) {
    var tmp$;
    switch (benchmarkType.name) {
      case 'Spmv':
        tmp$ = this.spmvPlots_0;
        break;
      case 'Solver':
        tmp$ = this.solverPlots_0;
        break;
      case 'Preconditioner':
        tmp$ = this.preconditionerPlots_0;
        break;
      case 'Conversion':
        tmp$ = this.conversionPlots_0;
        break;
      case 'Blas':
        tmp$ = this.blasPlots_0;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    var $receiver = tmp$;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (equals(element.name, plotName)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  AvailablePlots.prototype.getPlotList_z4n2o2$ = function (benchmark, results) {
    var tmp$;
    switch (benchmark.name) {
      case 'Spmv':
        tmp$ = this.spmvPlots_0;
        break;
      case 'Solver':
        tmp$ = this.solverPlots_0;
        break;
      case 'Preconditioner':
        tmp$ = this.preconditionerPlots_0;
        break;
      case 'Conversion':
        tmp$ = this.conversionPlots_0;
        break;
      case 'Blas':
        tmp$ = this.blasPlots_0;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    var $receiver = tmp$;
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (element.numInputsRange.contains_mef7kx$(results.size))
        destination.add_11rb$(element);
    }
    var availablePlots = destination;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(availablePlots, 10));
    var tmp$_1;
    tmp$_1 = availablePlots.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination_0.add_11rb$(item.getPlotDescription_j6m42o$(results));
    }
    return destination_0;
  };
  AvailablePlots.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AvailablePlots',
    interfaces: []
  };
  var AvailablePlots_instance = null;
  function AvailablePlots_getInstance() {
    if (AvailablePlots_instance === null) {
      new AvailablePlots();
    }return AvailablePlots_instance;
  }
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function AveragePerformanceCalculator(databaseHandler) {
    this.databaseHandler_0 = databaseHandler;
  }
  function AveragePerformanceCalculator$getAveragePerformanceData$lambda$lambda(it) {
    return it.x;
  }
  AveragePerformanceCalculator.prototype.getAveragePerformanceData_uzpdgi$ = function (commits, benchmark, device) {
    var tmp$, tmp$_0;
    var seriesByName = LinkedHashMap_init();
    tmp$ = reversed(commits).iterator();
    while (tmp$.hasNext()) {
      var commit = tmp$.next();
      if (this.databaseHandler_0.hasDataAvailable_75dvv7$(commit, device, benchmark)) {
        var benchmarkResult = this.databaseHandler_0.fetchBenchmarkResult_75dvv7$(commit, device, benchmark);
        tmp$_0 = benchmarkResult.summaryValues.entries.iterator();
        while (tmp$_0.hasNext()) {
          var tmp$_1 = tmp$_0.next();
          var name = tmp$_1.key;
          var summaryValue = tmp$_1.value;
          var tmp$_2;
          var value = seriesByName.get_11rb$(name);
          if (value == null) {
            var answer = ArrayList_init();
            seriesByName.put_xwzc9p$(name, answer);
            tmp$_2 = answer;
          } else {
            tmp$_2 = value;
          }
          var $receiver = tmp$_2;
          var element = new PlotPoint(commit.date.getTime(), summaryValue);
          $receiver.add_11rb$(element);
        }
      }}
    var destination = ArrayList_init_0(seriesByName.size);
    var tmp$_3;
    tmp$_3 = seriesByName.entries.iterator();
    while (tmp$_3.hasNext()) {
      var item = tmp$_3.next();
      var tmp$_4 = destination.add_11rb$;
      var key = item.key;
      var value_0 = item.value;
      tmp$_4.call(destination, new PointDataset(key, copyToArray(sortedWith(value_0, new Comparator(compareBy$lambda(AveragePerformanceCalculator$getAveragePerformanceData$lambda$lambda))))));
    }
    return new PlottableData(copyToArray(destination));
  };
  AveragePerformanceCalculator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AveragePerformanceCalculator',
    interfaces: []
  };
  function PlotDescription(plotName, plottableAs, options) {
    this.plotName = plotName;
    this.plottableAs = plottableAs;
    this.options = options;
  }
  PlotDescription.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlotDescription',
    interfaces: []
  };
  PlotDescription.prototype.component1 = function () {
    return this.plotName;
  };
  PlotDescription.prototype.component2 = function () {
    return this.plottableAs;
  };
  PlotDescription.prototype.component3 = function () {
    return this.options;
  };
  PlotDescription.prototype.copy_y6gmaz$ = function (plotName, plottableAs, options) {
    return new PlotDescription(plotName === void 0 ? this.plotName : plotName, plottableAs === void 0 ? this.plottableAs : plottableAs, options === void 0 ? this.options : options);
  };
  PlotDescription.prototype.toString = function () {
    return 'PlotDescription(plotName=' + Kotlin.toString(this.plotName) + (', plottableAs=' + Kotlin.toString(this.plottableAs)) + (', options=' + Kotlin.toString(this.options)) + ')';
  };
  PlotDescription.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.plotName) | 0;
    result = result * 31 + Kotlin.hashCode(this.plottableAs) | 0;
    result = result * 31 + Kotlin.hashCode(this.options) | 0;
    return result;
  };
  PlotDescription.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.plotName, other.plotName) && Kotlin.equals(this.plottableAs, other.plottableAs) && Kotlin.equals(this.options, other.options)))));
  };
  function PlotOption(name, options, default_0, number, description) {
    if (options === void 0) {
      options = [];
    }if (default_0 === void 0)
      default_0 = first(options);
    if (number === void 0) {
      number = options.length === 0;
    }if (description === void 0)
      description = '';
    this.name = name;
    this.options = options;
    this.default = default_0;
    this.number = number;
    this.description = description;
    if (!this.number & !contains(this.options, this.default))
      throw IllegalArgumentException_init('Default value has to be available option');
  }
  PlotOption.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlotOption',
    interfaces: []
  };
  function DynamicOption(name, description) {
    if (description === void 0)
      description = '';
    PlotOption.call(this, name, [], '', void 0, description);
  }
  DynamicOption.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicOption',
    interfaces: [PlotOption]
  };
  function DynamicCategoricalOption(name, description) {
    if (description === void 0)
      description = '';
    DynamicOption.call(this, name, description);
  }
  DynamicCategoricalOption.prototype.realizeOption_gopuhv$ = function (results) {
    return new CategoricalOption(this.name, this.getOptions_gopuhv$(results), this.getDefault_gopuhv$(results), this.description);
  };
  DynamicCategoricalOption.prototype.getDefault_gopuhv$ = function (results) {
    return first(this.getOptions_gopuhv$(results));
  };
  DynamicCategoricalOption.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicCategoricalOption',
    interfaces: [DynamicOption]
  };
  function DynamicNumericalOption(name, description) {
    if (description === void 0)
      description = '';
    DynamicOption.call(this, name, description);
  }
  DynamicNumericalOption.prototype.realizeOption_gopuhv$ = function (results) {
    return new NumericalOption(this.name, this.getDefault_gopuhv$(results), this.description);
  };
  DynamicNumericalOption.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicNumericalOption',
    interfaces: [DynamicOption]
  };
  function CategoricalOption(name, options, default_0, description) {
    if (default_0 === void 0)
      default_0 = first(options);
    if (description === void 0)
      description = '';
    PlotOption.call(this, name, options, default_0, void 0, description);
  }
  CategoricalOption.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CategoricalOption',
    interfaces: [PlotOption]
  };
  function NumericalOption(name, default_0, description) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (description === void 0)
      description = '';
    PlotOption.call(this, name, void 0, default_0.toString(), void 0, description);
  }
  NumericalOption.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NumericalOption',
    interfaces: [PlotOption]
  };
  function PlotType(name) {
    PlotType$Companion_getInstance();
    this.name = name;
  }
  function PlotType$Companion() {
    PlotType$Companion_instance = this;
    this.Line = new PlotType('line');
    this.Scatter = new PlotType('scatter');
    this.Bar = new PlotType('bar');
  }
  PlotType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PlotType$Companion_instance = null;
  function PlotType$Companion_getInstance() {
    if (PlotType$Companion_instance === null) {
      new PlotType$Companion();
    }return PlotType$Companion_instance;
  }
  PlotType.prototype.toString = function () {
    return this.name;
  };
  PlotType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlotType',
    interfaces: []
  };
  function InvalidPlotTransformException(s) {
    Exception_init(s, this);
    this.name = 'InvalidPlotTransformException';
  }
  InvalidPlotTransformException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvalidPlotTransformException',
    interfaces: [Exception]
  };
  function InvalidPlotConfigValueException(value, option) {
    Exception_init('Error, ' + toString(value) + ' is not a valid value for ' + option, this);
    this.name = 'InvalidPlotConfigValueException';
  }
  InvalidPlotConfigValueException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvalidPlotConfigValueException',
    interfaces: [Exception]
  };
  function InvalidPlotConfigNameException(name) {
    Exception_init('Error, ' + name + ' is not a valid option', this);
    this.name = 'InvalidPlotConfigNameException';
  }
  InvalidPlotConfigNameException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvalidPlotConfigNameException',
    interfaces: [Exception]
  };
  function PlotConfiguration(description, values) {
    var tmp$, tmp$_0;
    tmp$ = values.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var key = tmp$_1.key;
      var value = tmp$_1.value;
      var $receiver = description.options;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_2;
        for (tmp$_2 = 0; tmp$_2 !== $receiver.length; ++tmp$_2) {
          var element = $receiver[tmp$_2];
          if (equals(element.name, key)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }}
        firstOrNull$result = null;
      }
       while (false);
      tmp$_0 = firstOrNull$result;
      if (tmp$_0 == null) {
        continue;
      }var option = tmp$_0;
      if (!contains(option.options, value) & !option.number)
        throw new InvalidPlotConfigValueException(values.get_11rb$(key), key);
    }
    var $receiver_0 = description.options;
    var destination = ArrayList_init();
    var tmp$_3;
    for (tmp$_3 = 0; tmp$_3 !== $receiver_0.length; ++tmp$_3) {
      var element_0 = $receiver_0[tmp$_3];
      if (!element_0.number)
        destination.add_11rb$(element_0);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_4;
    tmp$_4 = destination.iterator();
    while (tmp$_4.hasNext()) {
      var item = tmp$_4.next();
      destination_0.add_11rb$(item.name);
    }
    var result = LinkedHashMap_init_0(coerceAtLeast(mapCapacity(collectionSizeOrDefault(destination_0, 10)), 16));
    var tmp$_5;
    tmp$_5 = destination_0.iterator();
    while (tmp$_5.hasNext()) {
      var element_1 = tmp$_5.next();
      var tmp$_6 = result.put_xwzc9p$;
      var tmp$_7;
      tmp$_7 = values.get_11rb$(element_1);
      if (tmp$_7 == null) {
        throw new InvalidPlotConfigValueException(values.get_11rb$(element_1), element_1);
      }tmp$_6.call(result, element_1, tmp$_7);
    }
    this.categoricalOptions_0 = result;
    var $receiver_1 = description.options;
    var destination_1 = ArrayList_init();
    var tmp$_8;
    for (tmp$_8 = 0; tmp$_8 !== $receiver_1.length; ++tmp$_8) {
      var element_2 = $receiver_1[tmp$_8];
      if (element_2.number)
        destination_1.add_11rb$(element_2);
    }
    var destination_2 = ArrayList_init_0(collectionSizeOrDefault(destination_1, 10));
    var tmp$_9;
    tmp$_9 = destination_1.iterator();
    while (tmp$_9.hasNext()) {
      var item_0 = tmp$_9.next();
      destination_2.add_11rb$(item_0.name);
    }
    var result_0 = LinkedHashMap_init_0(coerceAtLeast(mapCapacity(collectionSizeOrDefault(destination_2, 10)), 16));
    var tmp$_10;
    tmp$_10 = destination_2.iterator();
    while (tmp$_10.hasNext()) {
      var element_3 = tmp$_10.next();
      var tmp$_11 = result_0.put_xwzc9p$;
      var tmp$_12, tmp$_13;
      tmp$_13 = (tmp$_12 = values.get_11rb$(element_3)) != null ? toDoubleOrNull(tmp$_12) : null;
      if (tmp$_13 == null) {
        throw new InvalidPlotConfigValueException(values.get_11rb$(element_3), element_3);
      }tmp$_11.call(result_0, element_3, tmp$_13);
    }
    this.numericalOptions_0 = result_0;
  }
  PlotConfiguration.prototype.getCategoricalOption_bhflj0$ = function (option) {
    var tmp$;
    tmp$ = this.categoricalOptions_0.get_11rb$(option.name);
    if (tmp$ == null) {
      throw new InvalidPlotConfigNameException(option.name);
    }return tmp$;
  };
  PlotConfiguration.prototype.getNumericalOption_bhflj0$ = function (option) {
    var tmp$;
    tmp$ = this.numericalOptions_0.get_11rb$(option.name);
    if (tmp$ == null) {
      throw new InvalidPlotConfigNameException(option.name);
    }return tmp$;
  };
  PlotConfiguration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlotConfiguration',
    interfaces: []
  };
  function PlotOptions() {
    PlotOptions_instance = this;
    this.comparison = new PlotOptions$comparison$ObjectLiteral('baseline', 'Benchmark used as baseline');
  }
  function PlotOptions$comparison$ObjectLiteral(name, description) {
    DynamicCategoricalOption.call(this, name, description);
  }
  PlotOptions$comparison$ObjectLiteral.prototype.getOptions_gopuhv$ = function (results) {
    if (results.length === 2)
      return [results[0].identifier, results[1].identifier];
    else
      throw new InvalidPlotTransformException('Comparison is only possible between two benchmarks');
  };
  PlotOptions$comparison$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DynamicCategoricalOption]
  };
  PlotOptions.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PlotOptions',
    interfaces: []
  };
  var PlotOptions_instance = null;
  function PlotOptions_getInstance() {
    if (PlotOptions_instance === null) {
      new PlotOptions();
    }return PlotOptions_instance;
  }
  function PlotTransform() {
  }
  PlotTransform.prototype.getPlotDescription_j6m42o$ = function (results) {
    return new PlotDescription(this.name, copyToArray(this.plottableAs), copyToArray(this.getAvailableOptions_j6m42o$(results)));
  };
  PlotTransform.prototype.checkNumInputs_za3lpa$ = function (num) {
    if (!this.numInputsRange.contains_mef7kx$(num))
      throw new InvalidPlotTransformException(this.name + ' can only be used with ' + this.numInputsRange.first + ' to ' + this.numInputsRange.last + ' inputs');
  };
  PlotTransform.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PlotTransform',
    interfaces: []
  };
  function Dataset() {
  }
  Dataset.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Dataset',
    interfaces: []
  };
  function BarChartDataset(label, data) {
    this.label_ef43fk$_0 = label;
    this.data = data;
  }
  Object.defineProperty(BarChartDataset.prototype, 'label', {
    get: function () {
      return this.label_ef43fk$_0;
    }
  });
  BarChartDataset.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BarChartDataset',
    interfaces: [Dataset]
  };
  function PointDataset(label, data) {
    this.label_81h8fh$_0 = label;
    this.data = data;
  }
  Object.defineProperty(PointDataset.prototype, 'label', {
    get: function () {
      return this.label_81h8fh$_0;
    }
  });
  PointDataset.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PointDataset',
    interfaces: [Dataset]
  };
  function PlotPoint(x, y) {
    this.x = x;
    this.y = y;
  }
  PlotPoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlotPoint',
    interfaces: []
  };
  PlotPoint.prototype.component1 = function () {
    return this.x;
  };
  PlotPoint.prototype.component2 = function () {
    return this.y;
  };
  PlotPoint.prototype.copy_lu1900$ = function (x, y) {
    return new PlotPoint(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  PlotPoint.prototype.toString = function () {
    return 'PlotPoint(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  PlotPoint.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  PlotPoint.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function PlottableData(datasets, labels) {
    if (labels === void 0) {
      labels = [];
    }this.datasets = datasets;
    this.labels = labels;
  }
  PlottableData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlottableData',
    interfaces: []
  };
  function filterIsInstance$lambda(typeClosure$R, isR) {
    return function (it) {
      return isR(it);
    };
  }
  function BlasOptions() {
    BlasOptions_instance = this;
    this.xAxis = new CategoricalOption('xAxis', ['n', 'm', 'r', 'k'], void 0, 'Value displayed on x axis');
    this.yAxis = new CategoricalOption('yAxis', ['time', 'flops', 'bandwidth'], void 0, 'Value displayed on y axis');
    this.minN = new BlasOptions$minN$ObjectLiteral('minN', 'Lower limit for n');
    this.maxN = new BlasOptions$maxN$ObjectLiteral('maxN', 'Upper limit for n');
    this.minR = new BlasOptions$minR$ObjectLiteral('minR', 'Lower limit for r');
    this.maxR = new BlasOptions$maxR$ObjectLiteral('maxR', 'Upper limit for r');
    this.minM = new BlasOptions$minM$ObjectLiteral('minM', 'Lower limit for m');
    this.maxM = new BlasOptions$maxM$ObjectLiteral('maxM', 'Upper limit for m');
    this.minK = new BlasOptions$minK$ObjectLiteral('minK', 'Lower limit for k');
    this.maxK = new BlasOptions$maxK$ObjectLiteral('maxK', 'Upper limit for k');
  }
  function BlasOptions$minN$ObjectLiteral(name, description) {
    DynamicNumericalOption.call(this, name, description);
  }
  function BlasOptions$minN$ObjectLiteral$getDefault$lambda(it) {
    return it.datapoints;
  }
  function BlasOptions$minN$ObjectLiteral$getDefault$lambda_0(it) {
    return it.n;
  }
  BlasOptions$minN$ObjectLiteral.prototype.getDefault_gopuhv$ = function (results) {
    var tmp$, tmp$_0;
    var $receiver = asSequence(results);
    var tmp$_1;
    return (tmp$_0 = (tmp$ = minOrNull(map(flatten(map(Kotlin.isType(tmp$_1 = filter($receiver, filterIsInstance$lambda(BlasBenchmarkResult, Kotlin.isInstanceOf(BlasBenchmarkResult))), Sequence) ? tmp$_1 : throwCCE(), BlasOptions$minN$ObjectLiteral$getDefault$lambda)), BlasOptions$minN$ObjectLiteral$getDefault$lambda_0))) != null ? tmp$.toNumber() : null) != null ? tmp$_0 : 0.0;
  };
  BlasOptions$minN$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DynamicNumericalOption]
  };
  function BlasOptions$maxN$ObjectLiteral(name, description) {
    DynamicNumericalOption.call(this, name, description);
  }
  function BlasOptions$maxN$ObjectLiteral$getDefault$lambda(it) {
    return it.datapoints;
  }
  function BlasOptions$maxN$ObjectLiteral$getDefault$lambda_0(it) {
    return it.n;
  }
  BlasOptions$maxN$ObjectLiteral.prototype.getDefault_gopuhv$ = function (results) {
    var tmp$, tmp$_0;
    var $receiver = asSequence(results);
    var tmp$_1;
    return (tmp$_0 = (tmp$ = maxOrNull(map(flatten(map(Kotlin.isType(tmp$_1 = filter($receiver, filterIsInstance$lambda(BlasBenchmarkResult, Kotlin.isInstanceOf(BlasBenchmarkResult))), Sequence) ? tmp$_1 : throwCCE(), BlasOptions$maxN$ObjectLiteral$getDefault$lambda)), BlasOptions$maxN$ObjectLiteral$getDefault$lambda_0))) != null ? tmp$.toNumber() : null) != null ? tmp$_0 : 0.0;
  };
  BlasOptions$maxN$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DynamicNumericalOption]
  };
  function BlasOptions$minR$ObjectLiteral(name, description) {
    DynamicNumericalOption.call(this, name, description);
  }
  function BlasOptions$minR$ObjectLiteral$getDefault$lambda(it) {
    return it.datapoints;
  }
  function BlasOptions$minR$ObjectLiteral$getDefault$lambda_0(it) {
    return it.r;
  }
  BlasOptions$minR$ObjectLiteral.prototype.getDefault_gopuhv$ = function (results) {
    var tmp$, tmp$_0;
    var $receiver = asSequence(results);
    var tmp$_1;
    return (tmp$_0 = (tmp$ = minOrNull(map(flatten(map(Kotlin.isType(tmp$_1 = filter($receiver, filterIsInstance$lambda(BlasBenchmarkResult, Kotlin.isInstanceOf(BlasBenchmarkResult))), Sequence) ? tmp$_1 : throwCCE(), BlasOptions$minR$ObjectLiteral$getDefault$lambda)), BlasOptions$minR$ObjectLiteral$getDefault$lambda_0))) != null ? tmp$.toNumber() : null) != null ? tmp$_0 : 0.0;
  };
  BlasOptions$minR$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DynamicNumericalOption]
  };
  function BlasOptions$maxR$ObjectLiteral(name, description) {
    DynamicNumericalOption.call(this, name, description);
  }
  function BlasOptions$maxR$ObjectLiteral$getDefault$lambda(it) {
    return it.datapoints;
  }
  function BlasOptions$maxR$ObjectLiteral$getDefault$lambda_0(it) {
    return it.r;
  }
  BlasOptions$maxR$ObjectLiteral.prototype.getDefault_gopuhv$ = function (results) {
    var tmp$, tmp$_0;
    var $receiver = asSequence(results);
    var tmp$_1;
    return (tmp$_0 = (tmp$ = maxOrNull(map(flatten(map(Kotlin.isType(tmp$_1 = filter($receiver, filterIsInstance$lambda(BlasBenchmarkResult, Kotlin.isInstanceOf(BlasBenchmarkResult))), Sequence) ? tmp$_1 : throwCCE(), BlasOptions$maxR$ObjectLiteral$getDefault$lambda)), BlasOptions$maxR$ObjectLiteral$getDefault$lambda_0))) != null ? tmp$.toNumber() : null) != null ? tmp$_0 : 0.0;
  };
  BlasOptions$maxR$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DynamicNumericalOption]
  };
  function BlasOptions$minM$ObjectLiteral(name, description) {
    DynamicNumericalOption.call(this, name, description);
  }
  function BlasOptions$minM$ObjectLiteral$getDefault$lambda(it) {
    return it.datapoints;
  }
  function BlasOptions$minM$ObjectLiteral$getDefault$lambda_0(it) {
    return it.m;
  }
  BlasOptions$minM$ObjectLiteral.prototype.getDefault_gopuhv$ = function (results) {
    var tmp$, tmp$_0;
    var $receiver = asSequence(results);
    var tmp$_1;
    return (tmp$_0 = (tmp$ = minOrNull(map(flatten(map(Kotlin.isType(tmp$_1 = filter($receiver, filterIsInstance$lambda(BlasBenchmarkResult, Kotlin.isInstanceOf(BlasBenchmarkResult))), Sequence) ? tmp$_1 : throwCCE(), BlasOptions$minM$ObjectLiteral$getDefault$lambda)), BlasOptions$minM$ObjectLiteral$getDefault$lambda_0))) != null ? tmp$.toNumber() : null) != null ? tmp$_0 : 0.0;
  };
  BlasOptions$minM$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DynamicNumericalOption]
  };
  function BlasOptions$maxM$ObjectLiteral(name, description) {
    DynamicNumericalOption.call(this, name, description);
  }
  function BlasOptions$maxM$ObjectLiteral$getDefault$lambda(it) {
    return it.datapoints;
  }
  function BlasOptions$maxM$ObjectLiteral$getDefault$lambda_0(it) {
    return it.m;
  }
  BlasOptions$maxM$ObjectLiteral.prototype.getDefault_gopuhv$ = function (results) {
    var tmp$, tmp$_0;
    var $receiver = asSequence(results);
    var tmp$_1;
    return (tmp$_0 = (tmp$ = maxOrNull(map(flatten(map(Kotlin.isType(tmp$_1 = filter($receiver, filterIsInstance$lambda(BlasBenchmarkResult, Kotlin.isInstanceOf(BlasBenchmarkResult))), Sequence) ? tmp$_1 : throwCCE(), BlasOptions$maxM$ObjectLiteral$getDefault$lambda)), BlasOptions$maxM$ObjectLiteral$getDefault$lambda_0))) != null ? tmp$.toNumber() : null) != null ? tmp$_0 : 0.0;
  };
  BlasOptions$maxM$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DynamicNumericalOption]
  };
  function BlasOptions$minK$ObjectLiteral(name, description) {
    DynamicNumericalOption.call(this, name, description);
  }
  function BlasOptions$minK$ObjectLiteral$getDefault$lambda(it) {
    return it.datapoints;
  }
  function BlasOptions$minK$ObjectLiteral$getDefault$lambda_0(it) {
    return it.k;
  }
  BlasOptions$minK$ObjectLiteral.prototype.getDefault_gopuhv$ = function (results) {
    var tmp$, tmp$_0;
    var $receiver = asSequence(results);
    var tmp$_1;
    return (tmp$_0 = (tmp$ = minOrNull(map(flatten(map(Kotlin.isType(tmp$_1 = filter($receiver, filterIsInstance$lambda(BlasBenchmarkResult, Kotlin.isInstanceOf(BlasBenchmarkResult))), Sequence) ? tmp$_1 : throwCCE(), BlasOptions$minK$ObjectLiteral$getDefault$lambda)), BlasOptions$minK$ObjectLiteral$getDefault$lambda_0))) != null ? tmp$.toNumber() : null) != null ? tmp$_0 : 0.0;
  };
  BlasOptions$minK$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DynamicNumericalOption]
  };
  function BlasOptions$maxK$ObjectLiteral(name, description) {
    DynamicNumericalOption.call(this, name, description);
  }
  function BlasOptions$maxK$ObjectLiteral$getDefault$lambda(it) {
    return it.datapoints;
  }
  function BlasOptions$maxK$ObjectLiteral$getDefault$lambda_0(it) {
    return it.k;
  }
  BlasOptions$maxK$ObjectLiteral.prototype.getDefault_gopuhv$ = function (results) {
    var tmp$, tmp$_0;
    var $receiver = asSequence(results);
    var tmp$_1;
    return (tmp$_0 = (tmp$ = maxOrNull(map(flatten(map(Kotlin.isType(tmp$_1 = filter($receiver, filterIsInstance$lambda(BlasBenchmarkResult, Kotlin.isInstanceOf(BlasBenchmarkResult))), Sequence) ? tmp$_1 : throwCCE(), BlasOptions$maxK$ObjectLiteral$getDefault$lambda)), BlasOptions$maxK$ObjectLiteral$getDefault$lambda_0))) != null ? tmp$.toNumber() : null) != null ? tmp$_0 : 0.0;
  };
  BlasOptions$maxK$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DynamicNumericalOption]
  };
  BlasOptions.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BlasOptions',
    interfaces: []
  };
  var BlasOptions_instance = null;
  function BlasOptions_getInstance() {
    if (BlasOptions_instance === null) {
      new BlasOptions();
    }return BlasOptions_instance;
  }
  function BlasPlotTransform() {
  }
  BlasPlotTransform.prototype.transform_vjoouo$ = function (results, config) {
    var tmp$;
    tmp$ = results.iterator();
    while (tmp$.hasNext()) {
      var result = tmp$.next();
      if (!Kotlin.isType(result, BlasBenchmarkResult))
        throw new InvalidPlotTransformException('Invalid benchmark type, only BlasBenchmarkResult is allowed');
    }
    this.checkNumInputs_za3lpa$(results.size);
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = results.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (Kotlin.isType(element, BlasBenchmarkResult))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination_0.add_11rb$(new BlasBenchmarkResult(item.commit, item.device, filterBlasDatapoints(item.datapoints, config)));
    }
    var filteredResults = destination_0;
    return this.transformBlas_kvm7jz$(filteredResults, config);
  };
  BlasPlotTransform.prototype.getAvailableOptions_j6m42o$ = function (results) {
    return plus(this.getBlasPlotOptions_j6m42o$(results), listOf([BlasOptions_getInstance().minN.realizeOption_gopuhv$(copyToArray(results)), BlasOptions_getInstance().maxN.realizeOption_gopuhv$(copyToArray(results)), BlasOptions_getInstance().minR.realizeOption_gopuhv$(copyToArray(results)), BlasOptions_getInstance().maxR.realizeOption_gopuhv$(copyToArray(results)), BlasOptions_getInstance().minM.realizeOption_gopuhv$(copyToArray(results)), BlasOptions_getInstance().maxM.realizeOption_gopuhv$(copyToArray(results)), BlasOptions_getInstance().minK.realizeOption_gopuhv$(copyToArray(results)), BlasOptions_getInstance().maxK.realizeOption_gopuhv$(copyToArray(results))]));
  };
  BlasPlotTransform.prototype.getYAxisByOption_sctid2$ = function ($receiver, config) {
    switch (config.getCategoricalOption_bhflj0$(BlasOptions_getInstance().yAxis)) {
      case 'time':
        return $receiver.time;
      case 'flops':
        return $receiver.flops;
      case 'bandwidth':
        return $receiver.bandwidth;
      default:throw new InvalidPlotConfigValueException(config.getCategoricalOption_bhflj0$(BlasOptions_getInstance().yAxis), BlasOptions_getInstance().yAxis.name);
    }
  };
  BlasPlotTransform.prototype.getXAxisByConfig_31rftz$ = function ($receiver, config) {
    switch (config.getCategoricalOption_bhflj0$(BlasOptions_getInstance().xAxis)) {
      case 'n':
        return $receiver.n;
      case 'r':
        return $receiver.r;
      case 'm':
        return $receiver.m;
      case 'k':
        return $receiver.k;
      default:throw new InvalidPlotConfigValueException(config.getCategoricalOption_bhflj0$(BlasOptions_getInstance().xAxis), BlasOptions_getInstance().xAxis.name);
    }
  };
  BlasPlotTransform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlasPlotTransform',
    interfaces: [PlotTransform]
  };
  var compareBy$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function BlasSpeedupTransform() {
    BlasPlotTransform.call(this);
    this.numInputsRange_3fwxml$_0 = new IntRange(2, 2);
    this.plottableAs_m5f0ye$_0 = listOf([PlotType$Companion_getInstance().Line, PlotType$Companion_getInstance().Scatter]);
    this.name_3mwkqo$_0 = 'Speedup Plot';
  }
  Object.defineProperty(BlasSpeedupTransform.prototype, 'numInputsRange', {
    configurable: true,
    get: function () {
      return this.numInputsRange_3fwxml$_0;
    }
  });
  Object.defineProperty(BlasSpeedupTransform.prototype, 'plottableAs', {
    configurable: true,
    get: function () {
      return this.plottableAs_m5f0ye$_0;
    }
  });
  Object.defineProperty(BlasSpeedupTransform.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.name_3mwkqo$_0;
    }
  });
  BlasSpeedupTransform.prototype.getBlasPlotOptions_j6m42o$ = function (results) {
    return listOf([BlasOptions_getInstance().xAxis, PlotOptions_getInstance().comparison.realizeOption_gopuhv$(copyToArray(results))]);
  };
  function BlasSpeedupTransform$transformBlas$lambda$lambda(it) {
    return it.x;
  }
  BlasSpeedupTransform.prototype.transformBlas_kvm7jz$ = function (benchmarkResults, config) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var seriesByName = LinkedHashMap_init();
    var datapointsA;
    var datapointsB;
    if (equals(config.getCategoricalOption_bhflj0$(PlotOptions_getInstance().comparison), first_0(benchmarkResults).identifier)) {
      datapointsA = benchmarkResults.get_za3lpa$(0).datapoints;
      datapointsB = benchmarkResults.get_za3lpa$(1).datapoints;
    } else {
      datapointsA = benchmarkResults.get_za3lpa$(1).datapoints;
      datapointsB = benchmarkResults.get_za3lpa$(0).datapoints;
    }
    tmp$ = datapointsA.iterator();
    while (tmp$.hasNext()) {
      var datapointA = tmp$.next();
      var $receiver = datapointsB;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_3;
        tmp$_3 = $receiver.iterator();
        while (tmp$_3.hasNext()) {
          var element = tmp$_3.next();
          if (equals(element.n, datapointA.n) & equals(element.m, datapointA.m) & equals(element.r, datapointA.r) & equals(element.k, datapointA.k)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }}
        firstOrNull$result = null;
      }
       while (false);
      tmp$_0 = firstOrNull$result;
      if (tmp$_0 == null) {
        continue;
      }var datapointB = tmp$_0;
      tmp$_1 = datapointA.operations.iterator();
      while (tmp$_1.hasNext()) {
        var operationA = tmp$_1.next();
        var $receiver_0 = datapointB.operations;
        var firstOrNull$result_0;
        firstOrNull$break: do {
          var tmp$_4;
          tmp$_4 = $receiver_0.iterator();
          while (tmp$_4.hasNext()) {
            var element_0 = tmp$_4.next();
            if (equals(element_0.name, operationA.name)) {
              firstOrNull$result_0 = element_0;
              break firstOrNull$break;
            }}
          firstOrNull$result_0 = null;
        }
         while (false);
        tmp$_2 = firstOrNull$result_0;
        if (tmp$_2 == null) {
          continue;
        }var operationB = tmp$_2;
        if (!operationA.completed | !operationB.completed)
          continue;
        var key = operationA.name;
        var tmp$_5;
        var value = seriesByName.get_11rb$(key);
        if (value == null) {
          var answer = ArrayList_init();
          seriesByName.put_xwzc9p$(key, answer);
          tmp$_5 = answer;
        } else {
          tmp$_5 = value;
        }
        var $receiver_1 = tmp$_5;
        var element_1 = new PlotPoint(this.getXAxisByConfig_31rftz$(datapointA, config).toNumber(), operationA.time / operationB.time);
        $receiver_1.add_11rb$(element_1);
      }
    }
    var destination = ArrayList_init_0(seriesByName.size);
    var tmp$_6;
    tmp$_6 = seriesByName.entries.iterator();
    while (tmp$_6.hasNext()) {
      var item = tmp$_6.next();
      var tmp$_7 = destination.add_11rb$;
      var key_0 = item.key;
      var value_0 = item.value;
      tmp$_7.call(destination, new PointDataset(key_0, copyToArray(sortedWith(value_0, new Comparator(compareBy$lambda_0(BlasSpeedupTransform$transformBlas$lambda$lambda))))));
    }
    return new PlottableData(copyToArray(destination));
  };
  BlasSpeedupTransform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlasSpeedupTransform',
    interfaces: [BlasPlotTransform]
  };
  var compareBy$lambda_1 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function SingleBlasPlot() {
    BlasPlotTransform.call(this);
    this.numInputsRange_pmwr38$_0 = new IntRange(1, 1);
    this.plottableAs_gmtr8r$_0 = listOf([PlotType$Companion_getInstance().Scatter, PlotType$Companion_getInstance().Line]);
    this.name_b2wxpd$_0 = 'Blas Plot';
  }
  Object.defineProperty(SingleBlasPlot.prototype, 'numInputsRange', {
    configurable: true,
    get: function () {
      return this.numInputsRange_pmwr38$_0;
    }
  });
  Object.defineProperty(SingleBlasPlot.prototype, 'plottableAs', {
    configurable: true,
    get: function () {
      return this.plottableAs_gmtr8r$_0;
    }
  });
  Object.defineProperty(SingleBlasPlot.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.name_b2wxpd$_0;
    }
  });
  SingleBlasPlot.prototype.getBlasPlotOptions_j6m42o$ = function (results) {
    return listOf([BlasOptions_getInstance().xAxis, BlasOptions_getInstance().yAxis]);
  };
  function SingleBlasPlot$transformBlas$lambda$lambda(it) {
    return it.x;
  }
  SingleBlasPlot.prototype.transformBlas_kvm7jz$ = function (benchmarkResults, config) {
    var tmp$, tmp$_0;
    var benchmarkResult = first_0(benchmarkResults);
    var seriesByName = LinkedHashMap_init();
    tmp$ = benchmarkResult.datapoints.iterator();
    while (tmp$.hasNext()) {
      var datapoint = tmp$.next();
      tmp$_0 = datapoint.operations.iterator();
      while (tmp$_0.hasNext()) {
        var operation = tmp$_0.next();
        if (!operation.completed)
          continue;
        var key = operation.name;
        var tmp$_1;
        var value = seriesByName.get_11rb$(key);
        if (value == null) {
          var answer = ArrayList_init();
          seriesByName.put_xwzc9p$(key, answer);
          tmp$_1 = answer;
        } else {
          tmp$_1 = value;
        }
        var $receiver = tmp$_1;
        var element = new PlotPoint(this.getXAxisByConfig_31rftz$(datapoint, config).toNumber(), this.getYAxisByOption_sctid2$(operation, config));
        $receiver.add_11rb$(element);
      }
    }
    var destination = ArrayList_init_0(seriesByName.size);
    var tmp$_2;
    tmp$_2 = seriesByName.entries.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      var tmp$_3 = destination.add_11rb$;
      var key_0 = item.key;
      var value_0 = item.value;
      tmp$_3.call(destination, new PointDataset(key_0, copyToArray(sortedWith(value_0, new Comparator(compareBy$lambda_1(SingleBlasPlot$transformBlas$lambda$lambda))))));
    }
    return new PlottableData(copyToArray(destination));
  };
  SingleBlasPlot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingleBlasPlot',
    interfaces: [BlasPlotTransform]
  };
  function filterIsInstance$lambda_0(typeClosure$R, isR) {
    return function (it) {
      return isR(it);
    };
  }
  function MatrixOptions() {
    MatrixOptions_instance = this;
    this.matrix = new MatrixOptions$matrix$ObjectLiteral('matrix', 'Which matrix to plot');
    this.xAxis = new CategoricalOption('xAxis', ['nonzeros', 'rows', 'columns'], void 0, 'Value displayed on the x axis');
    this.minRows = new MatrixOptions$minRows$ObjectLiteral('minRows', 'Lower limit for rows');
    this.maxRows = new MatrixOptions$maxRows$ObjectLiteral('maxRows', 'Upper limit for rows');
    this.minColumns = new MatrixOptions$minColumns$ObjectLiteral('minColumns', 'Lower limit for columns');
    this.maxColumns = new MatrixOptions$maxColumns$ObjectLiteral('maxColumns', 'Upper limit for columns');
    this.minNonzeros = new MatrixOptions$minNonzeros$ObjectLiteral('minNonzeros', 'Lower limit for nonzeros');
    this.maxNonzeros = new MatrixOptions$maxNonzeros$ObjectLiteral('maxNonzeros', 'Upper limit for nonzeros');
  }
  function MatrixOptions$matrix$ObjectLiteral(name, description) {
    DynamicCategoricalOption.call(this, name, description);
  }
  MatrixOptions$matrix$ObjectLiteral.prototype.getOptions_gopuhv$ = function (results) {
    var tmp$;
    if (results.length === 1) {
      var $receiver = (Kotlin.isType(tmp$ = first(results), MatrixBenchmarkResult) ? tmp$ : throwCCE()).datapoints;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(item.name);
      }
      return copyToArray(destination);
    } else
      throw new InvalidPlotTransformException('Plots using single matrices are only available for single benchmarks');
  };
  MatrixOptions$matrix$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DynamicCategoricalOption]
  };
  function MatrixOptions$minRows$ObjectLiteral(name, description) {
    DynamicNumericalOption.call(this, name, description);
  }
  function MatrixOptions$minRows$ObjectLiteral$getDefault$lambda(it) {
    return it.datapoints;
  }
  function MatrixOptions$minRows$ObjectLiteral$getDefault$lambda_0(it) {
    return it.rows;
  }
  MatrixOptions$minRows$ObjectLiteral.prototype.getDefault_gopuhv$ = function (results) {
    var tmp$, tmp$_0;
    var $receiver = asSequence(results);
    var tmp$_1;
    return (tmp$_0 = (tmp$ = minOrNull(map(flatten(map(Kotlin.isType(tmp$_1 = filter($receiver, filterIsInstance$lambda_0(MatrixBenchmarkResult, Kotlin.isInstanceOf(MatrixBenchmarkResult))), Sequence) ? tmp$_1 : throwCCE(), MatrixOptions$minRows$ObjectLiteral$getDefault$lambda)), MatrixOptions$minRows$ObjectLiteral$getDefault$lambda_0))) != null ? tmp$.toNumber() : null) != null ? tmp$_0 : 0.0;
  };
  MatrixOptions$minRows$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DynamicNumericalOption]
  };
  function MatrixOptions$maxRows$ObjectLiteral(name, description) {
    DynamicNumericalOption.call(this, name, description);
  }
  function MatrixOptions$maxRows$ObjectLiteral$getDefault$lambda(it) {
    return it.datapoints;
  }
  function MatrixOptions$maxRows$ObjectLiteral$getDefault$lambda_0(it) {
    return it.rows;
  }
  MatrixOptions$maxRows$ObjectLiteral.prototype.getDefault_gopuhv$ = function (results) {
    var tmp$, tmp$_0;
    var $receiver = asSequence(results);
    var tmp$_1;
    return (tmp$_0 = (tmp$ = maxOrNull(map(flatten(map(Kotlin.isType(tmp$_1 = filter($receiver, filterIsInstance$lambda_0(MatrixBenchmarkResult, Kotlin.isInstanceOf(MatrixBenchmarkResult))), Sequence) ? tmp$_1 : throwCCE(), MatrixOptions$maxRows$ObjectLiteral$getDefault$lambda)), MatrixOptions$maxRows$ObjectLiteral$getDefault$lambda_0))) != null ? tmp$.toNumber() : null) != null ? tmp$_0 : 0.0;
  };
  MatrixOptions$maxRows$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DynamicNumericalOption]
  };
  function MatrixOptions$minColumns$ObjectLiteral(name, description) {
    DynamicNumericalOption.call(this, name, description);
  }
  function MatrixOptions$minColumns$ObjectLiteral$getDefault$lambda(it) {
    return it.datapoints;
  }
  function MatrixOptions$minColumns$ObjectLiteral$getDefault$lambda_0(it) {
    return it.columns;
  }
  MatrixOptions$minColumns$ObjectLiteral.prototype.getDefault_gopuhv$ = function (results) {
    var tmp$, tmp$_0;
    var $receiver = asSequence(results);
    var tmp$_1;
    return (tmp$_0 = (tmp$ = minOrNull(map(flatten(map(Kotlin.isType(tmp$_1 = filter($receiver, filterIsInstance$lambda_0(MatrixBenchmarkResult, Kotlin.isInstanceOf(MatrixBenchmarkResult))), Sequence) ? tmp$_1 : throwCCE(), MatrixOptions$minColumns$ObjectLiteral$getDefault$lambda)), MatrixOptions$minColumns$ObjectLiteral$getDefault$lambda_0))) != null ? tmp$.toNumber() : null) != null ? tmp$_0 : 0.0;
  };
  MatrixOptions$minColumns$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DynamicNumericalOption]
  };
  function MatrixOptions$maxColumns$ObjectLiteral(name, description) {
    DynamicNumericalOption.call(this, name, description);
  }
  function MatrixOptions$maxColumns$ObjectLiteral$getDefault$lambda(it) {
    return it.datapoints;
  }
  function MatrixOptions$maxColumns$ObjectLiteral$getDefault$lambda_0(it) {
    return it.columns;
  }
  MatrixOptions$maxColumns$ObjectLiteral.prototype.getDefault_gopuhv$ = function (results) {
    var tmp$, tmp$_0;
    var $receiver = asSequence(results);
    var tmp$_1;
    return (tmp$_0 = (tmp$ = maxOrNull(map(flatten(map(Kotlin.isType(tmp$_1 = filter($receiver, filterIsInstance$lambda_0(MatrixBenchmarkResult, Kotlin.isInstanceOf(MatrixBenchmarkResult))), Sequence) ? tmp$_1 : throwCCE(), MatrixOptions$maxColumns$ObjectLiteral$getDefault$lambda)), MatrixOptions$maxColumns$ObjectLiteral$getDefault$lambda_0))) != null ? tmp$.toNumber() : null) != null ? tmp$_0 : 0.0;
  };
  MatrixOptions$maxColumns$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DynamicNumericalOption]
  };
  function MatrixOptions$minNonzeros$ObjectLiteral(name, description) {
    DynamicNumericalOption.call(this, name, description);
  }
  function MatrixOptions$minNonzeros$ObjectLiteral$getDefault$lambda(it) {
    return it.datapoints;
  }
  function MatrixOptions$minNonzeros$ObjectLiteral$getDefault$lambda_0(it) {
    return it.nonzeros;
  }
  MatrixOptions$minNonzeros$ObjectLiteral.prototype.getDefault_gopuhv$ = function (results) {
    var tmp$, tmp$_0;
    var $receiver = asSequence(results);
    var tmp$_1;
    return (tmp$_0 = (tmp$ = minOrNull(map(flatten(map(Kotlin.isType(tmp$_1 = filter($receiver, filterIsInstance$lambda_0(MatrixBenchmarkResult, Kotlin.isInstanceOf(MatrixBenchmarkResult))), Sequence) ? tmp$_1 : throwCCE(), MatrixOptions$minNonzeros$ObjectLiteral$getDefault$lambda)), MatrixOptions$minNonzeros$ObjectLiteral$getDefault$lambda_0))) != null ? tmp$.toNumber() : null) != null ? tmp$_0 : 0.0;
  };
  MatrixOptions$minNonzeros$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DynamicNumericalOption]
  };
  function MatrixOptions$maxNonzeros$ObjectLiteral(name, description) {
    DynamicNumericalOption.call(this, name, description);
  }
  function MatrixOptions$maxNonzeros$ObjectLiteral$getDefault$lambda(it) {
    return it.datapoints;
  }
  function MatrixOptions$maxNonzeros$ObjectLiteral$getDefault$lambda_0(it) {
    return it.nonzeros;
  }
  MatrixOptions$maxNonzeros$ObjectLiteral.prototype.getDefault_gopuhv$ = function (results) {
    var tmp$, tmp$_0;
    var $receiver = asSequence(results);
    var tmp$_1;
    return (tmp$_0 = (tmp$ = maxOrNull(map(flatten(map(Kotlin.isType(tmp$_1 = filter($receiver, filterIsInstance$lambda_0(MatrixBenchmarkResult, Kotlin.isInstanceOf(MatrixBenchmarkResult))), Sequence) ? tmp$_1 : throwCCE(), MatrixOptions$maxNonzeros$ObjectLiteral$getDefault$lambda)), MatrixOptions$maxNonzeros$ObjectLiteral$getDefault$lambda_0))) != null ? tmp$.toNumber() : null) != null ? tmp$_0 : 0.0;
  };
  MatrixOptions$maxNonzeros$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DynamicNumericalOption]
  };
  MatrixOptions.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MatrixOptions',
    interfaces: []
  };
  var MatrixOptions_instance = null;
  function MatrixOptions_getInstance() {
    if (MatrixOptions_instance === null) {
      new MatrixOptions();
    }return MatrixOptions_instance;
  }
  function MatrixPlotTransform() {
  }
  MatrixPlotTransform.prototype.getAvailableOptions_j6m42o$ = function (results) {
    return plus(this.getMatrixPlotOptions_j6m42o$(results), listOf([MatrixOptions_getInstance().minRows.realizeOption_gopuhv$(copyToArray(results)), MatrixOptions_getInstance().maxRows.realizeOption_gopuhv$(copyToArray(results)), MatrixOptions_getInstance().maxColumns.realizeOption_gopuhv$(copyToArray(results)), MatrixOptions_getInstance().minColumns.realizeOption_gopuhv$(copyToArray(results)), MatrixOptions_getInstance().minNonzeros.realizeOption_gopuhv$(copyToArray(results)), MatrixOptions_getInstance().maxNonzeros.realizeOption_gopuhv$(copyToArray(results))]));
  };
  MatrixPlotTransform.prototype.getXAxisByConfig_whzn04$ = function ($receiver, config) {
    switch (config.getCategoricalOption_bhflj0$(MatrixOptions_getInstance().xAxis)) {
      case 'nonzeros':
        return $receiver.nonzeros.toNumber();
      case 'rows':
        return $receiver.rows.toNumber();
      case 'columns':
        return $receiver.columns.toNumber();
      default:throw new InvalidPlotConfigValueException(config.getCategoricalOption_bhflj0$(MatrixOptions_getInstance().xAxis), MatrixOptions_getInstance().xAxis.name);
    }
  };
  MatrixPlotTransform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MatrixPlotTransform',
    interfaces: [PlotTransform]
  };
  function ConversionPlotTransform() {
    MatrixPlotTransform.call(this);
  }
  ConversionPlotTransform.prototype.transform_vjoouo$ = function (results, config) {
    var tmp$;
    tmp$ = results.iterator();
    while (tmp$.hasNext()) {
      var result = tmp$.next();
      if (!Kotlin.isType(result, ConversionBenchmarkResult))
        throw new InvalidPlotTransformException('Invalid benchmark type, only ConversionBenchmarkResult is allowed');
    }
    this.checkNumInputs_za3lpa$(results.size);
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = results.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (Kotlin.isType(element, ConversionBenchmarkResult))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var tmp$_2 = destination_0.add_11rb$;
      var tmp$_3 = item.commit;
      var tmp$_4 = item.device;
      var $receiver = filterMatrixDatapoints(item.datapoints, config);
      var destination_1 = ArrayList_init();
      var tmp$_5;
      tmp$_5 = $receiver.iterator();
      while (tmp$_5.hasNext()) {
        var element_0 = tmp$_5.next();
        if (Kotlin.isType(element_0, ConversionDatapoint))
          destination_1.add_11rb$(element_0);
      }
      tmp$_2.call(destination_0, new ConversionBenchmarkResult(tmp$_3, tmp$_4, destination_1));
    }
    var filteredResults = destination_0;
    return this.transformConversion_dkr09n$(filteredResults, config);
  };
  ConversionPlotTransform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConversionPlotTransform',
    interfaces: [MatrixPlotTransform]
  };
  var compareBy$lambda_2 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function ConversionSingleScatterPlot() {
    ConversionPlotTransform.call(this);
    this.numInputsRange_h6vbq3$_0 = new IntRange(1, 1);
    this.plottableAs_deeeks$_0 = listOf_0(PlotType$Companion_getInstance().Scatter);
    this.name_30u2ji$_0 = 'Scatter Plot';
    this.yAxisOption_0 = new CategoricalOption('yAxis', ['bandwidth', 'time'], void 0, 'Value that gets displayed on the y axis');
  }
  Object.defineProperty(ConversionSingleScatterPlot.prototype, 'numInputsRange', {
    configurable: true,
    get: function () {
      return this.numInputsRange_h6vbq3$_0;
    }
  });
  Object.defineProperty(ConversionSingleScatterPlot.prototype, 'plottableAs', {
    configurable: true,
    get: function () {
      return this.plottableAs_deeeks$_0;
    }
  });
  Object.defineProperty(ConversionSingleScatterPlot.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.name_30u2ji$_0;
    }
  });
  ConversionSingleScatterPlot.prototype.getMatrixPlotOptions_j6m42o$ = function (results) {
    return listOf([MatrixOptions_getInstance().xAxis, this.yAxisOption_0]);
  };
  function ConversionSingleScatterPlot$transformConversion$lambda$lambda(it) {
    return it.x;
  }
  ConversionSingleScatterPlot.prototype.transformConversion_dkr09n$ = function (benchmarkResults, config) {
    var tmp$, tmp$_0;
    var benchmarkResult = benchmarkResults.get_za3lpa$(0);
    var seriesByName = LinkedHashMap_init();
    tmp$ = benchmarkResult.datapoints.iterator();
    while (tmp$.hasNext()) {
      var datapoint = tmp$.next();
      tmp$_0 = datapoint.conversions.iterator();
      while (tmp$_0.hasNext()) {
        var conversion = tmp$_0.next();
        if (!conversion.completed)
          continue;
        var tmp$_1;
        var key = conversion.name;
        var tmp$_2;
        var value = seriesByName.get_11rb$(key);
        if (value == null) {
          var answer = ArrayList_init();
          seriesByName.put_xwzc9p$(key, answer);
          tmp$_2 = answer;
        } else {
          tmp$_2 = value;
        }
        tmp$_1 = tmp$_2;
        var tmp$_3, tmp$_4;
        tmp$_3 = this.getXAxisByConfig_whzn04$(datapoint, config);
        switch (config.getCategoricalOption_bhflj0$(this.yAxisOption_0)) {
          case 'bandwidth':
            tmp$_4 = datapoint.nonzeros.toNumber() / conversion.time;
            break;
          case 'time':
            tmp$_4 = conversion.time;
            break;
          default:throw new InvalidPlotConfigValueException(config.getCategoricalOption_bhflj0$(this.yAxisOption_0), this.yAxisOption_0.name);
        }
        var element = new PlotPoint(tmp$_3, tmp$_4);
        tmp$_1.add_11rb$(element);
      }
    }
    var destination = ArrayList_init_0(seriesByName.size);
    var tmp$_5;
    tmp$_5 = seriesByName.entries.iterator();
    while (tmp$_5.hasNext()) {
      var item = tmp$_5.next();
      var tmp$_6 = destination.add_11rb$;
      var key_0 = item.key;
      var value_0 = item.value;
      tmp$_6.call(destination, new PointDataset(key_0, copyToArray(sortedWith(value_0, new Comparator(compareBy$lambda_2(ConversionSingleScatterPlot$transformConversion$lambda$lambda))))));
    }
    return new PlottableData(copyToArray(destination));
  };
  ConversionSingleScatterPlot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConversionSingleScatterPlot',
    interfaces: [ConversionPlotTransform]
  };
  var compareBy$lambda_3 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function ConversionSpeedupPlot() {
    ConversionPlotTransform.call(this);
    this.numInputsRange_t50go7$_0 = new IntRange(2, 2);
    this.plottableAs_viz4hs$_0 = listOf([PlotType$Companion_getInstance().Line, PlotType$Companion_getInstance().Scatter]);
    this.name_xt9v12$_0 = 'Speedup Plot';
  }
  Object.defineProperty(ConversionSpeedupPlot.prototype, 'numInputsRange', {
    configurable: true,
    get: function () {
      return this.numInputsRange_t50go7$_0;
    }
  });
  Object.defineProperty(ConversionSpeedupPlot.prototype, 'plottableAs', {
    configurable: true,
    get: function () {
      return this.plottableAs_viz4hs$_0;
    }
  });
  Object.defineProperty(ConversionSpeedupPlot.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.name_xt9v12$_0;
    }
  });
  ConversionSpeedupPlot.prototype.getMatrixPlotOptions_j6m42o$ = function (results) {
    return listOf([MatrixOptions_getInstance().xAxis, PlotOptions_getInstance().comparison.realizeOption_gopuhv$(copyToArray(results))]);
  };
  function ConversionSpeedupPlot$transformConversion$lambda$lambda(it) {
    return it.x;
  }
  ConversionSpeedupPlot.prototype.transformConversion_dkr09n$ = function (benchmarkResults, config) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var seriesByName = LinkedHashMap_init();
    var datapointsA;
    var datapointsB;
    if (equals(config.getCategoricalOption_bhflj0$(PlotOptions_getInstance().comparison), first_0(benchmarkResults).identifier)) {
      datapointsA = benchmarkResults.get_za3lpa$(0).datapoints;
      datapointsB = benchmarkResults.get_za3lpa$(1).datapoints;
    } else {
      datapointsA = benchmarkResults.get_za3lpa$(1).datapoints;
      datapointsB = benchmarkResults.get_za3lpa$(0).datapoints;
    }
    tmp$ = datapointsA.iterator();
    while (tmp$.hasNext()) {
      var datapointA = tmp$.next();
      var $receiver = datapointsB;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_3;
        tmp$_3 = $receiver.iterator();
        while (tmp$_3.hasNext()) {
          var element = tmp$_3.next();
          if (equals(element.nonzeros, datapointA.nonzeros) & equals(element.rows, datapointA.rows) & equals(element.columns, datapointA.columns)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }}
        firstOrNull$result = null;
      }
       while (false);
      tmp$_0 = firstOrNull$result;
      if (tmp$_0 == null) {
        continue;
      }var datapointB = tmp$_0;
      tmp$_1 = datapointA.conversions.iterator();
      while (tmp$_1.hasNext()) {
        var conversionA = tmp$_1.next();
        var $receiver_0 = datapointB.conversions;
        var firstOrNull$result_0;
        firstOrNull$break: do {
          var tmp$_4;
          tmp$_4 = $receiver_0.iterator();
          while (tmp$_4.hasNext()) {
            var element_0 = tmp$_4.next();
            if (equals(element_0.name, conversionA.name)) {
              firstOrNull$result_0 = element_0;
              break firstOrNull$break;
            }}
          firstOrNull$result_0 = null;
        }
         while (false);
        tmp$_2 = firstOrNull$result_0;
        if (tmp$_2 == null) {
          continue;
        }var conversionB = tmp$_2;
        if (!conversionA.completed | !conversionB.completed)
          continue;
        var key = conversionA.name;
        var tmp$_5;
        var value = seriesByName.get_11rb$(key);
        if (value == null) {
          var answer = ArrayList_init();
          seriesByName.put_xwzc9p$(key, answer);
          tmp$_5 = answer;
        } else {
          tmp$_5 = value;
        }
        var $receiver_1 = tmp$_5;
        var element_1 = new PlotPoint(this.getXAxisByConfig_whzn04$(datapointA, config), conversionA.time / conversionB.time);
        $receiver_1.add_11rb$(element_1);
      }
    }
    var destination = ArrayList_init_0(seriesByName.size);
    var tmp$_6;
    tmp$_6 = seriesByName.entries.iterator();
    while (tmp$_6.hasNext()) {
      var item = tmp$_6.next();
      var tmp$_7 = destination.add_11rb$;
      var key_0 = item.key;
      var value_0 = item.value;
      tmp$_7.call(destination, new PointDataset(key_0, copyToArray(sortedWith(value_0, new Comparator(compareBy$lambda_3(ConversionSpeedupPlot$transformConversion$lambda$lambda))))));
    }
    return new PlottableData(copyToArray(destination));
  };
  ConversionSpeedupPlot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConversionSpeedupPlot',
    interfaces: [ConversionPlotTransform]
  };
  var compareBy$lambda_4 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function PreconditionerOverview() {
    PreconditionerPlotTransform.call(this);
    this.numInputsRange_sz32r3$_0 = new IntRange(1, 1);
    this.plottableAs_esdwie$_0 = listOf_0(PlotType$Companion_getInstance().Scatter);
    this.name_vutofg$_0 = 'PreconditionerOverview';
    this.yAxisOption_0 = new CategoricalOption('yAxis', ['generate_time', 'apply_time'], void 0, 'Value that gets displayed on the y axis');
    this.xAxisOption_0 = new CategoricalOption('xAxis', ['iteration_timestamps', 'array_index'], void 0, 'Value that gets displayed on the x axis');
  }
  Object.defineProperty(PreconditionerOverview.prototype, 'numInputsRange', {
    configurable: true,
    get: function () {
      return this.numInputsRange_sz32r3$_0;
    }
  });
  Object.defineProperty(PreconditionerOverview.prototype, 'plottableAs', {
    configurable: true,
    get: function () {
      return this.plottableAs_esdwie$_0;
    }
  });
  Object.defineProperty(PreconditionerOverview.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.name_vutofg$_0;
    }
  });
  function PreconditionerOverview$transformPreconditioner$lambda$lambda(it) {
    return it.x;
  }
  PreconditionerOverview.prototype.transformPreconditioner_onjcui$ = function (benchmarkResults, config) {
    var tmp$, tmp$_0;
    var benchmarkResult = first_0(benchmarkResults);
    var seriesByName = LinkedHashMap_init();
    tmp$ = benchmarkResult.datapoints.iterator();
    while (tmp$.hasNext()) {
      var datapoint = tmp$.next();
      tmp$_0 = datapoint.preconditioners.iterator();
      while (tmp$_0.hasNext()) {
        var precond = tmp$_0.next();
        if (!precond.completed)
          continue;
        var tmp$_1;
        var key = precond.name;
        var tmp$_2;
        var value = seriesByName.get_11rb$(key);
        if (value == null) {
          var answer = ArrayList_init();
          seriesByName.put_xwzc9p$(key, answer);
          tmp$_2 = answer;
        } else {
          tmp$_2 = value;
        }
        tmp$_1 = tmp$_2;
        var tmp$_3, tmp$_4;
        tmp$_3 = this.getXAxisByConfig_whzn04$(datapoint, config);
        switch (config.getCategoricalOption_bhflj0$(this.yAxisOption_0)) {
          case 'generate_time':
            tmp$_4 = precond.generateTime;
            break;
          case 'apply_time':
            tmp$_4 = precond.applyTime;
            break;
          default:throw new InvalidPlotConfigValueException(config.getCategoricalOption_bhflj0$(this.yAxisOption_0), 'yAxis');
        }
        var element = new PlotPoint(tmp$_3, tmp$_4);
        tmp$_1.add_11rb$(element);
      }
    }
    var destination = ArrayList_init_0(seriesByName.size);
    var tmp$_5;
    tmp$_5 = seriesByName.entries.iterator();
    while (tmp$_5.hasNext()) {
      var item = tmp$_5.next();
      var tmp$_6 = destination.add_11rb$;
      var key_0 = item.key;
      var value_0 = item.value;
      tmp$_6.call(destination, new PointDataset(key_0, copyToArray(sortedWith(value_0, new Comparator(compareBy$lambda_4(PreconditionerOverview$transformPreconditioner$lambda$lambda))))));
    }
    return new PlottableData(copyToArray(destination));
  };
  PreconditionerOverview.prototype.getMatrixPlotOptions_j6m42o$ = function (results) {
    return listOf([this.xAxisOption_0, this.yAxisOption_0]);
  };
  PreconditionerOverview.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PreconditionerOverview',
    interfaces: [PreconditionerPlotTransform]
  };
  function PreconditionerPlotTransform() {
    MatrixPlotTransform.call(this);
  }
  PreconditionerPlotTransform.prototype.transform_vjoouo$ = function (results, config) {
    var tmp$;
    tmp$ = results.iterator();
    while (tmp$.hasNext()) {
      var result = tmp$.next();
      if (!Kotlin.isType(result, PreconditionerBenchmarkResult))
        throw new InvalidPlotTransformException('Invalid benchmark type, only PreconditionerBenchmarkResult is allowed');
    }
    this.checkNumInputs_za3lpa$(results.size);
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = results.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (Kotlin.isType(element, PreconditionerBenchmarkResult))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var tmp$_2 = destination_0.add_11rb$;
      var tmp$_3 = item.commit;
      var tmp$_4 = item.device;
      var $receiver = filterMatrixDatapoints(item.datapoints, config);
      var destination_1 = ArrayList_init();
      var tmp$_5;
      tmp$_5 = $receiver.iterator();
      while (tmp$_5.hasNext()) {
        var element_0 = tmp$_5.next();
        if (Kotlin.isType(element_0, PreconditionerDatapoint))
          destination_1.add_11rb$(element_0);
      }
      tmp$_2.call(destination_0, new PreconditionerBenchmarkResult(tmp$_3, tmp$_4, destination_1));
    }
    var filteredResults = destination_0;
    return this.transformPreconditioner_onjcui$(filteredResults, config);
  };
  PreconditionerPlotTransform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PreconditionerPlotTransform',
    interfaces: [MatrixPlotTransform]
  };
  var compareBy$lambda_5 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function SolverConvergencePlot() {
    SolverPlotTransform.call(this);
    this.numInputsRange_563yne$_0 = new IntRange(1, 1);
    this.plottableAs_43g0a9$_0 = listOf_0(PlotType$Companion_getInstance().Line);
    this.name_2ibjfr$_0 = 'Convergence Plot';
    this.xAxisOption_0 = new CategoricalOption('xAxis', ['iteration_timestamps', 'array_index'], void 0, 'Value that gets displayed on the x axis');
    this.yAxisOption_0 = new CategoricalOption('yAxis', ['recurrent_residuals', 'true_residuals', 'implicit_residuals'], void 0, 'Value that gets displayed on the y axis');
  }
  Object.defineProperty(SolverConvergencePlot.prototype, 'numInputsRange', {
    configurable: true,
    get: function () {
      return this.numInputsRange_563yne$_0;
    }
  });
  Object.defineProperty(SolverConvergencePlot.prototype, 'plottableAs', {
    configurable: true,
    get: function () {
      return this.plottableAs_43g0a9$_0;
    }
  });
  Object.defineProperty(SolverConvergencePlot.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.name_2ibjfr$_0;
    }
  });
  SolverConvergencePlot.prototype.getMatrixPlotOptions_j6m42o$ = function (results) {
    return listOf([MatrixOptions_getInstance().matrix.realizeOption_gopuhv$(copyToArray(results)), this.xAxisOption_0, this.yAxisOption_0]);
  };
  function SolverConvergencePlot$transformSolver$lambda$lambda(it) {
    return it.x;
  }
  SolverConvergencePlot.prototype.transformSolver_fx2sdk$ = function (benchmarkResults, config) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$ = firstOrNull(benchmarkResults);
    if (tmp$ == null) {
      throw new InvalidPlotTransformException('Empty list of BenchmarkResult passed');
    }var benchmarkResult = tmp$;
    var $receiver = benchmarkResult.datapoints;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_4;
      tmp$_4 = $receiver.iterator();
      while (tmp$_4.hasNext()) {
        var element = tmp$_4.next();
        if (equals(element.name, config.getCategoricalOption_bhflj0$(MatrixOptions_getInstance().matrix))) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    tmp$_0 = firstOrNull$result;
    if (tmp$_0 == null) {
      throw new InvalidPlotConfigValueException(config.getCategoricalOption_bhflj0$(MatrixOptions_getInstance().matrix), MatrixOptions_getInstance().matrix.name);
    }var datapoint = tmp$_0;
    var seriesByName = LinkedHashMap_init();
    tmp$_1 = datapoint.solvers.iterator();
    while (tmp$_1.hasNext()) {
      var solver = tmp$_1.next();
      switch (config.getCategoricalOption_bhflj0$(this.yAxisOption_0)) {
        case 'recurrent_residuals':
          tmp$_2 = solver.recurrentResiduals;
          break;
        case 'true_residuals':
          tmp$_2 = solver.trueResiduals;
          break;
        case 'implicit_residuals':
          tmp$_2 = solver.implicitResiduals;
          break;
        default:throw new InvalidPlotConfigValueException(config.getCategoricalOption_bhflj0$(this.yAxisOption_0), this.yAxisOption_0.name);
      }
      var wantedResiduals = tmp$_2;
      switch (config.getCategoricalOption_bhflj0$(this.xAxisOption_0)) {
        case 'iteration_timestamps':
          tmp$_3 = solver.iterationTimestamps;
          break;
        case 'array_index':
          var $receiver_0 = new IntRange(0, wantedResiduals.size);
          var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
          var tmp$_5;
          tmp$_5 = $receiver_0.iterator();
          while (tmp$_5.hasNext()) {
            var item = tmp$_5.next();
            destination.add_11rb$(item);
          }

          tmp$_3 = toList(destination);
          break;
        default:throw new InvalidPlotConfigValueException(config.getCategoricalOption_bhflj0$(this.xAxisOption_0), this.xAxisOption_0.name);
      }
      var wantedXAxis = tmp$_3;
      var key = solver.name;
      var tmp$_6;
      var value = seriesByName.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        seriesByName.put_xwzc9p$(key, answer);
        tmp$_6 = answer;
      } else {
        tmp$_6 = value;
      }
      var tmp$_7 = tmp$_6;
      var $receiver_1 = zip(wantedResiduals, wantedXAxis);
      var destination_0 = ArrayList_init();
      var tmp$_8;
      tmp$_8 = $receiver_1.iterator();
      while (tmp$_8.hasNext()) {
        var element_0 = tmp$_8.next();
        if (!isNaN_0(element_0.first) & !isNaN_0(element_0.second))
          destination_0.add_11rb$(element_0);
      }
      var destination_1 = ArrayList_init_0(collectionSizeOrDefault(destination_0, 10));
      var tmp$_9;
      tmp$_9 = destination_0.iterator();
      while (tmp$_9.hasNext()) {
        var item_0 = tmp$_9.next();
        destination_1.add_11rb$(new PlotPoint(item_0.second, item_0.first));
      }
      addAll(tmp$_7, destination_1);
    }
    var destination_2 = ArrayList_init_0(seriesByName.size);
    var tmp$_10;
    tmp$_10 = seriesByName.entries.iterator();
    while (tmp$_10.hasNext()) {
      var item_1 = tmp$_10.next();
      var tmp$_11 = destination_2.add_11rb$;
      var key_0 = item_1.key;
      var value_0 = item_1.value;
      tmp$_11.call(destination_2, new PointDataset(key_0, copyToArray(sortedWith(value_0, new Comparator(compareBy$lambda_5(SolverConvergencePlot$transformSolver$lambda$lambda))))));
    }
    return new PlottableData(copyToArray(destination_2));
  };
  SolverConvergencePlot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SolverConvergencePlot',
    interfaces: [SolverPlotTransform]
  };
  function SolverPlotTransform() {
    MatrixPlotTransform.call(this);
  }
  SolverPlotTransform.prototype.transform_vjoouo$ = function (results, config) {
    var tmp$;
    tmp$ = results.iterator();
    while (tmp$.hasNext()) {
      var result = tmp$.next();
      if (!Kotlin.isType(result, SolverBenchmarkResult))
        throw new InvalidPlotTransformException('Invalid benchmark type, only SolverBenchmarkResult is allowed');
    }
    this.checkNumInputs_za3lpa$(results.size);
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = results.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (Kotlin.isType(element, SolverBenchmarkResult))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var tmp$_2 = destination_0.add_11rb$;
      var tmp$_3 = item.commit;
      var tmp$_4 = item.device;
      var $receiver = filterMatrixDatapoints(item.datapoints, config);
      var destination_1 = ArrayList_init();
      var tmp$_5;
      tmp$_5 = $receiver.iterator();
      while (tmp$_5.hasNext()) {
        var element_0 = tmp$_5.next();
        if (Kotlin.isType(element_0, SolverDatapoint))
          destination_1.add_11rb$(element_0);
      }
      tmp$_2.call(destination_0, new SolverBenchmarkResult(tmp$_3, tmp$_4, destination_1));
    }
    var filteredResults = destination_0;
    return this.transformSolver_fx2sdk$(filteredResults, config);
  };
  SolverPlotTransform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SolverPlotTransform',
    interfaces: [MatrixPlotTransform]
  };
  function SolverRuntimeBreakdown() {
    SolverPlotTransform.call(this);
    this.numInputsRange_cc3fen$_0 = new IntRange(1, 1);
    this.plottableAs_60pdk6$_0 = listOf_0(PlotType$Companion_getInstance().Bar);
    this.name_k7ehok$_0 = 'Runtime Breakdown';
    this.componentsOption_0 = new CategoricalOption('components', ['apply', 'generate'], void 0, 'Which components to plot');
    this.totalTimeOption_0 = new CategoricalOption('totalTime', ['sumComponents', 'givenValue'], void 0, 'Take the total time given in the benchmark or the sum of all runtimes');
  }
  Object.defineProperty(SolverRuntimeBreakdown.prototype, 'numInputsRange', {
    configurable: true,
    get: function () {
      return this.numInputsRange_cc3fen$_0;
    }
  });
  Object.defineProperty(SolverRuntimeBreakdown.prototype, 'plottableAs', {
    configurable: true,
    get: function () {
      return this.plottableAs_60pdk6$_0;
    }
  });
  Object.defineProperty(SolverRuntimeBreakdown.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.name_k7ehok$_0;
    }
  });
  SolverRuntimeBreakdown.prototype.getMatrixPlotOptions_j6m42o$ = function (results) {
    return listOf([MatrixOptions_getInstance().matrix.realizeOption_gopuhv$(copyToArray(results)), this.componentsOption_0, this.totalTimeOption_0]);
  };
  SolverRuntimeBreakdown.prototype.transformSolver_fx2sdk$ = function (benchmarkResults, config) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var $receiver = first_0(benchmarkResults).datapoints;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_3;
      tmp$_3 = $receiver.iterator();
      while (tmp$_3.hasNext()) {
        var element = tmp$_3.next();
        if (equals(element.name, config.getCategoricalOption_bhflj0$(MatrixOptions_getInstance().matrix))) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    tmp$ = firstOrNull$result;
    if (tmp$ == null) {
      throw new InvalidPlotConfigValueException(config.getCategoricalOption_bhflj0$(MatrixOptions_getInstance().matrix), MatrixOptions_getInstance().matrix.name);
    }var datapoint = tmp$;
    var seriesByName = LinkedHashMap_init();
    var $receiver_0 = datapoint.solvers;
    var tmp$_4;
    var accumulator = emptyList();
    tmp$_4 = $receiver_0.iterator();
    while (tmp$_4.hasNext()) {
      var element_0 = tmp$_4.next();
      var acc = accumulator;
      var $receiver_1 = this.getComponentsByOption_0(element_0, config);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_5;
      tmp$_5 = $receiver_1.iterator();
      while (tmp$_5.hasNext()) {
        var item = tmp$_5.next();
        destination.add_11rb$(item.name);
      }
      accumulator = plus(acc, destination);
    }
    var allComponentNames = toList(toSet(accumulator));
    var labels = ArrayList_init();
    tmp$_0 = datapoint.solvers.iterator();
    while (tmp$_0.hasNext()) {
      var solver = tmp$_0.next();
      if (!solver.completed)
        continue;
      var element_1 = solver.name;
      labels.add_11rb$(element_1);
      var components = this.getComponentsByOption_0(solver, config);
      var totalTime = this.getTotalTimeByOption_0(solver, config);
      tmp$_1 = allComponentNames.iterator();
      while (tmp$_1.hasNext()) {
        var componentName = tmp$_1.next();
        var tmp$_6;
        var value = seriesByName.get_11rb$(componentName);
        if (value == null) {
          var answer = ArrayList_init();
          seriesByName.put_xwzc9p$(componentName, answer);
          tmp$_6 = answer;
        } else {
          tmp$_6 = value;
        }
        var tmp$_7, tmp$_8, tmp$_9;
        var tmp$_10 = tmp$_6;
        var firstOrNull$result_0;
        firstOrNull$break: do {
          var tmp$_11;
          tmp$_11 = components.iterator();
          while (tmp$_11.hasNext()) {
            var element_2 = tmp$_11.next();
            if (equals(element_2.name, componentName)) {
              firstOrNull$result_0 = element_2;
              break firstOrNull$break;
            }}
          firstOrNull$result_0 = null;
        }
         while (false);
        var element_3 = (tmp$_9 = (tmp$_8 = (tmp$_7 = firstOrNull$result_0) != null ? tmp$_7.runtime : null) != null ? tmp$_8 / totalTime : null) != null ? tmp$_9 : 0.0;
        tmp$_10.add_11rb$(element_3);
      }
    }
    tmp$_2 = copyToArray(labels);
    var destination_0 = ArrayList_init_0(seriesByName.size);
    var tmp$_12;
    tmp$_12 = seriesByName.entries.iterator();
    while (tmp$_12.hasNext()) {
      var item_0 = tmp$_12.next();
      destination_0.add_11rb$(new BarChartDataset(item_0.key, copyToArray(item_0.value)));
    }
    return new PlottableData(copyToArray(destination_0), tmp$_2);
  };
  SolverRuntimeBreakdown.prototype.getComponentsByOption_0 = function ($receiver, config) {
    switch (config.getCategoricalOption_bhflj0$(this.componentsOption_0)) {
      case 'apply':
        return $receiver.applyComponents;
      case 'generate':
        return $receiver.generateComponents;
      default:throw new InvalidPlotConfigValueException(config.getCategoricalOption_bhflj0$(this.componentsOption_0), this.componentsOption_0.name);
    }
  };
  SolverRuntimeBreakdown.prototype.getTotalTimeByOption_0 = function ($receiver, config) {
    switch (config.getCategoricalOption_bhflj0$(this.componentsOption_0)) {
      case 'apply':
        return this.getApplyTotalTimeByOption_0($receiver, config);
      case 'generate':
        return this.getGenerateTotalTimeByOption_0($receiver, config);
      default:throw new InvalidPlotConfigValueException(config.getCategoricalOption_bhflj0$(this.componentsOption_0), this.componentsOption_0.name);
    }
  };
  SolverRuntimeBreakdown.prototype.getGenerateTotalTimeByOption_0 = function ($receiver, config) {
    switch (config.getCategoricalOption_bhflj0$(this.totalTimeOption_0)) {
      case 'sumComponents':
        var tmp$;
        var sum = 0;
        tmp$ = $receiver.generateComponents.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          sum += element.runtime;
        }

        return sum;
      case 'givenValue':
        return $receiver.generateTotalTime;
      default:throw new InvalidPlotConfigValueException(config.getCategoricalOption_bhflj0$(this.totalTimeOption_0), this.totalTimeOption_0.name);
    }
  };
  SolverRuntimeBreakdown.prototype.getApplyTotalTimeByOption_0 = function ($receiver, config) {
    switch (config.getCategoricalOption_bhflj0$(this.totalTimeOption_0)) {
      case 'sumComponents':
        var tmp$;
        var sum = 0;
        tmp$ = $receiver.applyComponents.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          sum += element.runtime;
        }

        return sum;
      case 'givenValue':
        return $receiver.applyTotalTime;
      default:throw new InvalidPlotConfigValueException(config.getCategoricalOption_bhflj0$(this.totalTimeOption_0), this.totalTimeOption_0.name);
    }
  };
  SolverRuntimeBreakdown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SolverRuntimeBreakdown',
    interfaces: [SolverPlotTransform]
  };
  var compareBy$lambda_6 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function SpmvPerformanceProfile() {
    SpmvPlotTransform.call(this);
    this.numInputsRange_hidnrl$_0 = new IntRange(1, 1);
    this.plottableAs_38tb3e$_0 = listOf_0(PlotType$Companion_getInstance().Line);
    this.name_4yoyp8$_0 = 'Performance Profile';
    this.minXOption_0 = new NumericalOption('minX', 0.0, 'Minimum X value (value on the left)');
    this.maxXOption_0 = new SpmvPerformanceProfile$maxXOption$ObjectLiteral('maxX', 'Maximum X value (value on the right)');
  }
  Object.defineProperty(SpmvPerformanceProfile.prototype, 'numInputsRange', {
    configurable: true,
    get: function () {
      return this.numInputsRange_hidnrl$_0;
    }
  });
  Object.defineProperty(SpmvPerformanceProfile.prototype, 'plottableAs', {
    configurable: true,
    get: function () {
      return this.plottableAs_38tb3e$_0;
    }
  });
  Object.defineProperty(SpmvPerformanceProfile.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.name_4yoyp8$_0;
    }
  });
  SpmvPerformanceProfile.prototype.getMatrixPlotOptions_j6m42o$ = function (results) {
    return listOf([this.minXOption_0, this.maxXOption_0.realizeOption_gopuhv$(copyToArray(results))]);
  };
  function SpmvPerformanceProfile$transformSpmv$lambda$lambda(it) {
    return it.x;
  }
  SpmvPerformanceProfile.prototype.transformSpmv_e28j91$ = function (benchmarkResults, config) {
    var tmp$, tmp$_0, tmp$_1;
    var seriesByName = LinkedHashMap_init();
    var formatSlowdowns = LinkedHashMap_init();
    var dataPoints = benchmarkResults.get_za3lpa$(0).datapoints;
    tmp$ = dataPoints.iterator();
    while (tmp$.hasNext()) {
      var dataPoint = tmp$.next();
      var $receiver = dataPoint.formats;
      var destination = ArrayList_init();
      var tmp$_2;
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        if (element.completed)
          destination.add_11rb$(element);
      }
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
      var tmp$_3;
      tmp$_3 = destination.iterator();
      while (tmp$_3.hasNext()) {
        var item = tmp$_3.next();
        destination_0.add_11rb$(item.time);
      }
      tmp$_0 = minOrNull_0(destination_0);
      if (tmp$_0 == null) {
        continue;
      }var minTime = tmp$_0;
      var $receiver_0 = dataPoint.formats;
      var destination_1 = ArrayList_init();
      var tmp$_4;
      tmp$_4 = $receiver_0.iterator();
      while (tmp$_4.hasNext()) {
        var element_0 = tmp$_4.next();
        if (!isNaN_0(element_0.time) & element_0.completed)
          destination_1.add_11rb$(element_0);
      }
      var tmp$_5;
      tmp$_5 = destination_1.iterator();
      while (tmp$_5.hasNext()) {
        var element_1 = tmp$_5.next();
        var key = element_1.name;
        var tmp$_6;
        var value = formatSlowdowns.get_11rb$(key);
        if (value == null) {
          var answer = ArrayList_init();
          formatSlowdowns.put_xwzc9p$(key, answer);
          tmp$_6 = answer;
        } else {
          tmp$_6 = value;
        }
        var $receiver_1 = tmp$_6;
        var element_2 = element_1.time / minTime;
        $receiver_1.add_11rb$(element_2);
      }
    }
    var tmp$_7;
    tmp$_7 = formatSlowdowns.entries.iterator();
    while (tmp$_7.hasNext()) {
      var element_3 = tmp$_7.next();
      var value_0 = element_3.value;
      sort(value_0);
    }
    var minX = config.getNumericalOption_bhflj0$(this.minXOption_0);
    var maxX = config.getNumericalOption_bhflj0$(this.maxXOption_0);
    tmp$_1 = formatSlowdowns.entries.iterator();
    while (tmp$_1.hasNext()) {
      var tmp$_8 = tmp$_1.next();
      var key_0 = tmp$_8.key;
      var value_1 = tmp$_8.value;
      var tmp$_9;
      var value_2 = seriesByName.get_11rb$(key_0);
      if (value_2 == null) {
        var answer_0 = ArrayList_init();
        seriesByName.put_xwzc9p$(key_0, answer_0);
        tmp$_9 = answer_0;
      } else {
        tmp$_9 = value_2;
      }
      var tmp$_10 = tmp$_9;
      var destination_2 = ArrayList_init();
      var tmp$_11;
      tmp$_11 = value_1.iterator();
      while (tmp$_11.hasNext()) {
        var element_4 = tmp$_11.next();
        if (element_4 <= maxX & element_4 >= minX)
          destination_2.add_11rb$(element_4);
      }
      var destination_3 = ArrayList_init_0(collectionSizeOrDefault(destination_2, 10));
      var tmp$_12, tmp$_0_0;
      var index = 0;
      tmp$_12 = destination_2.iterator();
      while (tmp$_12.hasNext()) {
        var item_0 = tmp$_12.next();
        destination_3.add_11rb$(new PlotPoint(item_0, checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0))));
      }
      var destination_4 = ArrayList_init();
      var tmp$_13;
      tmp$_13 = destination_3.iterator();
      while (tmp$_13.hasNext()) {
        var element_5 = tmp$_13.next();
        if (element_5.x > 1)
          destination_4.add_11rb$(element_5);
      }
      addAll(tmp$_10, destination_4);
    }
    var destination_5 = ArrayList_init_0(seriesByName.size);
    var tmp$_14;
    tmp$_14 = seriesByName.entries.iterator();
    while (tmp$_14.hasNext()) {
      var item_1 = tmp$_14.next();
      var tmp$_15 = destination_5.add_11rb$;
      var key_1 = item_1.key;
      var value_3 = item_1.value;
      tmp$_15.call(destination_5, new PointDataset(key_1, copyToArray(sortedWith(value_3, new Comparator(compareBy$lambda_6(SpmvPerformanceProfile$transformSpmv$lambda$lambda))))));
    }
    return new PlottableData(copyToArray(destination_5));
  };
  function SpmvPerformanceProfile$maxXOption$ObjectLiteral(name, description) {
    DynamicNumericalOption.call(this, name, description);
  }
  SpmvPerformanceProfile$maxXOption$ObjectLiteral.prototype.getDefault_gopuhv$ = function (results) {
    var tmp$, tmp$_0;
    var maxOfOrNull$result;
    maxOfOrNull$break: do {
      var tmp$_1;
      if (results.length === 0) {
        maxOfOrNull$result = null;
        break maxOfOrNull$break;
      }var maxValue = results[0].datapoints.size;
      tmp$_1 = get_lastIndex(results);
      for (var i = 1; i <= tmp$_1; i++) {
        var v = results[i].datapoints.size;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxValue = v;
        }}
      maxOfOrNull$result = maxValue;
    }
     while (false);
    return (tmp$_0 = (tmp$ = maxOfOrNull$result) != null ? tmp$ : null) != null ? tmp$_0 : 0.0;
  };
  SpmvPerformanceProfile$maxXOption$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DynamicNumericalOption]
  };
  SpmvPerformanceProfile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpmvPerformanceProfile',
    interfaces: [SpmvPlotTransform]
  };
  function SpmvPlotTransform() {
    MatrixPlotTransform.call(this);
  }
  SpmvPlotTransform.prototype.transform_vjoouo$ = function (results, config) {
    var tmp$;
    tmp$ = results.iterator();
    while (tmp$.hasNext()) {
      var result = tmp$.next();
      if (!Kotlin.isType(result, SpmvBenchmarkResult))
        throw new InvalidPlotTransformException('Invalid benchmark type, only SpmvBenchmarkResult is allowed');
    }
    this.checkNumInputs_za3lpa$(results.size);
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = results.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (Kotlin.isType(element, SpmvBenchmarkResult))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var tmp$_2 = destination_0.add_11rb$;
      var tmp$_3 = item.commit;
      var tmp$_4 = item.device;
      var $receiver = filterMatrixDatapoints(item.datapoints, config);
      var destination_1 = ArrayList_init();
      var tmp$_5;
      tmp$_5 = $receiver.iterator();
      while (tmp$_5.hasNext()) {
        var element_0 = tmp$_5.next();
        if (Kotlin.isType(element_0, SpmvDatapoint))
          destination_1.add_11rb$(element_0);
      }
      tmp$_2.call(destination_0, new SpmvBenchmarkResult(tmp$_3, tmp$_4, destination_1));
    }
    var filteredResults = destination_0;
    return this.transformSpmv_e28j91$(filteredResults, config);
  };
  SpmvPlotTransform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpmvPlotTransform',
    interfaces: [MatrixPlotTransform]
  };
  var compareBy$lambda_7 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function SpmvSingleScatterPlot() {
    SpmvPlotTransform.call(this);
    this.numInputsRange_jbtfyz$_0 = new IntRange(1, 1);
    this.plottableAs_nl05l8$_0 = listOf_0(PlotType$Companion_getInstance().Scatter);
    this.name_2y0cpq$_0 = 'Scatter Plot';
    this.yAxisOption_0 = new CategoricalOption('yAxis', ['bandwidth', 'time'], void 0, 'Value that gets displayed on the y axis');
  }
  Object.defineProperty(SpmvSingleScatterPlot.prototype, 'numInputsRange', {
    configurable: true,
    get: function () {
      return this.numInputsRange_jbtfyz$_0;
    }
  });
  Object.defineProperty(SpmvSingleScatterPlot.prototype, 'plottableAs', {
    configurable: true,
    get: function () {
      return this.plottableAs_nl05l8$_0;
    }
  });
  Object.defineProperty(SpmvSingleScatterPlot.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.name_2y0cpq$_0;
    }
  });
  SpmvSingleScatterPlot.prototype.getMatrixPlotOptions_j6m42o$ = function (results) {
    return listOf([MatrixOptions_getInstance().xAxis, this.yAxisOption_0]);
  };
  function SpmvSingleScatterPlot$transformSpmv$lambda$lambda(it) {
    return it.x;
  }
  SpmvSingleScatterPlot.prototype.transformSpmv_e28j91$ = function (benchmarkResults, config) {
    var tmp$, tmp$_0;
    var benchmarkResult = first_0(benchmarkResults);
    var seriesByName = LinkedHashMap_init();
    tmp$ = benchmarkResult.datapoints.iterator();
    while (tmp$.hasNext()) {
      var datapoint = tmp$.next();
      tmp$_0 = datapoint.formats.iterator();
      while (tmp$_0.hasNext()) {
        var format = tmp$_0.next();
        if (!format.completed)
          continue;
        var tmp$_1;
        var key = format.name;
        var tmp$_2;
        var value = seriesByName.get_11rb$(key);
        if (value == null) {
          var answer = ArrayList_init();
          seriesByName.put_xwzc9p$(key, answer);
          tmp$_2 = answer;
        } else {
          tmp$_2 = value;
        }
        tmp$_1 = tmp$_2;
        var tmp$_3, tmp$_4;
        tmp$_3 = this.getXAxisByConfig_whzn04$(datapoint, config);
        switch (config.getCategoricalOption_bhflj0$(this.yAxisOption_0)) {
          case 'bandwidth':
            tmp$_4 = format.storage.add(datapoint.rows).add(datapoint.columns).toNumber() / format.time;
            break;
          case 'time':
            tmp$_4 = format.time;
            break;
          default:throw new InvalidPlotConfigValueException(config.getCategoricalOption_bhflj0$(this.yAxisOption_0), 'yAxis');
        }
        var element = new PlotPoint(tmp$_3, tmp$_4);
        tmp$_1.add_11rb$(element);
      }
    }
    var destination = ArrayList_init_0(seriesByName.size);
    var tmp$_5;
    tmp$_5 = seriesByName.entries.iterator();
    while (tmp$_5.hasNext()) {
      var item = tmp$_5.next();
      var tmp$_6 = destination.add_11rb$;
      var key_0 = item.key;
      var value_0 = item.value;
      tmp$_6.call(destination, new PointDataset(key_0, copyToArray(sortedWith(value_0, new Comparator(compareBy$lambda_7(SpmvSingleScatterPlot$transformSpmv$lambda$lambda))))));
    }
    return new PlottableData(copyToArray(destination));
  };
  SpmvSingleScatterPlot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpmvSingleScatterPlot',
    interfaces: [SpmvPlotTransform]
  };
  var compareBy$lambda_8 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function SpmvSpeedupPlot() {
    SpmvPlotTransform.call(this);
    this.numInputsRange_2hu1ll$_0 = new IntRange(2, 2);
    this.plottableAs_xykd4w$_0 = listOf([PlotType$Companion_getInstance().Line, PlotType$Companion_getInstance().Scatter]);
    this.name_en0cru$_0 = 'Speedup Plot';
  }
  Object.defineProperty(SpmvSpeedupPlot.prototype, 'numInputsRange', {
    configurable: true,
    get: function () {
      return this.numInputsRange_2hu1ll$_0;
    }
  });
  Object.defineProperty(SpmvSpeedupPlot.prototype, 'plottableAs', {
    configurable: true,
    get: function () {
      return this.plottableAs_xykd4w$_0;
    }
  });
  Object.defineProperty(SpmvSpeedupPlot.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.name_en0cru$_0;
    }
  });
  SpmvSpeedupPlot.prototype.getMatrixPlotOptions_j6m42o$ = function (results) {
    return listOf([MatrixOptions_getInstance().xAxis, PlotOptions_getInstance().comparison.realizeOption_gopuhv$(copyToArray(results))]);
  };
  function SpmvSpeedupPlot$transformSpmv$lambda$lambda(it) {
    return it.x;
  }
  SpmvSpeedupPlot.prototype.transformSpmv_e28j91$ = function (benchmarkResults, config) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var seriesByName = LinkedHashMap_init();
    var datapointsA;
    var datapointsB;
    if (equals(config.getCategoricalOption_bhflj0$(PlotOptions_getInstance().comparison), first_0(benchmarkResults).identifier)) {
      datapointsA = benchmarkResults.get_za3lpa$(0).datapoints;
      datapointsB = benchmarkResults.get_za3lpa$(1).datapoints;
    } else {
      datapointsA = benchmarkResults.get_za3lpa$(1).datapoints;
      datapointsB = benchmarkResults.get_za3lpa$(0).datapoints;
    }
    tmp$ = datapointsA.iterator();
    while (tmp$.hasNext()) {
      var datapointA = tmp$.next();
      var $receiver = datapointsB;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_3;
        tmp$_3 = $receiver.iterator();
        while (tmp$_3.hasNext()) {
          var element = tmp$_3.next();
          if (equals(element.nonzeros, datapointA.nonzeros) & equals(element.rows, datapointA.rows) & equals(element.columns, datapointA.columns)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }}
        firstOrNull$result = null;
      }
       while (false);
      tmp$_0 = firstOrNull$result;
      if (tmp$_0 == null) {
        continue;
      }var datapointB = tmp$_0;
      tmp$_1 = datapointA.formats.iterator();
      while (tmp$_1.hasNext()) {
        var formatA = tmp$_1.next();
        var $receiver_0 = datapointB.formats;
        var firstOrNull$result_0;
        firstOrNull$break: do {
          var tmp$_4;
          tmp$_4 = $receiver_0.iterator();
          while (tmp$_4.hasNext()) {
            var element_0 = tmp$_4.next();
            if (equals(element_0.name, formatA.name)) {
              firstOrNull$result_0 = element_0;
              break firstOrNull$break;
            }}
          firstOrNull$result_0 = null;
        }
         while (false);
        tmp$_2 = firstOrNull$result_0;
        if (tmp$_2 == null) {
          continue;
        }var formatB = tmp$_2;
        if (!formatA.completed | !formatB.completed)
          continue;
        var key = formatA.name;
        var tmp$_5;
        var value = seriesByName.get_11rb$(key);
        if (value == null) {
          var answer = ArrayList_init();
          seriesByName.put_xwzc9p$(key, answer);
          tmp$_5 = answer;
        } else {
          tmp$_5 = value;
        }
        var $receiver_1 = tmp$_5;
        var element_1 = new PlotPoint(this.getXAxisByConfig_whzn04$(datapointA, config), formatA.time / formatB.time);
        $receiver_1.add_11rb$(element_1);
      }
    }
    var destination = ArrayList_init_0(seriesByName.size);
    var tmp$_6;
    tmp$_6 = seriesByName.entries.iterator();
    while (tmp$_6.hasNext()) {
      var item = tmp$_6.next();
      var tmp$_7 = destination.add_11rb$;
      var key_0 = item.key;
      var value_0 = item.value;
      tmp$_7.call(destination, new PointDataset(key_0, copyToArray(sortedWith(value_0, new Comparator(compareBy$lambda_8(SpmvSpeedupPlot$transformSpmv$lambda$lambda))))));
    }
    return new PlottableData(copyToArray(destination));
  };
  SpmvSpeedupPlot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpmvSpeedupPlot',
    interfaces: [SpmvPlotTransform]
  };
  function filterMatrixDatapoints(datapoints, config) {
    var minRows = config.getNumericalOption_bhflj0$(MatrixOptions_getInstance().minRows);
    var maxRows = config.getNumericalOption_bhflj0$(MatrixOptions_getInstance().maxRows);
    var minColumns = config.getNumericalOption_bhflj0$(MatrixOptions_getInstance().minColumns);
    var maxColumns = config.getNumericalOption_bhflj0$(MatrixOptions_getInstance().maxColumns);
    var minNonzeros = config.getNumericalOption_bhflj0$(MatrixOptions_getInstance().minNonzeros);
    var maxNonzeros = config.getNumericalOption_bhflj0$(MatrixOptions_getInstance().maxNonzeros);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = datapoints.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.rows.toNumber() >= minRows & element.rows.toNumber() <= maxRows)
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (element_0.columns.toNumber() >= minColumns & element_0.columns.toNumber() <= maxColumns)
        destination_0.add_11rb$(element_0);
    }
    var destination_1 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = destination_0.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      if (element_1.nonzeros.toNumber() >= minNonzeros & element_1.nonzeros.toNumber() <= maxNonzeros)
        destination_1.add_11rb$(element_1);
    }
    return destination_1;
  }
  function filterBlasDatapoints(datapoints, config) {
    var maxN = config.getNumericalOption_bhflj0$(BlasOptions_getInstance().maxN);
    var minN = config.getNumericalOption_bhflj0$(BlasOptions_getInstance().minN);
    var maxR = config.getNumericalOption_bhflj0$(BlasOptions_getInstance().maxR);
    var minR = config.getNumericalOption_bhflj0$(BlasOptions_getInstance().minR);
    var maxK = config.getNumericalOption_bhflj0$(BlasOptions_getInstance().maxK);
    var minK = config.getNumericalOption_bhflj0$(BlasOptions_getInstance().minK);
    var maxM = config.getNumericalOption_bhflj0$(BlasOptions_getInstance().maxM);
    var minM = config.getNumericalOption_bhflj0$(BlasOptions_getInstance().minM);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = datapoints.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.n.toNumber() >= minN & element.n.toNumber() <= maxN)
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (element_0.r.toNumber() >= minR & element_0.r.toNumber() <= maxR)
        destination_0.add_11rb$(element_0);
    }
    var destination_1 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = destination_0.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      if (element_1.m.toNumber() >= minM & element_1.m.toNumber() <= maxM)
        destination_1.add_11rb$(element_1);
    }
    var destination_2 = ArrayList_init();
    var tmp$_2;
    tmp$_2 = destination_1.iterator();
    while (tmp$_2.hasNext()) {
      var element_2 = tmp$_2.next();
      if (element_2.k.toNumber() >= minK & element_2.k.toNumber() <= maxK)
        destination_2.add_11rb$(element_2);
    }
    return destination_2;
  }
  function ParkviewApiHandler(repHandler, databaseHandler) {
    this.repHandler_0 = repHandler;
    this.databaseHandler_0 = databaseHandler;
    this.performanceCalculator_0 = new AveragePerformanceCalculator(this.databaseHandler_0);
  }
  ParkviewApiHandler.prototype.getHistory = function (branch, page, benchmark) {
    return copyToArray(this.repHandler_0.fetchGitHistoryByBranch_4ula2a$(branch, page, BenchmarkType$valueOf(benchmark)));
  };
  ParkviewApiHandler.prototype.getPlot = function (benchmark, shas, devices, plotType, plotParams) {
    var tmp$;
    var benchmarkType = BenchmarkType$valueOf(benchmark);
    var $receiver = zip_0(shas, devices);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination.add_11rb$;
      var sha = item.component1()
      , device = item.component2();
      tmp$_1.call(destination, this.databaseHandler_0.fetchBenchmarkResult_75dvv7$(new Commit(sha, '', new Date(), ''), new Device(device), benchmarkType));
    }
    var results = destination;
    tmp$ = AvailablePlots_getInstance().getPlotByName_7uiexs$(plotType, benchmarkType);
    if (tmp$ == null) {
      throw IllegalArgumentException_init('Invalid plot type');
    }var plot = tmp$;
    var config = new PlotConfiguration(plot.getPlotDescription_j6m42o$(results), plotParams);
    return plot.transform_vjoouo$(results, config);
  };
  ParkviewApiHandler.prototype.getAvailableBranches = function () {
    return copyToArray(this.repHandler_0.getAvailableBranches());
  };
  ParkviewApiHandler.prototype.getAvailableBenchmarks = function () {
    var $receiver = BenchmarkType$values();
    var destination = ArrayList_init_0($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(item.toString());
    }
    return copyToArray(destination);
  };
  ParkviewApiHandler.prototype.getAvailablePlots = function (benchmark, shas, devices) {
    var tmp$;
    var shasAndDevices = ArrayList_init();
    tmp$ = shas.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++)
      shasAndDevices.add_11rb$(new Pair(shas[i], devices[i]));
    console.log(shas);
    console.log(shas.length);
    console.log(this.databaseHandler_0.fetchBenchmarkResult_75dvv7$(new Commit(shas[0]), new Device(devices[0]), BenchmarkType$valueOf(benchmark)));
    var tmp$_0 = AvailablePlots_getInstance();
    var tmp$_1 = BenchmarkType$valueOf(benchmark);
    var destination = ArrayList_init_0(collectionSizeOrDefault(shasAndDevices, 10));
    var tmp$_2;
    tmp$_2 = shasAndDevices.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      var tmp$_3 = destination.add_11rb$;
      var sha = item.component1()
      , device = item.component2();
      tmp$_3.call(destination, this.databaseHandler_0.fetchBenchmarkResult_75dvv7$(new Commit(sha), new Device(device), BenchmarkType$valueOf(benchmark)));
    }
    return copyToArray(tmp$_0.getPlotList_z4n2o2$(tmp$_1, destination));
  };
  ParkviewApiHandler.prototype.getSummaryValue = function (benchmark, sha, device) {
    return copyToArray(toList_0(this.databaseHandler_0.fetchBenchmarkResult_75dvv7$(new Commit(sha), new Device(device), BenchmarkType$valueOf(benchmark)).summaryValues));
  };
  ParkviewApiHandler.prototype.getAveragePerformance = function (branch, benchmark, device) {
    var commits = this.repHandler_0.fetchGitHistoryByBranch_4ula2a$(branch, 1, BenchmarkType$valueOf(benchmark));
    return this.performanceCalculator_0.getAveragePerformanceData_uzpdgi$(commits, BenchmarkType$valueOf(benchmark), new Device(device));
  };
  ParkviewApiHandler.prototype.getNumberOfPages = function (branch) {
    return this.repHandler_0.getNumberOfPages_61zpoe$(branch);
  };
  ParkviewApiHandler.prototype.getAvailableDevices = function (branch, benchmark) {
    var $receiver = this.repHandler_0.fetchGitHistoryByBranch_4ula2a$(branch, 1, benchmark);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.availableDevices);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$(toList_1(item_0));
    }
    return copyToArray(toSet(flatten_0(destination_0)));
  };
  ParkviewApiHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParkviewApiHandler',
    interfaces: [RestHandler]
  };
  function RestHandler() {
  }
  RestHandler.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RestHandler',
    interfaces: []
  };
  var DUMMY_BRANCH;
  var DUMMY_DEVICE;
  var DUMMY_COMMIT;
  var SPMV_DUMMY_RESULT;
  function DummyRepositoryHandler() {
    DUMMY_COMMIT.addDevice_2l8sov$(DUMMY_DEVICE);
  }
  DummyRepositoryHandler.prototype.fetchGitHistoryByBranch_4ula2a$ = function (branch, page, benchmarkType) {
    if (equals(branch, DUMMY_BRANCH)) {
      return listOf_0(DUMMY_COMMIT);
    } else {
      return emptyList();
    }
  };
  DummyRepositoryHandler.prototype.fetchGitHistoryBySha_4ula2a$ = function (rev, page, benchmarkType) {
    if (equals(rev, DUMMY_COMMIT.sha)) {
      return listOf_0(DUMMY_COMMIT);
    } else {
      return emptyList();
    }
  };
  DummyRepositoryHandler.prototype.getAvailableBranches = function () {
    return listOf_0(DUMMY_BRANCH);
  };
  DummyRepositoryHandler.prototype.getNumberOfPages_61zpoe$ = function (branch) {
    return 1;
  };
  DummyRepositoryHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyRepositoryHandler',
    interfaces: [RepositoryHandler]
  };
  function DummyDatabaseHandler() {
    DUMMY_COMMIT.addDevice_2l8sov$(DUMMY_DEVICE);
  }
  DummyDatabaseHandler.prototype.insertBenchmarkResults_j6m42o$ = function (results) {
    return;
  };
  DummyDatabaseHandler.prototype.fetchBenchmarkResult_75dvv7$ = function (commit, device, benchmark) {
    if (this.hasDataAvailable_75dvv7$(commit, device, benchmark)) {
      return SPMV_DUMMY_RESULT;
    } else {
      throw new MissingBenchmarkResultException(commit, device, benchmark);
    }
  };
  DummyDatabaseHandler.prototype.hasDataAvailable_75dvv7$ = function (commit, device, benchmark) {
    return (commit != null ? commit.equals(DUMMY_COMMIT) : null) && (device != null ? device.equals(DUMMY_DEVICE) : null) && benchmark === BenchmarkType$Spmv_getInstance();
  };
  DummyDatabaseHandler.prototype.getAvailableDevicesForCommit_rp894y$ = function (commit, benchmark) {
    if ((commit != null ? commit.equals(DUMMY_COMMIT) : null) && benchmark === BenchmarkType$Spmv_getInstance()) {
      return listOf_0(DUMMY_DEVICE);
    } else {
      return emptyList();
    }
  };
  DummyDatabaseHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyDatabaseHandler',
    interfaces: [DatabaseHandler]
  };
  function PerformanceTracker(databaseHandler, repositoryHandler, pageLimit, webhooks) {
    if (pageLimit === void 0)
      pageLimit = 5;
    if (webhooks === void 0) {
      webhooks = ArrayList_init();
    }this.databaseHandler_0 = databaseHandler;
    this.repositoryHandler_0 = repositoryHandler;
    this.pageLimit_0 = pageLimit;
    this.webhooks_0 = webhooks;
  }
  PerformanceTracker.prototype.addWebhook_8bnjw3$ = function (webhook) {
    this.webhooks_0.add_11rb$(webhook);
  };
  PerformanceTracker.prototype.notifyHooks_j6m42o$ = function (results) {
    var tmp$, tmp$_0;
    tmp$ = results.iterator();
    while (tmp$.hasNext()) {
      var result = tmp$.next();
      var new_0 = this.databaseHandler_0.fetchBenchmarkResult_75dvv7$(result.commit, result.device, result.benchmark);
      tmp$_0 = this.findPreviousResult_0(result);
      if (tmp$_0 == null) {
        continue;
      }var prev = tmp$_0;
      var tmp$_1;
      tmp$_1 = this.webhooks_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        element.addResult_ianl3e$(new_0, prev);
      }
    }
    var tmp$_2;
    tmp$_2 = this.webhooks_0.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      element_0.notifyHook();
    }
  };
  PerformanceTracker.prototype.findPreviousResult_0 = function (result) {
    var tmp$;
    var page = 1;
    var commits = this.repositoryHandler_0.fetchGitHistoryBySha_4ula2a$(result.commit.sha, page, result.benchmark);
    while (page <= this.pageLimit_0 & !commits.isEmpty()) {
      tmp$ = commits.iterator();
      while (tmp$.hasNext()) {
        var commit = tmp$.next();
        if (equals(commit.sha, result.commit.sha))
          continue;
        if (this.databaseHandler_0.hasDataAvailable_75dvv7$(commit, result.device, result.benchmark)) {
          return this.databaseHandler_0.fetchBenchmarkResult_75dvv7$(commit, result.device, result.benchmark);
        }}
      page = page + 1 | 0;
      commits = this.repositoryHandler_0.fetchGitHistoryBySha_4ula2a$(result.commit.sha, page, result.benchmark);
    }
    return null;
  };
  PerformanceTracker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PerformanceTracker',
    interfaces: []
  };
  function Webhook() {
  }
  Webhook.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Webhook',
    interfaces: []
  };
  var package$com = _.com || (_.com = {});
  var package$parkview = package$com.parkview || (package$com.parkview = {});
  var package$parkview_0 = package$parkview.parkview || (package$parkview.parkview = {});
  package$parkview_0.AppConfig = AppConfig;
  package$parkview_0.GitApiConfig = GitApiConfig;
  package$parkview_0.DatabaseConfig = DatabaseConfig;
  package$parkview_0.DataSourceConfig = DataSourceConfig;
  package$parkview_0.PerformanceTrackerConfig = PerformanceTrackerConfig;
  var package$benchmark = package$parkview_0.benchmark || (package$parkview_0.benchmark = {});
  package$benchmark.BenchmarkJsonParser = BenchmarkJsonParser;
  package$benchmark.Operation = Operation;
  package$benchmark.BlasDatapoint = BlasDatapoint;
  package$benchmark.BlasBenchmarkResult = BlasBenchmarkResult;
  package$benchmark.Component = Component;
  package$benchmark.Conversion = Conversion;
  package$benchmark.ConversionDatapoint = ConversionDatapoint;
  package$benchmark.ConversionBenchmarkResult = ConversionBenchmarkResult;
  package$benchmark.MatrixDatapoint = MatrixDatapoint;
  package$benchmark.MatrixBenchmarkResult = MatrixBenchmarkResult;
  package$benchmark.PreconditionerDatapoint = PreconditionerDatapoint;
  package$benchmark.Preconditioner = Preconditioner;
  package$benchmark.PreconditionerBenchmarkResult = PreconditionerBenchmarkResult;
  package$benchmark.Solver = Solver;
  package$benchmark.SolverDatapoint = SolverDatapoint;
  package$benchmark.SolverBenchmarkResult = SolverBenchmarkResult;
  package$benchmark.Format = Format;
  package$benchmark.SpmvDatapoint = SpmvDatapoint;
  package$benchmark.SpmvBenchmarkResult = SpmvBenchmarkResult;
  var package$database = package$parkview_0.database || (package$parkview_0.database = {});
  package$database.AnnotatingRepositoryHandler = AnnotatingRepositoryHandler;
  package$database.CachingDatabaseHandler = CachingDatabaseHandler;
  package$database.DatabaseHandler = DatabaseHandler;
  package$database.MissingBenchmarkResultException = MissingBenchmarkResultException;
  var package$git = package$parkview_0.git || (package$parkview_0.git = {});
  package$git.Datapoint = Datapoint;
  package$git.BenchmarkResult = BenchmarkResult;
  Object.defineProperty(BenchmarkType, 'Spmv', {
    get: BenchmarkType$Spmv_getInstance
  });
  Object.defineProperty(BenchmarkType, 'Solver', {
    get: BenchmarkType$Solver_getInstance
  });
  Object.defineProperty(BenchmarkType, 'Preconditioner', {
    get: BenchmarkType$Preconditioner_getInstance
  });
  Object.defineProperty(BenchmarkType, 'Conversion', {
    get: BenchmarkType$Conversion_getInstance
  });
  Object.defineProperty(BenchmarkType, 'Blas', {
    get: BenchmarkType$Blas_getInstance
  });
  package$git.BenchmarkType = BenchmarkType;
  package$git.CachingRepositoryHandler = CachingRepositoryHandler;
  package$git.Commit = Commit;
  package$git.Device = Device;
  package$git.RepositoryException = RepositoryException;
  package$git.RepositoryHandler = RepositoryHandler;
  var package$processing = package$parkview_0.processing || (package$parkview_0.processing = {});
  Object.defineProperty(package$processing, 'AvailablePlots', {
    get: AvailablePlots_getInstance
  });
  package$processing.AveragePerformanceCalculator = AveragePerformanceCalculator;
  package$processing.PlotDescription = PlotDescription;
  package$processing.PlotOption = PlotOption;
  package$processing.DynamicOption = DynamicOption;
  package$processing.DynamicCategoricalOption = DynamicCategoricalOption;
  package$processing.DynamicNumericalOption = DynamicNumericalOption;
  package$processing.CategoricalOption = CategoricalOption;
  package$processing.NumericalOption = NumericalOption;
  Object.defineProperty(PlotType, 'Companion', {
    get: PlotType$Companion_getInstance
  });
  package$processing.PlotType = PlotType;
  var package$transforms = package$processing.transforms || (package$processing.transforms = {});
  package$transforms.InvalidPlotTransformException = InvalidPlotTransformException;
  package$transforms.InvalidPlotConfigValueException = InvalidPlotConfigValueException;
  package$transforms.InvalidPlotConfigNameException = InvalidPlotConfigNameException;
  package$transforms.PlotConfiguration = PlotConfiguration;
  Object.defineProperty(package$transforms, 'PlotOptions', {
    get: PlotOptions_getInstance
  });
  package$transforms.PlotTransform = PlotTransform;
  package$transforms.Dataset = Dataset;
  package$transforms.BarChartDataset = BarChartDataset;
  package$transforms.PointDataset = PointDataset;
  package$transforms.PlotPoint = PlotPoint;
  package$transforms.PlottableData = PlottableData;
  var package$blas = package$transforms.blas || (package$transforms.blas = {});
  Object.defineProperty(package$blas, 'BlasOptions', {
    get: BlasOptions_getInstance
  });
  package$blas.BlasPlotTransform = BlasPlotTransform;
  package$blas.BlasSpeedupTransform = BlasSpeedupTransform;
  package$blas.SingleBlasPlot = SingleBlasPlot;
  var package$matrix = package$transforms.matrix || (package$transforms.matrix = {});
  Object.defineProperty(package$matrix, 'MatrixOptions', {
    get: MatrixOptions_getInstance
  });
  package$matrix.MatrixPlotTransform = MatrixPlotTransform;
  var package$conversion = package$matrix.conversion || (package$matrix.conversion = {});
  package$conversion.ConversionPlotTransform = ConversionPlotTransform;
  package$conversion.ConversionSingleScatterPlot = ConversionSingleScatterPlot;
  package$conversion.ConversionSpeedupPlot = ConversionSpeedupPlot;
  var package$preconditioner = package$matrix.preconditioner || (package$matrix.preconditioner = {});
  package$preconditioner.PreconditionerOverview = PreconditionerOverview;
  package$preconditioner.PreconditionerPlotTransform = PreconditionerPlotTransform;
  var package$solver = package$matrix.solver || (package$matrix.solver = {});
  package$solver.SolverConvergencePlot = SolverConvergencePlot;
  package$solver.SolverPlotTransform = SolverPlotTransform;
  package$solver.SolverRuntimeBreakdown = SolverRuntimeBreakdown;
  var package$spmv = package$matrix.spmv || (package$matrix.spmv = {});
  package$spmv.SpmvPerformanceProfile = SpmvPerformanceProfile;
  package$spmv.SpmvPlotTransform = SpmvPlotTransform;
  package$spmv.SpmvSingleScatterPlot = SpmvSingleScatterPlot;
  package$spmv.SpmvSpeedupPlot = SpmvSpeedupPlot;
  package$transforms.filterMatrixDatapoints_83yel6$ = filterMatrixDatapoints;
  package$transforms.filterBlasDatapoints_6qzx79$ = filterBlasDatapoints;
  var package$rest = package$parkview_0.rest || (package$parkview_0.rest = {});
  package$rest.ParkviewApiHandler = ParkviewApiHandler;
  package$rest.RestHandler = RestHandler;
  Object.defineProperty(package$rest, 'DUMMY_BRANCH', {
    get: function () {
      return DUMMY_BRANCH;
    }
  });
  Object.defineProperty(package$rest, 'DUMMY_DEVICE', {
    get: function () {
      return DUMMY_DEVICE;
    }
  });
  Object.defineProperty(package$rest, 'DUMMY_COMMIT', {
    get: function () {
      return DUMMY_COMMIT;
    }
  });
  Object.defineProperty(package$rest, 'SPMV_DUMMY_RESULT', {
    get: function () {
      return SPMV_DUMMY_RESULT;
    }
  });
  package$rest.DummyRepositoryHandler = DummyRepositoryHandler;
  package$rest.DummyDatabaseHandler = DummyDatabaseHandler;
  var package$tracking = package$parkview_0.tracking || (package$parkview_0.tracking = {});
  package$tracking.PerformanceTracker = PerformanceTracker;
  package$tracking.Webhook = Webhook;
  Object.defineProperty(BlasBenchmarkResult.prototype, 'identifier', Object.getOwnPropertyDescriptor(BenchmarkResult.prototype, 'identifier'));
  Object.defineProperty(MatrixBenchmarkResult.prototype, 'identifier', Object.getOwnPropertyDescriptor(BenchmarkResult.prototype, 'identifier'));
  Object.defineProperty(ConversionBenchmarkResult.prototype, 'identifier', Object.getOwnPropertyDescriptor(MatrixBenchmarkResult.prototype, 'identifier'));
  Object.defineProperty(PreconditionerBenchmarkResult.prototype, 'identifier', Object.getOwnPropertyDescriptor(MatrixBenchmarkResult.prototype, 'identifier'));
  Object.defineProperty(SolverBenchmarkResult.prototype, 'identifier', Object.getOwnPropertyDescriptor(MatrixBenchmarkResult.prototype, 'identifier'));
  Object.defineProperty(SpmvBenchmarkResult.prototype, 'identifier', Object.getOwnPropertyDescriptor(MatrixBenchmarkResult.prototype, 'identifier'));
  BlasPlotTransform.prototype.getPlotDescription_j6m42o$ = PlotTransform.prototype.getPlotDescription_j6m42o$;
  BlasPlotTransform.prototype.checkNumInputs_za3lpa$ = PlotTransform.prototype.checkNumInputs_za3lpa$;
  MatrixPlotTransform.prototype.getPlotDescription_j6m42o$ = PlotTransform.prototype.getPlotDescription_j6m42o$;
  MatrixPlotTransform.prototype.checkNumInputs_za3lpa$ = PlotTransform.prototype.checkNumInputs_za3lpa$;
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
  Kotlin.defineModule('parkview', _);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=parkview.js.map
