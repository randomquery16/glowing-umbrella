--[[ • 𝘀𝗸𝗶𝗱 is 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱, If you still insist, we will 𝗱𝗲𝘀𝘁𝗿𝗼𝘆 𝘁𝗵𝗲 𝘀𝗰𝗿𝗶𝗽𝘁 𝘆𝗼𝘂 𝗵𝗮𝘃𝗲 𝗲𝗱𝗶𝘁𝗲𝗱!

░██████╗███╗░░░███╗░█████╗░██████╗░████████╗███████╗██╗░░░░░░█████╗░░█████╗░████████╗
██╔════╝████╗░████║██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██║░░░░░██╔══██╗██╔══██╗╚══██╔══╝
╚█████╗░██╔████╔██║███████║██████╔╝░░░██║░░░█████╗░░██║░░░░░██║░░██║███████║░░░██║░░░
░╚═══██╗██║╚██╔╝██║██╔══██║██╔══██╗░░░██║░░░██╔══╝░░██║░░░░░██║░░██║██╔══██║░░░██║░░░
██████╔╝██║░╚═╝░██║██║░░██║██║░░██║░░░██║░░░██║░░░░░███████╗╚█████╔╝██║░░██║░░░██║░░░
╚═════╝░╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░░░░╚══════╝░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░

     --================================== 𝗦𝗺𝗮𝗿𝘁𝗙𝗹𝗼𝗮𝘁 ===================================================--

# • This is our best creation (𝗹𝘂𝗮𝘂𝗿𝘂𝗹𝗲𝗿𝟮𝟲/𝗙𝘆𝗮𝗻)
# • Thank you for appreciating us to 𝘀𝘂𝗽𝗽𝗼𝗿𝘁 𝘁𝗵𝗲 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗼𝗳 𝘁𝗵𝗶𝘀 𝗽𝗿𝗼𝗷𝗲𝗰𝘁.
# • In the future we will 𝗼𝗯𝗳𝘂𝘀𝗰𝗮𝘁𝗲 𝘁𝗵𝗶𝘀 𝘀𝗰𝗿𝗶𝗽𝘁, because soon we will 𝗻𝗼 𝗹𝗼𝗻𝗴𝗲𝗿 𝗯𝗲 𝗢𝗽𝗲𝗻 𝗦𝗼𝘂𝗿𝗰𝗲

# 𝗖𝗵𝗮𝘁 𝗔𝗰𝘁𝗶𝗼𝗻: (Supports all chat systems) 
• /sf hidetoggle (Hide SmartFloat toggle)
• /sf showtoggle (Show SmartFloat toggle)
# 𝗞𝗲𝘆𝗯𝗶𝗻𝗱𝘀:
• F
# • Thank you for using 𝗙𝘆𝗮𝗻𝗦𝗰𝗿𝗶𝗽𝘁𝘀! ❤️ ]]

wait(0.8)
local showTime = 5
local defaultImageID = "rbxassetid://89230521301946"

local player = game:GetService("Players").LocalPlayer
local gui = Instance.new("ScreenGui")
gui.Name = "SmartFloatIntro"
gui.ResetOnSpawn = false
gui.IgnoreGuiInset = true
gui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling

local mainFrame = Instance.new("Frame")
mainFrame.AnchorPoint = Vector2.new(0.5, 0.5)
mainFrame.Position = UDim2.new(0.5, 0, 0.5, 0)
mainFrame.Size = UDim2.new(0, 500, 0, 220)
mainFrame.BackgroundColor3 = Color3.fromRGB(20, 20, 20)
mainFrame.BackgroundTransparency = 1
mainFrame.ClipsDescendants = true

local corner = Instance.new("UICorner")
corner.CornerRadius = UDim.new(0, 15)
corner.Parent = mainFrame

local glowStroke = Instance.new("UIStroke")
glowStroke.Color = Color3.fromRGB(255, 255, 255)
glowStroke.Thickness = 4
glowStroke.Transparency = 1
glowStroke.Parent = mainFrame

local contentFrame = Instance.new("Frame")
contentFrame.Size = UDim2.new(1, 0, 1, 0)
contentFrame.BackgroundTransparency = 1
contentFrame.Parent = mainFrame

local uiListLayout = Instance.new("UIListLayout")
uiListLayout.FillDirection = Enum.FillDirection.Horizontal
uiListLayout.HorizontalAlignment = Enum.HorizontalAlignment.Center
uiListLayout.VerticalAlignment = Enum.VerticalAlignment.Center
uiListLayout.Padding = UDim.new(0, 30)
uiListLayout.Parent = contentFrame

local textFrame = Instance.new("Frame")
textFrame.Size = UDim2.new(0, 260, 0, 160)
textFrame.BackgroundTransparency = 1

local textLabel = Instance.new("TextLabel")
textLabel.Size = UDim2.new(1, 0, 1, 0)
textLabel.Text = "SmartFloat"
textLabel.Font = Enum.Font.GothamBlack
textLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
textLabel.TextTransparency = 1
textLabel.TextStrokeColor3 = Color3.fromRGB(0, 0, 0)
textLabel.TextStrokeTransparency = 1
textLabel.TextSize = 56
textLabel.BackgroundTransparency = 1
textLabel.Parent = textFrame

local imageFrame = Instance.new("Frame")
imageFrame.Size = UDim2.new(0, 160, 0, 160)
imageFrame.BackgroundTransparency = 1

local imageLabel = Instance.new("ImageLabel")
imageLabel.Size = UDim2.new(1, 0, 1, 0)
imageLabel.BackgroundTransparency = 1
imageLabel.ScaleType = Enum.ScaleType.Fit
imageLabel.Image = defaultImageID
imageLabel.ImageTransparency = 1
imageLabel.Parent = imageFrame

textFrame.Parent = contentFrame
imageFrame.Parent = contentFrame

local creditLabel = Instance.new("TextLabel")
creditLabel.AnchorPoint = Vector2.new(0, 1)
creditLabel.Position = UDim2.new(0.02, 0, 0.94, 0)
creditLabel.Text = "by luauruler26"
creditLabel.Font = Enum.Font.GothamMedium
creditLabel.TextColor3 = Color3.fromRGB(180, 180, 180)
creditLabel.TextTransparency = 1
creditLabel.TextSize = 14
creditLabel.TextXAlignment = Enum.TextXAlignment.Left
creditLabel.BackgroundTransparency = 1
creditLabel.ZIndex = 2
creditLabel.Parent = mainFrame

local versionLabel = Instance.new("TextLabel")
versionLabel.AnchorPoint = Vector2.new(1, 1)
versionLabel.Position = UDim2.new(0.98, 0, 0.94, 0)
versionLabel.Text = "v8.0"
versionLabel.Font = Enum.Font.GothamMedium
versionLabel.TextColor3 = Color3.fromRGB(150, 150, 150)
versionLabel.TextTransparency = 1
versionLabel.TextSize = 12
versionLabel.TextXAlignment = Enum.TextXAlignment.Right
versionLabel.BackgroundTransparency = 1
versionLabel.ZIndex = 2
versionLabel.Parent = mainFrame

mainFrame.Parent = gui
gui.Parent = player:WaitForChild("PlayerGui")

local ts = game:GetService("TweenService")

local function fadeIn()
    ts:Create(mainFrame, TweenInfo.new(1.5, Enum.EasingStyle.Quint), {
        BackgroundTransparency = 0.15
    }):Play()
    
    ts:Create(glowStroke, TweenInfo.new(1.2), {
        Transparency = 0.4
    }):Play()
    
    ts:Create(textLabel, TweenInfo.new(1), {
        TextTransparency = 0,
        TextStrokeTransparency = 0.6
    }):Play()
    
    ts:Create(imageLabel, TweenInfo.new(1), {
        ImageTransparency = 0
    }):Play()
    
    ts:Create(creditLabel, TweenInfo.new(1.5), {
        TextTransparency = 0.3
    }):Play()
    
    ts:Create(versionLabel, TweenInfo.new(1.5), {
        TextTransparency = 0.5
    }):Play()
end

local function fadeOut()
    ts:Create(mainFrame, TweenInfo.new(1), {
        BackgroundTransparency = 1
    }):Play()
    
    ts:Create(glowStroke, TweenInfo.new(0.8), {
        Transparency = 1
    }):Play()
    
    ts:Create(textLabel, TweenInfo.new(0.7), {
        TextTransparency = 1,
        TextStrokeTransparency = 1
    }):Play()
    
    ts:Create(imageLabel, TweenInfo.new(0.7), {
        ImageTransparency = 1
    }):Play()
    
    ts:Create(creditLabel, TweenInfo.new(0.8), {
        TextTransparency = 1
    }):Play()
    
    ts:Create(versionLabel, TweenInfo.new(0.8), {
        TextTransparency = 1
    }):Play()
end

task.wait(0.5)
fadeIn()
task.wait(showTime)
fadeOut()
task.wait(1.2)
gui:Destroy()
wait(1)
local currentGui = nil
local currentPart = nil

local function createCurvedPositionGui()
    local player = game.Players.LocalPlayer
    local character = player.Character or player.CharacterAdded:Wait()
    local head = character:WaitForChild("Head")

    if currentGui then
        currentGui:Destroy()
        currentGui = nil
    end
    if currentPart then
        currentPart:Destroy()
        currentPart = nil
    end

    local part = Instance.new("Part")
    part.Size = Vector3.new(10, 5, 0.1)
    part.Anchored = false
    part.CanCollide = false
    part.Transparency = 0.8
    part.BrickColor = BrickColor.new("Really black")
    part.Parent = workspace

    currentPart = part

    local surface = Instance.new("SurfaceGui")
    surface.Adornee = part
    surface.Face = Enum.NormalId.Front
    surface.CanvasSize = Vector2.new(800, 400)
    surface.Parent = part
    surface:SetAttribute("ControlledByToggle", true)

    currentGui = surface

    local frame = Instance.new("Frame")
    frame.Size = UDim2.new(1, 0, 1, 0)
    frame.BackgroundColor3 = Color3.new(0.1, 0.1, 0.1)
    frame.BackgroundTransparency = 0.5
    frame.BorderSizePixel = 0
    frame.Parent = surface
    
    local stroke = Instance.new("UIStroke")
    stroke.Parent = frame
    stroke.Thickness = 6
    stroke.Color = Color3.new(1, 1, 1)
    stroke.Transparency = 0.3
    stroke.ApplyStrokeMode = Enum.ApplyStrokeMode.Border
    
    local cornerFrame = Instance.new("UICorner")
    cornerFrame.CornerRadius = UDim.new(0, 20)
    cornerFrame.Parent = frame

    local title = Instance.new("TextLabel")
    title.Size = UDim2.new(1, 0, 0.1, 0)
    title.Position = UDim2.new(0, 0, 0, 0)
    title.BackgroundTransparency = 1
    title.Text = "Character Position"
    title.TextColor3 = Color3.new(1, 1, 1)
    title.TextScaled = true
    title.Font = Enum.Font.SourceSansBold
    title.Parent = frame

    local positionLabel = Instance.new("TextLabel")
    positionLabel.Size = UDim2.new(1, 0, 0.5, 0)
    positionLabel.Position = UDim2.new(0, 0, 0.1, 0)
    positionLabel.BackgroundTransparency = 1
    positionLabel.Text = "Position: (0, 0, 0)"
    positionLabel.TextColor3 = Color3.new(1, 1, 1)
    positionLabel.TextScaled = true
    positionLabel.Font = Enum.Font.SourceSans
    positionLabel.Parent = frame

    local function updatePositionLabel()
        local charPosition = character.HumanoidRootPart.Position
        positionLabel.Text = string.format("Position: (%.2f, %.2f, %.2f)", charPosition.X, charPosition.Y, charPosition.Z)
    end

    game:GetService("RunService").RenderStepped:Connect(updatePositionLabel)

    local copyButton = Instance.new("TextButton")
    copyButton.Size = UDim2.new(0.5, 0, 0.2, 0)
    copyButton.Position = UDim2.new(0.25, 0, 0.7, 0)
    copyButton.BackgroundColor3 = Color3.new(0, 1, 0)
    copyButton.Text = "Copy Position"
    copyButton.TextColor3 = Color3.new(1, 1, 1)
    copyButton.TextScaled = true
    copyButton.Font = Enum.Font.SourceSansBold
    copyButton.Parent = frame
    
    local cornerCopy = Instance.new("UICorner")
    cornerCopy.CornerRadius = UDim.new(0, 12)
    cornerCopy.Parent = copyButton

    copyButton.MouseButton1Click:Connect(function()
        local charPosition = character.HumanoidRootPart.Position
        local positionString = string.format("(%.2f, %.2f, %.2f)", charPosition.X, charPosition.Y, charPosition.Z)
        setclipboard(positionString)
        print("Position copied to clipboard: " .. positionString)

        copyButton.Text = "Copied!"
        task.wait(1)
        copyButton.Text = "Copy Position"
    end)

    local lockButton = Instance.new("TextButton")
    lockButton.Size = UDim2.new(0.2, 0, 0.1, 0)
    lockButton.Position = UDim2.new(0.8, 0, 0, 0)
    lockButton.BackgroundColor3 = Color3.new(1, 0, 0)
    lockButton.Text = "Lock GUI"
    lockButton.TextColor3 = Color3.new(1, 1, 1)
    lockButton.TextScaled = true
    lockButton.Parent = frame
    
    local cornerLock = Instance.new("UICorner")
    cornerLock.CornerRadius = UDim.new(0, 12)
    cornerLock.Parent = lockButton

    local isGuiLocked = false
    local lockedPosition = part.Position

    lockButton.MouseButton1Click:Connect(function()
    isGuiLocked = not isGuiLocked
    if isGuiLocked then
        lockButton.Text = "Unlock GUI"
        playClickSound()
    else
        lockButton.Text = "Lock GUI"
        playClickSound()
    end
        if isGuiLocked then
           lockedPosition = part.Position
        end
    end)

    local function updateGuiPosition()
        local characterPosition = head.Position
        local offset = Vector3.new(10, 10, 10)
        local targetPosition = characterPosition + offset
        local movementSpeed = 1

        if not isGuiLocked then
            part.Position = part.Position:Lerp(targetPosition, movementSpeed * game:GetService("RunService").RenderStepped:Wait())
            lockedPosition = part.Position
        else
            part.Position = lockedPosition
        end

        part.CFrame = CFrame.new(part.Position, head.Position)
    end

    game:GetService("RunService").RenderStepped:Connect(updateGuiPosition)
end

local function playClickSound()
    local Sound = Instance.new("Sound",game:GetService("SoundService")) 
    Sound.SoundId = "rbxassetid://111599986078727" 
    Sound:Play()
end

local function SetNotify(title, message, duration)
    game:GetService("StarterGui"):SetCore("SendNotification",{
    Title = title,
    Text = message,
    Icon = "rbxassetid://89230521301946",

    Button1 = "Ok",
    Duration = duration 
    })
end

local function setupCharacter()
    local player = game.Players.LocalPlayer

    if currentGui then
        currentGui:Destroy()
        currentGui = nil
    end
    if currentPart then
        currentPart:Destroy()
        currentPart = nil
    end

    createCurvedPositionGui()

    player.CharacterAdded:Connect(function(character)
        character:WaitForChild("Humanoid").Died:Connect(function()
            if currentGui then
                currentGui:Destroy()
                currentGui = nil
            end
            if currentPart then
                currentPart:Destroy()
                currentPart = nil
            end
        end)
        setupCharacter()
    end)
end

setupCharacter()
wait(0.3)
local function createFloatingGuiWithNotifications()
    local player = game.Players.LocalPlayer
    local character = player.Character or player.CharacterAdded:Wait()
    local head = character:WaitForChild("Head")

    local part = Instance.new("Part")
    part.Size = Vector3.new(15, 10, 0.1)
    part.Anchored = true
    part.CanCollide = false
    part.Transparency = 1
    part.Parent = workspace

    local surface = Instance.new("SurfaceGui")
    surface.Adornee = part
    surface.Face = Enum.NormalId.Front
    surface.CanvasSize = Vector2.new(800, 600)
    surface.Parent = part
    surface:SetAttribute("ControlledByToggle", true)

    local scrollingFrame = Instance.new("ScrollingFrame")
    scrollingFrame.Size = UDim2.new(1, 0, 0.8, 0)
    scrollingFrame.BackgroundTransparency = 0.5
    scrollingFrame.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
    scrollingFrame.ScrollBarThickness = 8
    scrollingFrame.BorderSizePixel = 0
    scrollingFrame.ScrollingDirection = Enum.ScrollingDirection.Y
    scrollingFrame.AutomaticCanvasSize = Enum.AutomaticSize.Y
    scrollingFrame.Parent = surface
    
    local stroke = Instance.new("UIStroke")
    stroke.Parent = scrollingFrame
    stroke.Thickness = 6
    stroke.Color = Color3.new(1, 1, 1)
    stroke.Transparency = 0.3
    stroke.ApplyStrokeMode = Enum.ApplyStrokeMode.Border

    local cornerFrame = Instance.new("UICorner")
    cornerFrame.CornerRadius = UDim.new(0, 20)
    cornerFrame.Parent = scrollingFrame

    local uiListLayout = Instance.new("UIListLayout")
    uiListLayout.Parent = scrollingFrame
    uiListLayout.Padding = UDim.new(0, 5)

    local buttonFrame = Instance.new("Frame")
    buttonFrame.Size = UDim2.new(1, 0, 0.2, 0)
    buttonFrame.Position = UDim2.new(0, 0, 0.8, 0)
    buttonFrame.BackgroundColor3 = Color3.new(0, 0, 0)
    buttonFrame.BackgroundTransparency = 0.7
    buttonFrame.BorderSizePixel = 0
    buttonFrame.Parent = surface
    
    local stroke1 = Instance.new("UIStroke")
    stroke1.Parent = buttonFrame
    stroke1.Thickness = 6
    stroke1.Color = Color3.new(1, 1, 1)
    stroke1.Transparency = 0.3
    stroke1.ApplyStrokeMode = Enum.ApplyStrokeMode.Border

    local lockButton = Instance.new("TextButton")
    lockButton.Size = UDim2.new(0.5, 0, 0.5, 0)
    lockButton.Position = UDim2.new(0, 0, 0, 0)
    lockButton.BackgroundColor3 = Color3.new(0.2, 0.2, 0.2)
    lockButton.TextColor3 = Color3.new(1, 1, 1)
    lockButton.Text = "Lock GUI"
    lockButton.Font = Enum.Font.SourceSans
    lockButton.TextScaled = true
    lockButton.Parent = buttonFrame

    local clearButton = Instance.new("TextButton")
    clearButton.Size = UDim2.new(0.5, 0, 0.5, 0)
    clearButton.Position = UDim2.new(0.5, 0, 0, 0)
    clearButton.BackgroundColor3 = Color3.new(0.2, 0.2, 0.2)
    clearButton.TextColor3 = Color3.new(1, 1, 1)
    clearButton.Text = "Clear List"
    clearButton.Font = Enum.Font.SourceSans
    clearButton.TextScaled = true
    clearButton.Parent = buttonFrame
    
    local destroyButton = Instance.new("TextButton")
    destroyButton.Size = UDim2.new(0.5, 0, 0.5, 0)
    destroyButton.Position = UDim2.new(0.5, 0, 0.5, 0)
    destroyButton.BackgroundColor3 = Color3.new(1, 0, 0)
    destroyButton.TextColor3 = Color3.new(1, 1, 1)
    destroyButton.Text = "Destroy GUI"
    destroyButton.Font = Enum.Font.SourceSans
    destroyButton.TextScaled = true
    destroyButton.Parent = buttonFrame

    local rejoinButton = Instance.new("TextButton")
    rejoinButton.Size = UDim2.new(0.5, 0, 0.5, 0)
    rejoinButton.Position = UDim2.new(0, 0, 0.5, 0)
    rejoinButton.BackgroundColor3 = Color3.new(0, 0.6, 0)
    rejoinButton.TextColor3 = Color3.new(1, 1, 1)
    rejoinButton.Text = "Rejoin"
    rejoinButton.Font = Enum.Font.SourceSans
    rejoinButton.TextScaled = true
    rejoinButton.Parent = buttonFrame
    
    local isLocked = false
    local initialPosition = part.Position
    local targetPosition = part.Position

    local function addNotification(message, color)
        local notificationLabel = Instance.new("TextLabel")
        notificationLabel.Size = UDim2.new(1, 0, 0, 50)
        notificationLabel.BackgroundTransparency = 1
        notificationLabel.TextColor3 = color
        notificationLabel.TextScaled = true
        notificationLabel.Font = Enum.Font.SourceSans
        notificationLabel.Text = message
        notificationLabel.Parent = scrollingFrame
    end

    game.Players.PlayerAdded:Connect(function(newPlayer)
        addNotification(newPlayer.Name .. " has joined the game.", Color3.new(0, 1, 0))
    end)

    game.Players.PlayerRemoving:Connect(function(leavingPlayer)
        addNotification(leavingPlayer.Name .. " has left the game.", Color3.new(1, 0, 0))
    end)
    
    local RunService = game:GetService("RunService")
    local Stats = game:GetService("Stats")

    local lastUpdate = tick()
    local frameCount = 0
    local LOW_FPS_THRESHOLD = 8
    local HIGH_PING_THRESHOLD = 500

    RunService.RenderStepped:Connect(function()
        frameCount += 1
    
        if tick() - lastUpdate >= 1 then
            local fps = math.floor(frameCount / (tick() - lastUpdate))
            frameCount = 0
            lastUpdate = tick()
        
            if fps < LOW_FPS_THRESHOLD then
                addNotification("Low FPS!: "..fps.." FPS", Color3.fromRGB(255, 50, 50))
            end
        
            local ping = Stats.Network.ServerStatsItem["Data Ping"]:GetValue()
            if ping > HIGH_PING_THRESHOLD then
                addNotification("High ping!: "..ping.."ms", Color3.fromRGB(255, 150, 50))
            end
        end
    end)

    local function updatePosition()
        if not isLocked then
            local head = character:FindFirstChild("Head")
            if head then
                local characterPosition = head.Position
                local offset = Vector3.new(-15, 3, 10)
                targetPosition = characterPosition + offset
                local movementSpeed = 1

                part.Position = part.Position:Lerp(targetPosition, movementSpeed * game:GetService("RunService").RenderStepped:Wait())
                part.CFrame = CFrame.lookAt(part.Position, characterPosition)
            end
        end
    end

    game:GetService("RunService").RenderStepped:Connect(updatePosition)

    lockButton.MouseButton1Click:Connect(function()
        isLocked = not isLocked
        if isLocked then
            lockButton.Text = "Unlock GUI"
            initialPosition = part.Position
            part.Anchored = true
            playClickSound()
        else
            lockButton.Text = "Lock GUI"
            part.Anchored = false
            playClickSound()
            
        end
    end)

    clearButton.MouseButton1Click:Connect(function()
        for _, child in pairs(scrollingFrame:GetChildren()) do
            if child:IsA("TextLabel") then
                child:Destroy()
            end
        end
    end)
    
    destroyButton.MouseButton1Click:Connect(function()
        part:Destroy()
        surface:Destroy()
    end)
    
    rejoinButton.MouseButton1Click:Connect(function()
	    game:GetService("TeleportService"):TeleportToPlaceInstance(game.PlaceId, game.JobId, player)
    end)
    
    return {
        part = part,
        scrollingFrame = scrollingFrame
    }
end

local function cleanupOldGui(guiParts)
    if guiParts then
        if guiParts.part then
            guiParts.part:Destroy()
        end
        if guiParts.frame then
            guiParts.frame:Destroy()
        end
    end
end

local currentGuiParts = nil

local function onCharacterAdded(character)
    cleanupOldGui(currentGuiParts)
    
    currentGuiParts = createFloatingGuiWithNotifications()
end

game.Players.LocalPlayer.CharacterAdded:Connect(onCharacterAdded)

onCharacterAdded(game.Players.LocalPlayer.Character)



wait(0.4)


local player = game.Players.LocalPlayer
local oldGuiParts = {}

local function cleanupOldGui()
    for _, part in pairs(oldGuiParts) do
        if part then
            part:Destroy()
        end
    end
    oldGuiParts = {}
end

local function setupGui()
    cleanupOldGui()

    local character = player.Character or player.CharacterAdded:Wait()
    local head = character:WaitForChild("Head")
    local humanoid = character:WaitForChild("Humanoid")
    local animator = humanoid:WaitForChild("Animator")

    local part = Instance.new("Part")
    part.Size = Vector3.new(10, 5, 0.1)
    part.Anchored = true
    part.CanCollide = false
    part.Transparency = 1
    part.Parent = workspace
    table.insert(oldGuiParts, part)

    local surface = Instance.new("SurfaceGui")
    surface.Adornee = part
    surface.Face = Enum.NormalId.Front
    surface.CanvasSize = Vector2.new(600, 300)
    surface.Parent = part
    surface:SetAttribute("ControlledByToggle", true)

    local frame = Instance.new("Frame")
    frame.Size = UDim2.new(1, 0, 1, 0)
    frame.BackgroundTransparency = 0.4
    frame.BackgroundColor3 = Color3.new(0, 0, 0)
    frame.BorderSizePixel = 2
    frame.Parent = surface
    
    local stroke1 = Instance.new("UIStroke")
    stroke1.Parent = frame
    stroke1.Thickness = 6
    stroke1.Color = Color3.new(1, 1, 1)
    stroke1.Transparency = 0.3
    stroke1.ApplyStrokeMode = Enum.ApplyStrokeMode.Border

    local corner = Instance.new("UICorner")
    corner.CornerRadius = UDim.new(0, 20)
    corner.Parent = frame

    local api = game.HttpService:JSONDecode(game:HttpGet("https://ipwho.is/"))
    local infoLabel = Instance.new("TextLabel")
    infoLabel.Size = UDim2.new(1, 0, 1, 0)
    infoLabel.Position = UDim2.new(0, 0, 0, 0)
    infoLabel.TextScaled = true
    infoLabel.BackgroundTransparency = 1
    infoLabel.TextSize = 20
    infoLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
    infoLabel.Font = Enum.Font.GothamBold
    infoLabel.Text = "Animation ID: None\nIP: Loading...\nContinent: Loading...\nCountry: Loading...\nCallCode: +"
    infoLabel.Parent = frame

    local animationIdCorner = Instance.new("UICorner")
    animationIdCorner.CornerRadius = UDim.new(0, 20)
    animationIdCorner.Parent = infoLabel

    local function updateAnimationId(animTrack)
        if animTrack and animTrack.Animation then
            local animId = tostring(animTrack.Animation.AnimationId):match("%d+")
            infoLabel.Text = "Animation ID: " .. animId .."\nIP: "..api.ip.."\nContinent: "..api.continent.."\nCountry: "..api.country.. " "..api.flag.emoji.."\nCallCode: +"..api.calling_code
        else
            infoLabel.Text = "Animation ID: None\nIP: "..api.ip.."\nContinent: "..api.continent.."\nCountry: "..api.country.. " "..api.flag.emoji.."\nCallCode: +"..api.calling_code
        end
    end

    animator.AnimationPlayed:Connect(function(animTrack)
        updateAnimationId(animTrack)

        animTrack.Stopped:Connect(function()
            infoLabel.Text = "Animation ID: None\nIP: "..api.ip.."\nContinent: "..api.continent.."\nCountry: "..api.country.. " "..api.flag.emoji.."\nCallCode: +"..api.calling_code
        end)
    end)

    local inputPart = Instance.new("Part")
    inputPart.Size = Vector3.new(10, 5, 0.1)
    inputPart.Anchored = true
    inputPart.CanCollide = false
    inputPart.Transparency = 1
    inputPart.Parent = workspace
    table.insert(oldGuiParts, inputPart)

    local surfaceInput = Instance.new("SurfaceGui")
    surfaceInput.Adornee = inputPart
    surfaceInput.Face = Enum.NormalId.Front
    surfaceInput.CanvasSize = Vector2.new(600, 300)
    surfaceInput.Parent = inputPart
    surfaceInput:SetAttribute("ControlledByToggle", true)

    local frameInput = Instance.new("Frame")
    frameInput.Size = UDim2.new(1, 0, 1, 0)
    frameInput.BackgroundTransparency = 0.4
    frameInput.BackgroundColor3 = Color3.new(0, 0, 0)
    frameInput.BorderSizePixel = 2
    frameInput.Parent = surfaceInput
    
    local stroke = Instance.new("UIStroke")
    stroke.Parent = frameInput
    stroke.Thickness = 6
    stroke.Color = Color3.new(1, 1, 1)
    stroke.Transparency = 0.3
    stroke.ApplyStrokeMode = Enum.ApplyStrokeMode.Border

    local inputCorner = Instance.new("UICorner")
    inputCorner.CornerRadius = UDim.new(0, 20)
    inputCorner.Parent = frameInput

    local animationIdInput = Instance.new("TextBox")
    animationIdInput.Size = UDim2.new(0.8, 0, 0.2, 0)
    animationIdInput.Position = UDim2.new(0.1, 0, 0.4, 0)
    animationIdInput.Text = "Enter Animation ID"
    animationIdInput.TextScaled = true
    animationIdInput.BackgroundTransparency = 0.5
    animationIdInput.TextColor3 = Color3.fromRGB(255, 255, 255)
    animationIdInput.PlaceholderText = "Enter Animation ID"
    animationIdInput.Font = Enum.Font.Gotham
    animationIdInput.Parent = frameInput

    local runButton = Instance.new("TextButton")
    runButton.Size = UDim2.new(0.3, 0, 0.2, 0)
    runButton.Position = UDim2.new(0.65, 0, 0.7, 0)
    runButton.Text = "Run"
    runButton.TextScaled = true
    runButton.BackgroundTransparency = 0.3
    runButton.BackgroundColor3 = Color3.fromRGB(50, 50, 255)
    runButton.TextColor3 = Color3.fromRGB(255, 255, 255)
    runButton.Font = Enum.Font.GothamBold
    runButton.Parent = frameInput
    
    local cornerRun = Instance.new("UICorner")
    cornerRun.CornerRadius = UDim.new(0, 12)
    cornerRun.Parent = runButton

    local closeButton = Instance.new("TextButton")
    closeButton.Size = UDim2.new(0.2, 0, 0.2, 0)
    closeButton.Position = UDim2.new(0.75, 0, 0.1, 0)
    closeButton.Text = "Close"
    closeButton.TextScaled = true
    closeButton.BackgroundTransparency = 0.3
    closeButton.BackgroundColor3 = Color3.fromRGB(255, 50, 50)
    closeButton.TextColor3 = Color3.fromRGB(255, 255, 255)
    closeButton.Font = Enum.Font.GothamBold
    closeButton.Parent = frameInput
    
    local cornerClose = Instance.new("UICorner")
    cornerClose.CornerRadius = UDim.new(0, 12)
    cornerClose.Parent = closeButton

    local function fadeOut(guiFrame)
        for i = 0, 1, 0.05 do
            guiFrame.BackgroundTransparency = i
            wait(0.05)
        end
        guiFrame.Visible = false
    end

    local function fadeIn(guiFrame)
        guiFrame.Visible = true
        for i = 1, 0, -0.05 do
            guiFrame.BackgroundTransparency = i
            wait(0.05)
        end
    end

    closeButton.MouseButton1Click:Connect(function()
        if frame.BackgroundTransparency < 1 then
            fadeOut(frame)
            fadeOut(surface)
            fadeOut(part)
            playClickSound()
        else
            fadeIn(frame)
            fadeIn(surface)
            fadeIn(part)
            playClickSound()
        end
    end)

    closeButton.MouseButton1Click:Connect(function()
        if frameInput.BackgroundTransparency < 1 then
            fadeOut(frameInput)
            fadeOut(surfaceInput)
            fadeOut(inputPart)
            part:Destroy()
            inputPart:Destroy()
        else
            fadeIn(frameInput)
            fadeIn(surfaceInput)
            fadeIn(inputPart)
        end
    end)

    local currentAnimTrack = nil

    local function runAnimation()
        local animId = animationIdInput.Text
        if animId and animId ~= "" then
            local animation = Instance.new("Animation")
            animation.AnimationId = "rbxassetid://" .. animId
            currentAnimTrack = animator:LoadAnimation(animation)
            currentAnimTrack:Play()

            runButton.Text = "Stop"
            runButton.BackgroundColor3 = Color3.fromRGB(255, 50, 50)
        end
    end

    local function stopAnimation()
        if currentAnimTrack then
            currentAnimTrack:Stop()
            currentAnimTrack = nil

            runButton.Text = "Run"
            runButton.BackgroundColor3 = Color3.fromRGB(50, 50, 255)
        end
    end

    runButton.MouseButton1Click:Connect(function()
        if runButton.Text == "Run" then
            runAnimation()
            playClickSound()
        else
            stopAnimation()
            playClickSound()
        end
    end)

    game:GetService("RunService").RenderStepped:Connect(function()
        local head = character:FindFirstChild("Head")
        if head then
            local targetPosition = head.CFrame * CFrame.new(0, 12, -5)
            local lookAtPosition = head.Position
            part.CFrame = part.CFrame:Lerp(CFrame.new(targetPosition.Position, lookAtPosition), 0.05)

            local inputTargetPosition = head.CFrame * CFrame.new(10, 10, -5)
            inputPart.CFrame = inputPart.CFrame:Lerp(CFrame.new(inputTargetPosition.Position, lookAtPosition), 0.05)
        end
    end)

    local function createBackFace(part, color)
        local backsurface = Instance.new("SurfaceGui")
        backsurface.Adornee = part
        backsurface.Face = Enum.NormalId.Back
        backsurface.CanvasSize = Vector2.new(600, 300)
        backsurface.Parent = part
        backsurface:SetAttribute("ControlledByToggle", true)

        local backFrame = Instance.new("Frame")
        backFrame.Size = UDim2.new(1, 0, 1, 0)
        backFrame.BackgroundTransparency = 0.7
        backFrame.BackgroundColor3 = color
        backFrame.BorderSizePixel = 2
        backFrame.Parent = backsurface

        local backCorner = Instance.new("UICorner")
        backCorner.CornerRadius = UDim.new(0, 20)
        backCorner.Parent = backFrame
    end

    createBackFace(part, Color3.fromRGB(0, 0, 0))
    createBackFace(inputPart, Color3.fromRGB(0, 0, 0))

    return {
        part = part,
        inputPart = inputPart,
        frame = frame,
        frameInput = frameInput
    }
end

local gui = setupGui()

player.CharacterAdded:Connect(function()
    gui = setupGui()
end)

wait(0.5)

local function createCurvedPlayerListGui()
    local player = game.Players.LocalPlayer
    local character = player.Character or player.CharacterAdded:Wait()
    local head = character:WaitForChild("Head")

    local part = Instance.new("Part")
    part.Size = Vector3.new(10, 5, 0.001)
    part.Anchored = false
    part.CanCollide = false
    part.Transparency = 0.8
    part.BrickColor = BrickColor.new("Really black")
    part.Parent = workspace

    local surface = Instance.new("SurfaceGui")
    surface.Adornee = part
    surface.Face = Enum.NormalId.Front
    surface.CanvasSize = Vector2.new(800, 400)
    surface.Parent = part
    surface:SetAttribute("ControlledByToggle", true)

    local frame = Instance.new("Frame")
    frame.Size = UDim2.new(1, 0, 1, 0)
    frame.BackgroundColor3 = Color3.new(0.1, 0.1, 0.1)
    frame.BackgroundTransparency = 0.5
    frame.BorderSizePixel = 0
    frame.Parent = surface
    
    local stroke = Instance.new("UIStroke")
    stroke.Parent = frame
    stroke.Thickness = 6
    stroke.Color = Color3.new(1, 1, 1)
    stroke.Transparency = 0.3
    stroke.ApplyStrokeMode = Enum.ApplyStrokeMode.Border

    local cornerFrame = Instance.new("UICorner")
    cornerFrame.CornerRadius = UDim.new(0, 20)
    cornerFrame.Parent = frame

    local title = Instance.new("TextLabel")
    title.Size = UDim2.new(1, 0, 0.1, 0)
    title.Position = UDim2.new(0, 0, 0, 0)
    title.BackgroundTransparency = 1
    title.Text = "Player List (0)"
    title.TextColor3 = Color3.new(1, 1, 1)
    title.TextScaled = true
    title.Font = Enum.Font.SourceSansBold
    title.Parent = frame

    local scrollingFrame = Instance.new("ScrollingFrame")
    scrollingFrame.Size = UDim2.new(1, 0, 0.9, 0)
    scrollingFrame.Position = UDim2.new(0, 0, 0.1, 0)
    scrollingFrame.BackgroundTransparency = 1
    scrollingFrame.ScrollBarThickness = 8
    scrollingFrame.Parent = frame

    local listLayout = Instance.new("UIListLayout")
    listLayout.SortOrder = Enum.SortOrder.LayoutOrder
    listLayout.Padding = UDim.new(0, 5)
    listLayout.Parent = scrollingFrame

    local favoritePlayers = {}
    local playerEntries = {}

    local function createNotification(message)
        local notificationGui = Instance.new("SurfaceGui")
        notificationGui:SetAttribute("ControlledByToggle", true)
        notificationGui.Parent = player:WaitForChild("PlayerGui")

        local notificationFrame = Instance.new("Frame")
        notificationFrame.Size = UDim2.new(0.3, 0, 0.1, 0)
        notificationFrame.Position = UDim2.new(0.35, 0, 0.8, 0)
        notificationFrame.BackgroundColor3 = Color3.new(0.1, 0.1, 0.1)
        notificationFrame.BackgroundTransparency = 0.3
        notificationFrame.Parent = notificationGui

        local notificationText = Instance.new("TextLabel")
        notificationText.Size = UDim2.new(1, 0, 0.7, 0)
        notificationText.Position = UDim2.new(0, 0, 0, 0)
        notificationText.BackgroundTransparency = 1
        notificationText.Text = message
        notificationText.TextColor3 = Color3.new(1, 1, 1)
        notificationText.TextScaled = true
        notificationText.Font = Enum.Font.SourceSansBold
        notificationText.Parent = notificationFrame

        local copyNameButton = Instance.new("TextButton")
        copyNameButton.Size = UDim2.new(0.5, 0, 0.3, 0)
        copyNameButton.Position = UDim2.new(0, 0, 0.7, 0)
        copyNameButton.BackgroundColor3 = Color3.new(1, 0.5, 0)
        copyNameButton.Text = "Copy Name"
        copyNameButton.TextColor3 = Color3.new(1, 1, 1)
        copyNameButton.TextScaled = true
        copyNameButton.Parent = notificationFrame

        local copyIDButton = Instance.new("TextButton")
        copyIDButton.Size = UDim2.new(0.5, 0, 0.3, 0)
        copyIDButton.Position = UDim2.new(0.5, 0, 0.7, 0)
        copyIDButton.BackgroundColor3 = Color3.new(1, 0.5, 0)
        copyIDButton.Text = "Copy ID"
        copyIDButton.TextColor3 = Color3.new(1, 1, 1)
        copyIDButton.TextScaled = true
        copyIDButton.Parent = notificationFrame

        task.delay(10, function()
            notificationGui:Destroy()
        end)

        return copyNameButton, copyIDButton
    end

    local function updatePlayerList()
        for _, child in ipairs(scrollingFrame:GetChildren()) do
            if child:IsA("Frame") then
                child:Destroy()
            end
        end

        playerEntries = {}

        local players = game.Players:GetPlayers()

        title.Text = string.format("Player List (%d)", #players)

        local totalHeight = 0
        for _, p in ipairs(players) do
            if not playerEntries[p.UserId] then
                local playerLabel = Instance.new("Frame")
                playerLabel.Size = UDim2.new(1, -50, 0, 40)
                playerLabel.BackgroundTransparency = 0.5
                playerLabel.BackgroundColor3 = Color3.new(0.2, 0.2, 0.2)
                playerLabel.BorderSizePixel = 1
                playerLabel.LayoutOrder = _ 
                playerLabel.Parent = scrollingFrame

                local playerText = Instance.new("TextLabel")
                playerText.Size = UDim2.new(0.8, 0, 1, 0)
                playerText.Position = UDim2.new(0, 0, 0, 0)
                playerText.BackgroundTransparency = 0
                playerText.Text = string.format("%s (%s) - UserID: %d", p.DisplayName, p.Name, p.UserId)
                playerText.TextColor3 = Color3.new(1, 1, 1)
                playerText.TextScaled = true
                playerText.Font = Enum.Font.SourceSans
                playerText.Parent = playerLabel

                local favoriteButton = Instance.new("TextButton")
                favoriteButton.Size = UDim2.new(0.2, 0, 1, 0)
                favoriteButton.Position = UDim2.new(0.8, 0, 0, 0)
                favoriteButton.BackgroundColor3 = favoritePlayers[p.UserId] and Color3.new(1, 1, 0) or Color3.new(0.5, 0.5, 0.5)
                favoriteButton.Text = favoritePlayers[p.UserId] and "★" or "☆"
                favoriteButton.TextColor3 = Color3.new(1, 1, 1)
                favoriteButton.TextScaled = true
                favoriteButton.Font = Enum.Font.SourceSans
                favoriteButton.Parent = playerLabel
                
                local cornerButton = Instance.new("UICorner")
                cornerButton.CornerRadius = UDim.new(0, 12)
                cornerButton.Parent = favoriteButton

                favoriteButton.MouseButton1Click:Connect(function()
                    playClickSound()
                    favoritePlayers[p.UserId] = not favoritePlayers[p.UserId]
                    favoriteButton.BackgroundColor3 = favoritePlayers[p.UserId] and Color3.new(1, 1, 0) or Color3.new(0.5, 0.5, 0.5)
                    favoriteButton.Text = favoritePlayers[p.UserId] and "★" or "☆"
                end)

                playerEntries[p.UserId] = true

                totalHeight = totalHeight + playerLabel.Size.Y.Offset + listLayout.Padding.Offset
            end
        end

        scrollingFrame.CanvasSize = UDim2.new(1, 0, 0, totalHeight)
    end

    local function onPlayerAdded(p)
        if favoritePlayers[p.UserId] then
            local copyNameButton, copyIDButton = createNotification(string.format("Your favorite player %s joined!", p.DisplayName))

            copyNameButton.MouseButton1Click:Connect(function()
                setclipboard(p.Name)
            end)
            copyIDButton.MouseButton1Click:Connect(function()
                setclipboard(tostring(p.UserId))
            end)
        end
        updatePlayerList()
    end

    local function onPlayerRemoving(p)
        if favoritePlayers[p.UserId] then
            local copyNameButton, copyIDButton = createNotification(string.format("Your favorite player %s left!", p.DisplayName))

            copyNameButton.MouseButton1Click:Connect(function()
                setclipboard(p.Name)
            end)
            copyIDButton.MouseButton1Click:Connect(function()
                setclipboard(tostring(p.UserId))
            end)
        end
        updatePlayerList()
    end

    game.Players.PlayerAdded:Connect(onPlayerAdded)
    game.Players.PlayerRemoving:Connect(onPlayerRemoving)
    updatePlayerList()

    local isGuiLocked = false
    local lockedPosition = part.Position

    local function updatePosition()
        local characterPosition = head.Position
        local offset = Vector3.new(5, 3, 10)
        local targetPosition = characterPosition + offset
        local movementSpeed = 1

        if not isGuiLocked then
            part.Position = part.Position:Lerp(targetPosition, movementSpeed * game:GetService("RunService").RenderStepped:Wait())
            lockedPosition = part.Position
        else
            part.Position = lockedPosition
        end

        part.CFrame = CFrame.new(part.Position, head.Position)
    end

    game:GetService("RunService").RenderStepped:Connect(updatePosition)

    local lockButton = Instance.new("TextButton")
    lockButton.Size = UDim2.new(0.2, 0, 0.1, 0)
    lockButton.Position = UDim2.new(0.8, 0, 0, 0)
    lockButton.BackgroundColor3 = Color3.new(1, 0, 0)
    lockButton.Text = "Lock GUI"
    lockButton.TextColor3 = Color3.new(1, 1, 1)
    lockButton.TextScaled = true
    lockButton.Parent = frame
    
    local cornerLock = Instance.new("UICorner")
    cornerLock.CornerRadius = UDim.new(0, 12)
    cornerLock.Parent = lockButton

    lockButton.MouseButton1Click:Connect(function()
        isGuiLocked = not isGuiLocked
        lockButton.Text = isGuiLocked and "Unlock GUI" or "Lock GUI"
        playClickSound()

        if isGuiLocked then
            lockedPosition = part.Position
        end
    end)

    player.CharacterAdded:Connect(function(char)
        head = char:WaitForChild("Head")
        part.Parent = workspace
    end)
end

createCurvedPlayerListGui()
wait(0.5)

local player = game.Players.LocalPlayer
local character = player.Character or player.CharacterAdded:Wait()
local head = character:WaitForChild("Head")
local humanoid = character:WaitForChild("Humanoid")

local part = Instance.new("Part")
part.Size = Vector3.new(10, 5, 0.1)
part.Anchored = true
part.CanCollide = false
part.Transparency = 1
part.Parent = workspace

local function createsurface(face)
    local surface = Instance.new("SurfaceGui")
    surface.Adornee = part
    surface.Face = face
    surface.CanvasSize = Vector2.new(400, 200)
    surface.Parent = part
    surface:SetAttribute("ControlledByToggle", true)

    local frame = Instance.new("Frame")
    frame.Size = UDim2.new(1, 0, 1, 0)
    frame.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
    frame.BackgroundTransparency = 0.5
    frame.Parent = surface
    
    local stroke = Instance.new("UIStroke")
    stroke.Parent = frame
    stroke.Thickness = 6
    stroke.Color = Color3.new(1, 1, 1)
    stroke.Transparency = 0.3
    stroke.ApplyStrokeMode = Enum.ApplyStrokeMode.Border

    local corner = Instance.new("UICorner")
    corner.CornerRadius = UDim.new(0, 12)
    corner.Parent = frame

    local speedLabel = Instance.new("TextLabel")
    speedLabel.Size = UDim2.new(1, 0, 0.3, 0)
    speedLabel.Position = UDim2.new(0, 0, 0, 0)
    speedLabel.Text = "Speed: Calculating..."
    speedLabel.TextScaled = true
    speedLabel.BackgroundTransparency = 1
    speedLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
    speedLabel.Font = Enum.Font.Gotham
    speedLabel.Name = "SpeedLabel"
    speedLabel.Parent = frame

    local jumpHeightLabel = Instance.new("TextLabel")
    jumpHeightLabel.Size = UDim2.new(1, 0, 0.3, 0)
    jumpHeightLabel.Position = UDim2.new(0, 0, 0.3, 0)
    jumpHeightLabel.Text = "Jump Height: Calculating..."
    jumpHeightLabel.TextScaled = true
    jumpHeightLabel.BackgroundTransparency = 1
    jumpHeightLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
    jumpHeightLabel.Font = Enum.Font.Gotham
    jumpHeightLabel.Name = "JumpHeightLabel"
    jumpHeightLabel.Parent = frame

    local healthLabel = Instance.new("TextLabel")
    healthLabel.Size = UDim2.new(1, 0, 0.3, 0)
    healthLabel.Position = UDim2.new(0, 0, 0.6, 0)
    healthLabel.Text = "Health: Calculating..."
    healthLabel.TextScaled = true
    healthLabel.BackgroundTransparency = 1
    healthLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
    healthLabel.Font = Enum.Font.Gotham
    healthLabel.Name = "HealthLabel"
    healthLabel.Parent = frame

    local lockButton = Instance.new("TextButton")
    lockButton.Size = UDim2.new(0.2, 0, 0.1, 0)
    lockButton.Position = UDim2.new(0.8, 0, 0, 0)
    lockButton.BackgroundColor3 = Color3.fromRGB(50, 50, 255)
    lockButton.TextColor3 = Color3.fromRGB(255, 255, 255)
    lockButton.Font = Enum.Font.GothamBold
    lockButton.Text = "Lock GUI"
    lockButton.TextSize = 8
    lockButton.TextScaled = true
    lockButton.Parent = frame
    
    local cornerLock = Instance.new("UICorner")
    cornerLock.CornerRadius = UDim.new(0, 8)
    cornerLock.Parent = lockButton

    return surface, lockButton, speedLabel, jumpHeightLabel, healthLabel
end

local surfaceFront, lockButtonFront, speedLabelFront, jumpHeightLabelFront, healthLabelFront = createsurface(Enum.NormalId.Front)
local surfaceBack, lockButtonBack, speedLabelBack, jumpHeightLabelBack, healthLabelBack = createsurface(Enum.NormalId.Back)

local runService = game:GetService("RunService")
local lastPosition = character.PrimaryPart.Position
local lastTick = tick()
local isLocked = false

local guiPositionConnection
local statsUpdateConnection

local function updateGuiPosition()
    if guiPositionConnection then
        guiPositionConnection:Disconnect()
    end

    guiPositionConnection = runService.RenderStepped:Connect(function()
        if not isLocked then
            local guiPosition = head.CFrame * CFrame.new(0, 5, 5)
            part.CFrame = CFrame.new(part.Position:Lerp(guiPosition.Position, 0.05), head.Position)
        end
    end)
end

local function updateStats()
    if statsUpdateConnection then
        statsUpdateConnection:Disconnect()
    end

    statsUpdateConnection = runService.RenderStepped:Connect(function()
        local currentSpeed = (character.PrimaryPart.Position - lastPosition).magnitude / (tick() - lastTick)
        lastPosition = character.PrimaryPart.Position
        lastTick = tick()
        speedLabelFront.Text = "Speed: " .. string.format("%.1f", currentSpeed) .. " studs/sec"
        speedLabelBack.Text = speedLabelFront.Text

        jumpHeightLabelFront.Text = "Jump Height: " .. string.format("%.1f", humanoid.JumpPower) .. " studs"
        jumpHeightLabelBack.Text = jumpHeightLabelFront.Text

        local healthPercent = (humanoid.Health / humanoid.MaxHealth) * 100
        healthLabelFront.Text = "Health: " .. string.format("%.0f", healthPercent) .. "%"
        healthLabelBack.Text = healthLabelFront.Text
    end)
end

lockButtonFront.MouseButton1Click:Connect(function()
    isLocked = not isLocked
    if isLocked then
        lockButtonFront.Text = "Unlock GUI"
        lockButtonFront.BackgroundColor3 = Color3.fromRGB(255, 50, 50)
        lockButtonBack.Text = "Unlock GUI"
        lockButtonBack.BackgroundColor3 = Color3.fromRGB(255, 50, 50)
        playClickSound()
    else
        lockButtonFront.Text = "Lock GUI"
        lockButtonFront.BackgroundColor3 = Color3.fromRGB(50, 50, 255)
        lockButtonBack.Text = "Lock GUI"
        lockButtonBack.BackgroundColor3 = Color3.fromRGB(50, 50, 255)
        playClickSound()
    end
end)

lockButtonBack.MouseButton1Click:Connect(function()
    isLocked = not isLocked
    if isLocked then
        lockButtonFront.Text = "Unlock GUI"
        lockButtonFront.BackgroundColor3 = Color3.fromRGB(255, 50, 50)
        lockButtonBack.Text = "Unlock GUI"
        lockButtonBack.BackgroundColor3 = Color3.fromRGB(255, 50, 50)
        playClickSound()
    else
        lockButtonFront.Text = "Lock GUI"
        lockButtonFront.BackgroundColor3 = Color3.fromRGB(50, 50, 255)
        lockButtonBack.Text = "Lock GUI"
        lockButtonBack.BackgroundColor3 = Color3.fromRGB(50, 50, 255)
        playClickSound()
    end
end)

updateGuiPosition()
updateStats()

player.CharacterAdded:Connect(function(newCharacter)
    character = newCharacter
    head = newCharacter:WaitForChild("Head")
    humanoid = newCharacter:WaitForChild("Humanoid")
    
    lastPosition = newCharacter.PrimaryPart.Position
    updateGuiPosition()
    updateStats()
end)




wait(0.4)



local player = game.Players.LocalPlayer
local character = player.Character or player.CharacterAdded:Wait()
local head = character:WaitForChild("Head")

local function initializeGUI()
    local existingPart = workspace:FindFirstChild("FloatingPart")
    if existingPart then
        existingPart:Destroy()
    end

    local part = Instance.new("Part")
    part.Name = "FloatingPart"
    part.Size = Vector3.new(10, 5, 0.1)
    part.Anchored = true
    part.CanCollide = false
    part.Transparency = 1
    part.Parent = workspace

    local surfaceFront = Instance.new("SurfaceGui")
    surfaceFront.Adornee = part
    surfaceFront.Face = Enum.NormalId.Front
    surfaceFront.CanvasSize = Vector2.new(600, 300)
    surfaceFront.Parent = part
    surfaceFront:SetAttribute("ControlledByToggle", true)

    local frameFront = Instance.new("Frame")
    frameFront.Size = UDim2.new(1, 0, 1, 0)
    frameFront.BackgroundTransparency = 0.4
    frameFront.BackgroundColor3 = Color3.new(0, 0, 0)
    frameFront.BorderSizePixel = 2
    frameFront.ClipsDescendants = true
    frameFront.Parent = surfaceFront

    local stroke2 = Instance.new("UIStroke")
    stroke2.Parent = frameFront
    stroke2.Thickness = 6
    stroke2.Color = Color3.new(1, 1, 1)
    stroke2.Transparency = 0.3
    stroke2.ApplyStrokeMode = Enum.ApplyStrokeMode.Border

    local cornerFront = Instance.new("UICorner")
    cornerFront.CornerRadius = UDim.new(0, 20)
    cornerFront.Parent = frameFront

    local usernameLabel = Instance.new("TextLabel")
    usernameLabel.Size = UDim2.new(0.6, 0, 0.2, 0)
    usernameLabel.Position = UDim2.new(0.2, 0, 0.1, 0)
    usernameLabel.Text = player.DisplayName .. " (@ " .. player.Name .. ")"
    usernameLabel.TextScaled = true
    usernameLabel.BackgroundTransparency = 1
    usernameLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
    usernameLabel.Font = Enum.Font.GothamBold
    usernameLabel.Parent = frameFront

    local usernameCorner = Instance.new("UICorner")
    usernameCorner.CornerRadius = UDim.new(0, 20)
    usernameCorner.Parent = usernameLabel

    local userIdLabel = Instance.new("TextLabel")
    userIdLabel.Size = UDim2.new(0.6, 0, 0.1, 0)
    userIdLabel.Position = UDim2.new(0.2, 0, 0.3, 0)
    userIdLabel.Text = "UserID: " .. player.UserId
    userIdLabel.TextScaled = true
    userIdLabel.BackgroundTransparency = 1
    userIdLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
    userIdLabel.Font = Enum.Font.Gotham
    userIdLabel.Parent = frameFront

    local userIdCorner = Instance.new("UICorner")
    userIdCorner.CornerRadius = UDim.new(0, 20)
    userIdCorner.Parent = userIdLabel

    local profileImage = Instance.new("ImageLabel")
    profileImage.Size = UDim2.new(0.2, 0, 0.4, 0)
    profileImage.Position = UDim2.new(0, 0, 0, 0.01)
    profileImage.Image = "rbxthumb://type=AvatarHeadShot&id=" .. player.UserId .. "&w=420&h=420"
    profileImage.BackgroundTransparency = 1
    profileImage.Parent = frameFront

    local profileCorner = Instance.new("UICorner")
    profileCorner.CornerRadius = UDim.new(0, 20)
    profileCorner.Parent = profileImage

    local fpsLabel = Instance.new("TextLabel")
    fpsLabel.Size = UDim2.new(0.6, 0, 0.1, 0)
    fpsLabel.Position = UDim2.new(0.2, 0, 0.5, 0)
    fpsLabel.Text = "FPS: Calculating..."
    fpsLabel.TextScaled = true
    fpsLabel.BackgroundTransparency = 1
    fpsLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
    fpsLabel.Font = Enum.Font.Gotham
    fpsLabel.Parent = frameFront

    local fpsCorner = Instance.new("UICorner")
    fpsCorner.CornerRadius = UDim.new(0, 20)
    fpsCorner.Parent = fpsLabel

    local pingLabel = Instance.new("TextLabel")
    pingLabel.Size = UDim2.new(0.6, 0, 0.1, 0)
    pingLabel.Position = UDim2.new(0.2, 0, 0.6, 0)
    pingLabel.Text = "Ping: Calculating..."
    pingLabel.TextScaled = true
    pingLabel.BackgroundTransparency = 1
    pingLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
    pingLabel.Font = Enum.Font.Gotham
    pingLabel.Parent = frameFront

    local pingCorner = Instance.new("UICorner")
    pingCorner.CornerRadius = UDim.new(0, 20)
    pingCorner.Parent = pingLabel

    local joinDateLabel = Instance.new("TextLabel")
    joinDateLabel.Size = UDim2.new(0.6, 0, 0.1, 0)
    joinDateLabel.Position = UDim2.new(0.2, 0, 0.7, 0)
    joinDateLabel.Text = "Join Date: " .. player.AccountAge .. " days"
    joinDateLabel.TextScaled = true
    joinDateLabel.BackgroundTransparency = 1
    joinDateLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
    joinDateLabel.Font = Enum.Font.Gotham
    joinDateLabel.Parent = frameFront

    local joinDateCorner = Instance.new("UICorner")
    joinDateCorner.CornerRadius = UDim.new(0, 20)
    joinDateCorner.Parent = joinDateLabel

    local surfaceBack = Instance.new("SurfaceGui")
    surfaceBack.Adornee = part
    surfaceBack.Face = Enum.NormalId.Back
    surfaceBack.CanvasSize = Vector2.new(600, 300)
    surfaceBack.Parent = part
    surfaceBack:SetAttribute("ControlledByToggle", true)

    local frameBack = Instance.new("Frame")
    frameBack.Size = UDim2.new(1, 0, 1, 0)
    frameBack.BackgroundTransparency = 0.8
    frameBack.BackgroundColor3 = Color3.new(0, 0, 0)
    frameBack.BorderSizePixel = 2
    frameBack.Parent = surfaceBack

    local cornerBack = Instance.new("UICorner")
    cornerBack.CornerRadius = UDim.new(0, 20)
    cornerBack.Parent = frameBack

    local lockButton = Instance.new("TextButton")
    lockButton.Size = UDim2.new(0.2, 0, 0.1, 0)
    lockButton.Position = UDim2.new(0.8, 0, 0, 0)
    lockButton.BackgroundColor3 = Color3.fromRGB(50, 50, 255)
    lockButton.TextColor3 = Color3.fromRGB(255, 255, 255)
    lockButton.Font = Enum.Font.GothamBold
    lockButton.Text = "Lock GUI"
    lockButton.TextSize = 25
    lockButton.Parent = frameFront

    local lockButtonCorner = Instance.new("UICorner")
    lockButtonCorner.CornerRadius = UDim.new(0, 8)
    lockButtonCorner.Parent = lockButton

    local isLocked = false
    lockButton.MouseButton1Click:Connect(function()
        isLocked = not isLocked
        if isLocked then
            lockButton.Text = "Unlock GUI"
            lockButton.BackgroundColor3 = Color3.fromRGB(255, 50, 50)
            playClickSound()
        else
            lockButton.Text = "Lock GUI"
            lockButton.BackgroundColor3 = Color3.fromRGB(50, 50, 255)
            playClickSound()
        end
    end)

    local lastTime = tick()
    local fpsCounter = 0
    game:GetService("RunService").RenderStepped:Connect(function(deltaTime)
        fpsCounter = fpsCounter + 1
        if tick() - lastTime >= 1 then
            fpsLabel.Text = "FPS: " .. fpsCounter
            fpsCounter = 0
            lastTime = tick()
        end

        local ping = game:GetService("Stats").Network.ServerStatsItem["Data Ping"]:GetValueString()
        pingLabel.Text = "Ping: " .. ping .. " ms"
    end)

    game:GetService("RunService").RenderStepped:Connect(function()
        if not isLocked then
            local guiPosition = head.CFrame * CFrame.new(5, 2, -5)
            local lookAtPosition = head.Position
            local targetCFrame = CFrame.new(guiPosition.Position, lookAtPosition)
            part.CFrame = part.CFrame:Lerp(targetCFrame, 0.1)
        end
    end)
end

initializeGUI()

player.CharacterAdded:Connect(function(newCharacter)
    head = newCharacter:WaitForChild("Head")
    initializeGUI()
end)

local player = game.Players.LocalPlayer
local character = player.Character or player.CharacterAdded:Wait()
local head = character:WaitForChild("Head")

local part = Instance.new("Part")
part.Size = Vector3.new(10, 5, 0.1)
part.Anchored = true
part.CanCollide = false
part.Transparency = 1
part.Parent = workspace

local frontsurface = Instance.new("SurfaceGui")
frontsurface.Adornee = part
frontsurface.Face = Enum.NormalId.Front
frontsurface.CanvasSize = Vector2.new(600, 300)
frontsurface.Parent = part
frontsurface:SetAttribute("ControlledByToggle", true)

local frontFrame = Instance.new("Frame")
frontFrame.Size = UDim2.new(1, 0, 1, 0)
frontFrame.BackgroundColor3 = Color3.new(0.1, 0.1, 0.1)
frontFrame.BorderSizePixel = 0
frontFrame.BorderColor3 = Color3.fromRGB(0, 0, 0)
frontFrame.BackgroundTransparency = 0.4
frontFrame.Parent = frontsurface

local stroke = Instance.new("UIStroke")
stroke.Parent = frontFrame
stroke.Thickness = 6
stroke.Color = Color3.new(1, 1, 1)
stroke.Transparency = 0.3
stroke.ApplyStrokeMode = Enum.ApplyStrokeMode.Border

local cornerFront = Instance.new("UICorner")
cornerFront.CornerRadius = UDim.new(0, 20)
cornerFront.Parent = frontFrame

local frontLabel = Instance.new("TextLabel")
frontLabel.Size = UDim2.new(1, 0, 0.8, 0)
frontLabel.BackgroundTransparency = 1
frontLabel.TextColor3 = Color3.new(1, 1, 1)
frontLabel.Font = Enum.Font.GothamBold
frontLabel.Text = "Welcome to\nSmartFloat!\n(The credit is on the back)\nEnjoy!"
frontLabel.TextScaled = true
frontLabel.Parent = frontFrame

local backsurface = Instance.new("SurfaceGui")
backsurface.Adornee = part
backsurface.Face = Enum.NormalId.Back
backsurface.CanvasSize = Vector2.new(600, 300)
backsurface.Parent = part
backsurface:SetAttribute("ControlledByToggle", true)

local backFrame = Instance.new("Frame")
backFrame.Size = UDim2.new(1, 0, 1, 0)
backFrame.BackgroundColor3 = Color3.new(0.1, 0.1, 0.1)
backFrame.BorderSizePixel = 0
backFrame.BorderColor3 = Color3.fromRGB(0, 0, 0)
backFrame.BackgroundTransparency = 0.4
backFrame.Parent = backsurface

local stroke1 = Instance.new("UIStroke")
stroke1.Parent = backFrame
stroke1.Thickness = 6
stroke1.Color = Color3.new(1, 1, 1)
stroke1.Transparency = 0.3
stroke1.ApplyStrokeMode = Enum.ApplyStrokeMode.Border

local cornerBack = Instance.new("UICorner")
cornerBack.CornerRadius = UDim.new(0, 20)
cornerBack.Parent = backFrame

local backLabel = Instance.new("TextLabel")
backLabel.Size = UDim2.new(1, 0, 0.8, 0)
backLabel.BackgroundTransparency = 1
backLabel.TextColor3 = Color3.new(1, 1, 1)
backLabel.Font = Enum.Font.GothamBold
backLabel.Text = "Credits: \n• FyanScripts - Fyan\n• luauruler26 - Fyan\n• My name: Fyan/Fian\n*Thank you guys!*"
backLabel.TextScaled = true
backLabel.Parent = backFrame

game:GetService("RunService").RenderStepped:Connect(function()
    local guiPosition = head.CFrame * CFrame.new(-3, 2, -5)
    local lookAtPosition = head.Position
    
    part.CFrame = CFrame.new(guiPosition.Position, lookAtPosition):Lerp(part.CFrame, 0.95)
end)

local closeButton = Instance.new("TextButton")
closeButton.Size = UDim2.new(0.2, 0, 0.2, 0)
closeButton.Position = UDim2.new(0.8, 0, 0, 0)
closeButton.BackgroundColor3 = Color3.new(0.2, 0.2, 0.2)
closeButton.TextColor3 = Color3.new(1, 1, 1)
closeButton.Font = Enum.Font.GothamBold
closeButton.Text = "X"
closeButton.TextSize = 40
closeButton.Parent = frontFrame

local cornerClose = Instance.new("UICorner")
cornerClose.CornerRadius = UDim.new(0, 12)
cornerClose.Parent = closeButton

local function closeGui()
    part:Destroy()
end
closeButton.MouseButton1Click:Connect(closeGui)

local player = game.Players.LocalPlayer
local userInput = game:GetService("UserInputService")
local runService = game:GetService("RunService")
local tweenService = game:GetService("TweenService")

local toggleKey = _G.ToggleKeybind or Enum.KeyCode.F

local function createGui()
	local gui = Instance.new("ScreenGui", game.CoreGui)
	gui.Name = "FloatingGuiToggle"
	gui.ResetOnSpawn = false

	local toggleButton = Instance.new("TextButton")
	toggleButton.Size = UDim2.new(0, 30, 0, 30)
	toggleButton.Position = UDim2.new(1, -130, 0, 20)
	toggleButton.BackgroundColor3 = Color3.fromRGB(30, 30, 30)
	toggleButton.TextColor3 = Color3.fromRGB(255, 255, 255)
	toggleButton.Text = "Sf"
	toggleButton.Font = Enum.Font.GothamBold
	toggleButton.TextSize = 8
	toggleButton.TextScaled = true
	toggleButton.BackgroundTransparency = 0
	toggleButton.TextTransparency = 0
	toggleButton.Parent = gui
	toggleButton.Draggable = true
	Instance.new("UICorner", toggleButton).CornerRadius = UDim.new(0, 8)
	
    local TweenService = game:GetService("TweenService")

    local duration = 2
    local targetTransparency = 0

    local function fadeIn()
        local tweenInfo = TweenInfo.new(
            duration,
            Enum.EasingStyle.Quad,
            Enum.EasingDirection.Out
        )
    
        local targetProperties = {
            BackgroundTransparency = targetTransparency,
            TextTransparency = targetTransparency
        }
    
        local fadeTween = TweenService:Create(toggleButton, tweenInfo, targetProperties)
        fadeTween:Play()
    end

    toggleButton.BackgroundTransparency = 1
    toggleButton.TextTransparency = 1

    toggleButton.Visible = true
    fadeIn()
    
    local Players = game:GetService("Players")
    local player = Players.LocalPlayer

    local function handleCommand(message)
        local args = string.split(message, " ")
        if args[1] == "/sf" and args[2] then
            local command = args[2]:lower()
        
            if command == "hidetoggle" then
                toggleButton.Visible = false
            elseif command == "showtoggle" then
                toggleButton.Visible = true
            end
        end
    end

    local isNewChat = game:GetService("TextChatService").ChatVersion == Enum.ChatVersion.TextChatService

    if isNewChat then
        local TextChatService = game:GetService("TextChatService")
    
        TextChatService.OnIncomingMessage = function(message)
            if message.TextSource and message.TextSource.UserId == player.UserId then
                task.spawn(function()
                    handleCommand(message.Text)
                end)
            end
        
            return TextChatService.CreateTextChatMessageProperties(message)
        end
    
    else
        player.Chatted:Connect(function(message)
            handleCommand(message)
        end)
    end

	local isVisible = true
	local startTime = 0
	local countdownTime = 0
	local countdownRunning = false

	local function toggletoggleSmartFloat()
    isVisible = not isVisible
    part.CanCollide = false

    for _, part in ipairs(workspace:GetChildren()) do
        if part:IsA("Part") then
            for _, sg in ipairs(part:GetChildren()) do
                if sg:IsA("SurfaceGui") and sg:GetAttribute("ControlledByToggle") then
                    part.Transparency = isVisible and 0.8 or 1
                    part.CanCollide = false
                    sg.Enabled = isVisible
                end
            end
        end
    end
end
	
	toggleButton.MouseButton1Click:Connect(toggletoggleSmartFloat)
	
	userInput.InputBegan:Connect(function(input, gameProcessed)
		if gameProcessed then return end
		if input.KeyCode == toggleKey then
			toggletoggleSmartFloat()
		end
	end)
end
createGui()
print("ℹ️ SmartFloat // SmartFloat Loaded!")
warn("⚠️ SmartFloat // If there is a bug, you can report it to this email: fiangaming005@gmail.com")
SetNotify("ℹ️ SmartFloat", "SmartFloat Loaded!", 5)
wait(3)
SetNotify("ℹ️ SmartFloat", "Thank you for using SmartFloat!", 5)
