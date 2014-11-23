var leaderboard = c3.generate({
    bindto: '#leaderChart',
    data: {
            columns: [],
            x:'x',
            type:'bar'
        },
    axis:{
        rotated:'true',
        x: { 
            type: 'category',
            label: 'Friends',
            tick: { 
                 values: [''],
                 format: 'Friends'

            }
        },
        y: { label: 'Average Gallons'}
    }
});