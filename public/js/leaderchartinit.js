var leaderboard = c3.generate({
    bindto: '#leaderChart',
    data: {
            columns: [],
            type:'bar'
        },
    axis:{
        rotated:'true',
        x: { 
            type: 'category',
            tick: { 
                values: ['Friends'],
                format: 'Friends'

            }
        },
        y: { label: 'Average Gallons'}
    }
});