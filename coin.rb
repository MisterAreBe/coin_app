def min_coins(cents)
    used = {}
    q_count = 0; d_count = 0; n_count = 0; p_count = 0
    coins = {:quarter => 25, :dime => 10, :nickel => 5, :penny => 1}
    until cents == 0
        if cents >= coins[:quarter]
            cents -= coins[:quarter]
            q_count += 1
        elsif cents >= coins[:dime]
            cents -= coins[:dime]
            d_count += 1
        elsif cents >= coins[:nickel]
            cents -= coins[:nickel]
            n_count += 1
        elsif cents >= coins[:penny]
            cents -= coins[:penny]
            p_count += 1
        end
        used.store(:quarter, q_count)
        used.store(:dime, d_count)
        used.store(:nickel, n_count)
        used.store(:penny, p_count)
    end
    used
end