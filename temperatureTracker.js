class TempTracker {
  constructor() {
    // for mean
    this.mean = null;
    this.totalSum = 0;
    this.totalReadings = 0;

    // for min and max
    this.minTemp = null;
    this.maxTemp = null;

    // for mode
    this.occurrences = new Array(111).fill(0);
    this.maxOccurrences = 0;
    this.mode = null;
  }

  insert(temp) {
    // check the min and max temperatures
    if (temp > this.maxTemp || this.maxTemp === null) {
      this.maxTemp = temp;
    }

    if (temp < this.minTemp || this.minTemp === null) {
      this.minTemp = temp;
    }

    // update the mean
    this.totalReadings++;
    this.totalSum += temp;
    this.mean = this.totalSum / this.totalReadings;

    // check the mode
    this.occurrences[temp]++;
    if (this.occurrences[temp] > this.maxOccurrences) {
      this.maxOccurrences = this.occurrences[temp];
      this.mode = temp;
    }
  }

  getMean() {
    return this.mean;
  }

  getMax() {
    return this.max;
  }

  getMin() {
    return this.min;
  }

  getMode() {
    return this.currentModes[0];
  }
}
