function get(element) {
    return document.getElementById(element);
}
function loadWorkout(day) {
    var workoutData = [
        {
            name: 'Chest',
            plan: 'Chest workout plan:<br>1. Bench press: 4 sets x 10 reps<br>2. Incline dumbbell press: 3 sets x 12 reps<br>3. Dips: 3 sets x 15 reps',
            videos: [
                'https://www.youtube.com/embed/rxD321l2svE?si=H9RZoeaOqkm4XBw2',
                'https://www.youtube.com/embed/8iPEnn-ltC8?si=pxRmdCA9HoH38eZx',
                'https://www.youtube.com/embed/2z8JmcrW-As?si=otbMIuAn5bA57ZsF'
            ]
        },
        {
            name: 'Back',
            plan: 'Back workout plan:<br>1. Deadlifts: 4 sets x 8 reps<br>2. Pull-ups: 3 sets x 10 reps<br>3. Barbell rows: 3 sets x 12 reps',
            videos: [
                'https://www.youtube.com/embed/p2OPUi4xGrM?si=Xpcdg-nCKzHN_oWE',
                'https://www.youtube.com/embed/eGo4IYlbE5g?si=R3MIixKcDnwM96E2',
                'https://www.youtube.com/embed/FWJR5Ve8bnQ?si=j2Er2bNlAp8fcAcu'
            ]
        },
        {
            name: 'Legs',
            plan: 'Legs workout plan:<br>1. Squats: 4 sets x 10 reps<br>2. Lunges: 3 sets x 12 reps per leg<br>3. Leg press: 3 sets x 15 reps',
            videos: [
                'https://www.youtube.com/embed/FWJR5Ve8bnQ?si=j2Er2bNlAp8fcAcu',
                'https://www.youtube.com/embed/3XDriUn0udo?si=js67keYDv3PrSxH_',
                'https://www.youtube.com/embed/VFk3RzndUEc?si=UdQSMOLIfm4MH2KS'
            ]
        },
        {
            name: 'Shoulders',
            plan: 'Shoulders workout plan:<br>1. Overhead press: 4 sets x 10 reps<br>2. Lateral raises: 3 sets x 12 reps<br>3. Front raises: 3 sets x 15 reps',
            videos: [
                'https://www.youtube.com/embed/2yjwXTZQDDI?si=TclfuY7BbUWb12kT',
                'https://www.youtube.com/embed/WJm9zA2NY8E?si=f_dD4g8ZGq5Urbip',
                'https://www.youtube.com/embed/gzDawZwDC6Y?si=tNv0JvpqT6eajsiS'
            ]
        },
        {
            name: 'Arms (Biceps and Triceps)',
            plan: 'Arms workout plan:<br>Biceps:<br>1. Barbell curls: 4 sets x 10 reps<br>2. Hammer curls: 3 sets x 12 reps<br>3. Concentration curls: 3 sets x 15 reps<br>Triceps:<br>1. Tricep dips: 4 sets x 10 reps<br>2. Skull crushers: 3 sets x 12 reps<br>3. Bicep hammer curls: 3 sets x 15 reps',
            videos: [
                'https://www.youtube.com/embed/kwG2ipFRgfo?si=ZQqSCnPWzSNT3dpv',
                'https://www.youtube.com/embed/TwD-YGVP4Bk?si=bhDRVdzpqmEAVNdY',
                'https://www.youtube.com/embed/0AUGkch3tzc?si=hfT3Tl2Uj_Iiyjja',
                'https://www.youtube.com/embed/6MwtkyNC2ZY?si=Tj1mwXlNzkC_juSX',
                'https://www.youtube.com/embed/d_KZxkY_0cM?si=nfD90uoJ-SEyxe7y',
                'https://www.youtube.com/embed/TwD-YGVP4Bk?si=bhDRVdzpqmEAVNdY'
            ]
        },
        {
            name: 'Core',
            plan: 'Core workout plan:<br>1. Planks: 4 sets x 30 seconds<br>2. Russian twists: 3 sets x 15 reps<br>3. Leg raises: 3 sets x 12 reps',
            videos: [
                'https://www.youtube.com/embed/pSHjTRCQxIw?si=6q9Qgm88_5tNKKo-',
                'https://www.youtube.com/embed/wkD8rjkodUI?si=Yc2u5ZyRNDBwvlyR',
                'https://www.youtube.com/embed/Pr1ieGZ5atk?si=I7czN3RCOXF6OHnm'
            ]
        },
        {
            name: 'Rest or Active Recovery',
            plan: 'Rest or Active Recovery:<br>1. Take a rest day or engage in light activities like walking or yoga.',
            videos: []
        }
    ];

    var headingEL = document.getElementById('workout-routine');
    var planEL = document.getElementById('workout-plan');
    var videoEL = document.getElementById('instructional-video');

    headingEL.innerHTML = '<h2>' + workoutData[day].name + '</h2>';
    planEL.innerHTML = '<h3>Workout Plan</h3>' + workoutData[day].plan;

    // Display videos for each exercise
    videoEL.innerHTML = '<h3>Instructional Videos</h3>';
    workoutData[day].videos.forEach(function(video, index) {
        videoEL.innerHTML += '<p>Exercise ' + (index + 1) + ':<br><iframe src="' + video + '" frameborder="0" allowfullscreen></iframe></p>';
    });
}