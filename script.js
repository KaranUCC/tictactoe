turn = 0
winner = false;

function takeTurn(square)

{
    if(square.innerHTML == '<img src="blank.jpg" width="80px">' && winner == false)
    {
        console.log(square)
        if(turn % 2 == 0)
        {
            square.innerHTML = '<img src="x.jpg" width="80px">';
        }
        else
        {
            square.innerHTML = '<img src="o.jpg" width="80px">';
        }
    
        turn++
        if(turn > 4)
        {
            checkWin(square.innerHTML);
        }
    }
    
}

function checkWin(player)
{
    grid = document.getElementsByClassName('gameCell');
    for(i = 0; i < grid.length; i+=3)
    {
        if(player == grid[i].innerHTML && grid[i].innerHTML == grid[i+1].innerHTML && grid[i+1].innerHTML == grid[i+2].innerHTML)
        {
            console.log("Winner")
            document.getElementById("gameMessage").innerHTML = "Winner is " + player;
            winner = true;
        }
    }
    for(i = 0; i < 3; i++)
    {
        if(player == grid[i].innerHTML && grid[i].innerHTML == grid[i+3].innerHTML && grid[i].innerHTML == grid[i+6].innerHTML)
        {
            console.log("Winner")
            document.getElementById("gameMessage").innerHTML = "Winner is " + player;
            winner = true;
        }
    }
    for(i = 0; i < 3; i++)
    {
        if(player == grid[i].innerHTML && grid[i].innerHTML == grid[i+3].innerHTML && grid[i].innerHTML == grid[i+6].innerHTML)
        {
            console.log("Winner")
            document.getElementById("gameMessage").innerHTML = "Winner is " + player;
            winner = true;
        }
    }
    
    if(player == grid[2].innerHTML && grid[2].innerHTML == grid[4].innerHTML && grid[2].innerHTML == grid[6].innerHTML)
    {
        console.log("Winner")
        document.getElementById("gameMessage").innerHTML = "Winner is " + player;
        winner = true;
    }
    if(player == grid[0].innerHTML && grid[0].innerHTML == grid[4].innerHTML && grid[4].innerHTML == grid[8].innerHTML)
    {
        console.log("Winner")
        document.getElementById("gameMessage").innerHTML ="Winner is " + player;
        winner = true;
    }
    if(turn == 9 && winner == false)
    {
        document.getElementById("gameMessage").innerHTML = "Cat's game.";
        winner = true;
    }
}