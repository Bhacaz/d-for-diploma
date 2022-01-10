<template>
  <section id="form-section" class="section">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Goal</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input class="input is-rounded" type="number" v-model="goalInput" />
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Cumulated</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input
              class="input is-rounded"
              type="number"
              placeholder="Rounded input"
              v-model="cumulatedInput"
            />
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Current mean</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input
              class="input is-rounded"
              type="number"
              placeholder="Rounded input"
              v-model="currentMeanInput"
            />
          </p>
        </div>
      </div>
    </div>
  </section>

  <button class="btn btn-primary hidden" :click="calculate()">Calculate</button>

  <h1 class="title">{{ calculated }}%</h1>
</template>

<script>
import { basicFormula } from "../../models/formulaService.js";
export default {
  name: "Form",
  data() {
    return {
      calculated: 0,
      goalInput: 0,
      cumulatedInput: 0,
      currentMeanInput: 0,
    };
  },
  methods: {
    calculate() {
      this.calculated = basicFormula(
        this.goalInput,
        this.cumulatedInput,
        this.currentMeanInput
      );
    },
  },
};
</script>

<style scoped>
#form-section {
}

#form-section .field {
}
</style>
