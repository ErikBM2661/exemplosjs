const swap = (vetor, i, j) => {
    let temp = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = temp;
};

const shuffle = (vetor, numTrocas) => {
    for (let i = 0; i < numTrocas; i++) {
        let a = Math.floor(Math.random() * vetor.length);
        let b = Math.floor(Math.random() * vetor.length);
        swap(vetor, a, b);
    }
};

const bubble_sort = (vetor) => {
    let n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
    return vetor;
};

const selection_sort = (vetor) => {
    let n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j;
            }
        }
        swap(vetor, i, minIndex);
    }
    return vetor;
};

const particionamento = (vetor, inicio, fim) => {
    let pivot = vetor[fim];
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++) {
        if (vetor[j] <= pivot) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
};

const quick_sort = (vetor, inicio, fim) => {
    if (inicio < fim) {
        let pi = particionamento(vetor, inicio, fim);
        quick_sort(vetor, inicio, pi - 1);
        quick_sort(vetor, pi + 1, fim);
    }
    return vetor;
};