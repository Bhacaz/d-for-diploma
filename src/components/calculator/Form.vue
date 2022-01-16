<template>
  <section id="form-section" class="section">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Goal</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input
              class="input is-rounded"
              type="number"
              v-model="stats.goalInput"
              @input="calculate"
            />
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
              v-model="stats.cumulatedInput"
              @input="calculate"
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
              v-model="stats.currentMeanInput"
              @input="calculate"
            />
          </p>
        </div>
      </div>
    </div>
  </section>

  <h1 class="title">{{ calculated }}%</h1>
</template>

<script>
import { basicFormula } from "../../models/formulaService.js";
export default {
  name: "Form",
  data() {
    return {
      calculated: 0,
      stats: {
        goalInput: 60,
        cumulatedInput: null,
        currentMeanInput: null,
      },
    };
  },
  methods: {
    calculate() {
      this.calculated = basicFormula(
        this.stats.goalInput,
        this.stats.cumulatedInput,
        this.stats.currentMeanInput
      );
    },
  },
};
</script>

<style scoped>
#form-section {
  max-width: 40em;
  margin: auto;
}

#form-section .field {
}
</style>
