<template>
  <h2 class="title">Exams</h2>

  <section class="section">
    <div class="field">
      <div class="field-label is-normal">
        <label class="label">Goal</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input
              class="input"
              type="number"
              v-model="goalInput"
              @input="calculate"
            />
          </p>
        </div>
      </div>
    </div>

    <div class="field-label is-normal">
      <label class="label">Score | Weighting</label>
    </div>

    <div class="exam-container" v-for="(exam, index) in exams" :key="index">
      <input
        class="input left"
        type="number"
        placeholder="Score"
        v-model="exam.score"
        @input="calculate"
      />
      <input
        class="input right"
        type="number"
        placeholder="Weighting"
        v-model="exam.weighting"
        @input="calculate"
      />
    </div>

    <button class="button is-primary" @click="addExam">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
    </button>
  </section>

  <h1 class="title">{{ calculated }}%</h1>
</template>

<script>
import { eachExamsFormula } from "../models/formulaService.js";

export default {
  name: "ExamListCalculator",
  data() {
    return {
      calculated: 0,
      goalInput: 80,
      exams: [
        {
          score: 50,
          weighting: 5,
        },
      ],
    };
  },
  methods: {
    addExam() {
      this.exams.push({ score: null, weighting: null });
    },
    calculate() {
      this.calculated = eachExamsFormula(this.goalInput, this.exams);
    },
  },
};
</script>

<style scoped>
.field-label {
  margin: auto;
  padding-bottom: 0.125em;
  width: 10em;
  text-align: center;
}

.exam-container {
  margin: auto;
  max-width: 40em;
  display: flex;
  direction: row;
  padding-bottom: 1.5em;
}

.input {
  border-radius: 0;
}

.input.left {
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}

.input.right {
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
}
</style>
